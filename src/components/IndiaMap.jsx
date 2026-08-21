import React, { useEffect, useRef, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { soundEngine } from "../utils/soundEngine";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Eye,
  MapPin,
  Volume2,
  Compass
} from "lucide-react";

// Regional camera presets [lat, lon, zoomLevel]
const REGION_VIEWPORTS = {
  "All regions": { center: [22.0, 79.5], zoom: 5 },
  "North": { center: [31.5, 76.5], zoom: 6.5 },
  "North-West": { center: [26.5, 74.0], zoom: 6.5 },
  "West": { center: [19.5, 74.5], zoom: 6.5 },
  "Central": { center: [23.5, 78.5], zoom: 6.5 },
  "East": { center: [23.5, 86.0], zoom: 6.5 },
  "South": { center: [13.5, 78.5], zoom: 6.5 }
};

export default function IndiaMap({
  locations = [],
  onSelect = () => {},
  selectedLocation = null,
  selectedRegion = "All regions",
  onRegionChange = () => {},
  onInspectArtwork = () => {}
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const arcsGroupRef = useRef(null);

  const activeFocusLocation = selectedLocation || locations[0];

  // 1. Initialize Leaflet Map Instance
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent re-initialization
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [22.0, 79.5],
        zoom: 5,
        minZoom: 4,
        maxZoom: 10,
        zoomControl: false,
        attributionControl: false
      });

      // Ultra-premium Dark Velvet CartoDB Matter basemap tiles
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd"
      }).addTo(map);

      // Create separate marker and arc layer groups
      arcsGroupRef.current = L.layerGroup().addTo(map);
      markersGroupRef.current = L.layerGroup().addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // 2. Render Markers and Curved Transmission Arcs
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !markersGroupRef.current || !arcsGroupRef.current) return;

    // Clear previous markers & arcs
    markersGroupRef.current.clearLayers();
    arcsGroupRef.current.clearLayers();

    // Draw Influence Arcs from active location
    if (activeFocusLocation && activeFocusLocation.connectedIds) {
      activeFocusLocation.connectedIds.forEach((targetId) => {
        const targetLoc = locations.find((l) => l.id === targetId);
        if (targetLoc) {
          const latlngs = [
            [activeFocusLocation.lat, activeFocusLocation.lon],
            [
              (activeFocusLocation.lat + targetLoc.lat) / 2 + 0.5,
              (activeFocusLocation.lon + targetLoc.lon) / 2 - 0.5
            ],
            [targetLoc.lat, targetLoc.lon]
          ];

          const arc = L.polyline(latlngs, {
            color: "#d4af37",
            weight: 2.2,
            opacity: 0.85,
            dashArray: "6, 6",
            lineCap: "round"
          });

          arcsGroupRef.current.addLayer(arc);
        }
      });
    }

    // Add Museum Pins
    locations.forEach((loc) => {
      const isSelected = activeFocusLocation?.id === loc.id;
      const isConnected = activeFocusLocation?.connectedIds?.includes(loc.id);

      const customIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: `
          <div class="leaflet-pin-wrapper ${isSelected ? "selected" : ""} ${isConnected ? "connected" : ""}">
            <div class="pin-halo"></div>
            <div class="pin-ring">
              <div class="pin-core"></div>
            </div>
            <div class="pin-label-pill ${isSelected ? "selected" : ""}">${loc.name}</div>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const marker = L.marker([loc.lat, loc.lon], { icon: customIcon });

      marker.on("click", () => {
        soundEngine.playChime("open");
        onSelect(loc);
        map.flyTo([loc.lat, loc.lon], Math.max(map.getZoom(), 6), {
          duration: 1.0,
          easeLinearity: 0.25
        });
      });

      // Hover tooltip for quick preview
      marker.bindTooltip(
        `<div class="map-tooltip-content">
          <b>${loc.name}</b> · <small>${loc.state}</small>
          <div class="tooltip-period">${loc.period}</div>
        </div>`,
        { direction: "top", offset: [0, -12], opacity: 0.95 }
      );

      markersGroupRef.current.addLayer(marker);
    });
  }, [locations, activeFocusLocation, onSelect]);

  // 3. Handle Region Pan & Zoom
  const handleRegionClick = (region) => {
    soundEngine.playChime("select");
    onRegionChange(region);
    const map = mapInstanceRef.current;
    if (map) {
      const target = REGION_VIEWPORTS[region] || REGION_VIEWPORTS["All regions"];
      map.flyTo(target.center, target.zoom, { duration: 1.2 });
    }
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomOut();
  };

  const handleReset = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.0, 79.5], 5, { duration: 1.0 });
      onRegionChange("All regions");
    }
  };

  // Connected sites for active focus location
  const activeConnections = useMemo(() => {
    if (!activeFocusLocation || !activeFocusLocation.connectedIds) return [];
    return activeFocusLocation.connectedIds
      .map((id) => locations.find((l) => l.id === id))
      .filter(Boolean);
  }, [activeFocusLocation, locations]);

  return (
    <div className="museum-map-layout">
      {/* LEFT / CENTER: Leaflet GIS Interactive Stage */}
      <div className="map-stage-wrapper">
        {/* Region Filter Bar */}
        <div className="map-region-filter-bar">
          <span className="region-bar-title">EXPLORE BY REGION:</span>
          <div className="region-buttons-row">
            {Object.keys(REGION_VIEWPORTS).map((region) => (
              <button
                key={region}
                className={`region-pill-btn ${selectedRegion === region ? "active" : ""}`}
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="map-zoom-tools">
            <button onClick={handleZoomIn} title="Zoom In">
              <ZoomIn size={15} />
            </button>
            <button onClick={handleZoomOut} title="Zoom Out">
              <ZoomOut size={15} />
            </button>
            <button onClick={handleReset} title="Reset View">
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Real-World Leaflet Map Container */}
        <div className="leaflet-map-host-container" ref={mapContainerRef} />

        {/* Floating Map Legend */}
        <div className="map-floating-legend">
          <div className="legend-badge">
            <span className="legend-dot active-dot" />
            <span>{locations.length} Canonical Heritage Centers</span>
          </div>
          <div className="legend-badge">
            <span className="legend-line" />
            <span>Cultural Transmission Corridor</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Instant Visual Exhibition Sidebar */}
      {activeFocusLocation && (
        <aside className="map-exhibit-sidebar">
          <div className="exhibit-card-wrapper">
            {/* Visual Hero Image Box */}
            <div className="exhibit-hero-image-box">
              <img
                src={activeFocusLocation.image}
                alt={activeFocusLocation.name}
                className="exhibit-hero-img-element"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="exhibit-image-gradient" />
              
              <div className="exhibit-hero-topline">
                <span className="exhibit-era-badge">{activeFocusLocation.period}</span>
                <span className="exhibit-region-badge">{activeFocusLocation.region} INDIA</span>
              </div>

              <button
                className="hero-inspect-btn"
                onClick={() => {
                  soundEngine.playChime("open");
                  const targetArt = activeFocusLocation.artworks?.[0] || {
                    title: activeFocusLocation.name,
                    type: activeFocusLocation.form,
                    date: activeFocusLocation.period,
                    image: activeFocusLocation.image,
                    description: activeFocusLocation.description,
                    hotspots: [
                      { x: 45, y: 40, title: "Material & Craft", note: activeFocusLocation.materials.join(", ") },
                      { x: 60, y: 65, title: "Patronage & Context", note: activeFocusLocation.patronage }
                    ]
                  };
                  onInspectArtwork(targetArt, activeFocusLocation);
                }}
              >
                <Eye size={16} /> <span>Inspect Artworks & Hotspots</span>
              </button>
            </div>

            {/* Exhibit Details Body */}
            <div className="exhibit-content-body">
              <div className="exhibit-title-group">
                <span className="exhibit-state-tag">
                  <MapPin size={13} /> {activeFocusLocation.state} · {activeFocusLocation.form}
                </span>
                <h2>{activeFocusLocation.name}</h2>
                <p className="exhibit-subtitle">{activeFocusLocation.title}</p>
              </div>

              {/* Spoken Audio Narration */}
              <div className="exhibit-audio-box">
                <button
                  className="play-audio-guide-btn"
                  onClick={() => {
                    soundEngine.speakNarration(
                      `${activeFocusLocation.name}, ${activeFocusLocation.state}. ${activeFocusLocation.description} ${activeFocusLocation.context}`
                    );
                  }}
                >
                  <Volume2 size={16} />
                  <span>Listen to Audio Guide Narration</span>
                </button>
              </div>

              <p className="exhibit-main-description">
                {activeFocusLocation.description}
              </p>

              {/* Spatial Theory Callout */}
              <div className="exhibit-theory-quote">
                <p>"{activeFocusLocation.spatialPhilosophy || activeFocusLocation.theory}"</p>
              </div>

              {/* Materials and Patrons */}
              <div className="exhibit-materials-grid">
                <div className="mat-box">
                  <small>MATERIALS USED</small>
                  <b>{activeFocusLocation.materials.join(" · ")}</b>
                </div>
                <div className="mat-box">
                  <small>DYNASTY & PATRONS</small>
                  <b>{activeFocusLocation.patronage || activeFocusLocation.dynasty}</b>
                </div>
              </div>

              {/* Connected Influence Links */}
              {activeConnections.length > 0 && (
                <div className="exhibit-connected-sites">
                  <small>CONNECTED CULTURAL HUBS:</small>
                  <div className="connected-site-pills">
                    {activeConnections.map((target) => (
                      <button
                        key={target.id}
                        className="connected-hub-btn"
                        onClick={() => {
                          soundEngine.playChime("open");
                          onSelect(target);
                          if (mapInstanceRef.current) {
                            mapInstanceRef.current.flyTo([target.lat, target.lon], 6.5, { duration: 1.0 });
                          }
                        }}
                      >
                        <span>{target.name}</span>
                        <ArrowRight size={12} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dossier Action */}
              <div className="exhibit-actions-footer">
                <button
                  className="view-full-dossier-btn"
                  onClick={() => {
                    soundEngine.playChime("open");
                    onSelect(activeFocusLocation);
                  }}
                >
                  View Full Curatorial Dossier <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}