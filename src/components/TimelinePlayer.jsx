import React, { useState, useEffect, useMemo } from "react";
import { ERAS, LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Eye,
  Layers,
  Compass
} from "lucide-react";

// Mercator projection for the timeline map
function project(lon, lat, width = 480, height = 520) {
  const minLon = 68.0;
  const maxLon = 97.5;
  const minLat = 7.5;
  const maxLat = 37.5;

  const baseScale = width / (maxLon - minLon);
  const x = (lon - minLon) * baseScale;
  const y = height - (lat - minLat) * (height / (maxLat - minLat));
  return { x, y };
}

export default function TimelinePlayer({
  activeEra = "all",
  onEraChange,
  onLocationSelect = () => {},
  onInspectArtwork = () => {}
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(3200); // ms per step

  const eraSequence = ERAS.slice(1); // sequence without 'all'
  const currentIndex = eraSequence.findIndex((e) => e.id === activeEra);

  // Auto-play timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % eraSequence.length;
        const nextEra = eraSequence[nextIndex];
        soundEngine.playChime("route");
        onEraChange(nextEra.id);
      }, playbackSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, eraSequence, playbackSpeed, onEraChange]);

  const togglePlay = () => {
    soundEngine.playChime("select");
    setIsPlaying((v) => !v);
  };

  const handleEraClick = (eraId) => {
    soundEngine.playChime("select");
    setIsPlaying(false);
    onEraChange(activeEra === eraId ? "all" : eraId);
  };

  const currentEraObj = ERAS.find((e) => e.id === activeEra) || ERAS[0];

  // Active locations for this era
  const activeLocationsForEra = useMemo(() => {
    if (activeEra === "all") return LOCATIONS;
    return LOCATIONS.filter((l) => l.era === activeEra);
  }, [activeEra]);

  return (
    <div className="timeline-master-container">
      {/* 1. TOP CONTROLS & HUD */}
      <div className="timeline-hud-bar">
        <div className="timeline-hud-title">
          <div className="timeline-badge-tag">
            <Clock size={13} />
            <span>CHRONO-SPATIAL TIME MACHINE</span>
          </div>
          <h2>{currentEraObj.label}</h2>
          <span className="era-date-range">{currentEraObj.date}</span>
        </div>

        {/* Playback Control Cluster */}
        <div className="timeline-control-cluster">
          <button
            className={`timeline-play-btn ${isPlaying ? "playing" : ""}`}
            onClick={togglePlay}
            title={isPlaying ? "Pause Timeline Progression" : "Play Timeline Progression"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span>{isPlaying ? "PAUSE CHRONOLOGY" : "PLAY TIMELINE"}</span>
          </button>

          <button
            className="timeline-speed-btn"
            onClick={() => setPlaybackSpeed((s) => (s === 3200 ? 1800 : 3200))}
            title="Toggle playback speed"
          >
            <FastForward size={14} />
            <span>{playbackSpeed === 3200 ? "1X SPEED" : "2X SPEED"}</span>
          </button>

          <button
            className="timeline-reset-btn"
            onClick={() => {
              setIsPlaying(false);
              onEraChange("all");
            }}
            title="Show All Eras (Full 14,000-Year Continuum)"
          >
            <RotateCcw size={14} />
            <span>FULL CONTINUUM</span>
          </button>
        </div>
      </div>

      {/* 2. CHRONO-SPATIAL SPLIT STAGE (Map of active era + Curatorial Synthesis) */}
      <div className="timeline-split-stage">
        {/* Left: Synchronized Mini Vector Map of India for Active Era */}
        <div className="timeline-mini-map-box">
          <div className="mini-map-header">
            <span className="mini-map-title">
              <Compass size={13} /> GEOGRAPHIC ILLUMINATION ({activeLocationsForEra.length} SITES)
            </span>
          </div>

          <div className="mini-map-svg-wrap">
            <svg viewBox="0 0 480 520" className="timeline-mini-svg">
              <defs>
                <radialGradient id="timelineGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="240" cy="260" r="220" fill="url(#timelineGlow)" />

              {/* India Landmass Contour */}
              <path
                d="M 140,55 
                   C 150,35 175,25 190,28 
                   C 210,30 220,50 230,65 
                   C 245,75 265,80 285,85 
                   C 310,90 335,95 355,105 
                   C 380,115 410,130 425,145 
                   C 440,160 435,175 425,185 
                   C 405,195 390,185 375,190 
                   C 365,195 355,210 345,220 
                   C 340,235 335,250 320,270 
                   C 305,295 290,325 275,350 
                   C 260,385 245,420 230,455 
                   C 225,470 215,480 210,480 
                   C 205,480 200,470 195,450 
                   C 180,410 165,375 150,340 
                   C 140,315 130,290 120,260 
                   C 110,240 85,225 75,215 
                   C 65,205 60,190 65,180 
                   C 70,170 90,165 105,170 
                   C 115,175 125,185 130,180 
                   C 135,175 130,155 125,140 
                   C 120,125 110,110 120,90 
                   C 125,75 130,65 140,55 Z"
                fill="#111622"
                stroke="#28334a"
                strokeWidth="1.5"
              />

              {/* Inactive site ghost dots */}
              {LOCATIONS.map((loc) => {
                const pos = project(loc.lon, loc.lat, 480, 520);
                const isActive = activeLocationsForEra.some((l) => l.id === loc.id);
                if (isActive) return null;
                return (
                  <circle
                    key={`ghost-${loc.id}`}
                    cx={pos.x}
                    cy={pos.y}
                    r={2.5}
                    fill="#283244"
                  />
                );
              })}

              {/* Active era glowing pins */}
              {activeLocationsForEra.map((loc) => {
                const pos = project(loc.lon, loc.lat, 480, 520);
                return (
                  <g
                    key={`active-${loc.id}`}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className="timeline-active-pin"
                    onClick={() => onLocationSelect(loc)}
                  >
                    <circle r={14} fill="none" stroke="#d4af37" strokeWidth={1.2} className="pin-pulse-animation" />
                    <circle r={6} fill="#d4af37" stroke="#ffffff" strokeWidth={1.5} />
                    <text
                      x={10}
                      y={4}
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="Inter"
                      paintOrder="stroke"
                      stroke="#0c0e13"
                      strokeWidth="2.5"
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Curatorial Historical Synthesis Card */}
        <div className="timeline-synthesis-card">
          <div className="synthesis-header">
            <span className="synthesis-eyebrow">
              <Sparkles size={13} /> CURATORIAL PERIOD THESIS
            </span>
            <h3>{currentEraObj.desc}</h3>
          </div>

          <div className="synthesis-active-centers-box">
            <span className="active-centers-title">
              <MapPin size={13} /> ACTIVE ARTISTIC HUBS ({activeLocationsForEra.length}):
            </span>
            <div className="timeline-hub-pills">
              {activeLocationsForEra.map((loc) => (
                <button
                  key={loc.id}
                  className="timeline-hub-pill-btn"
                  onClick={() => onLocationSelect(loc)}
                >
                  <span className="pill-dot" />
                  <b>{loc.name}</b>
                  <small>({loc.state} · {loc.form})</small>
                </button>
              ))}
            </div>
          </div>

          <div className="synthesis-insights-grid">
            <div className="insight-box">
              <small>DOMINANT MEDIUMS</small>
              <b>
                {Array.from(new Set(activeLocationsForEra.flatMap((l) => l.materials))).slice(0, 4).join(" · ") || "Rock Ochres, Basalt, Wood"}
              </b>
            </div>
            <div className="insight-box">
              <small>REIGNING PATRONAGE</small>
              <b>
                {activeLocationsForEra.map((l) => l.dynasty).slice(0, 2).join(" · ") || "Monastic Sangha, Imperial Guilds"}
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STEPPER SCRUBBER TRACK */}
      <div className="timeline-stepper-track">
        {ERAS.map((era, i) => {
          const isActive = activeEra === era.id;
          const count =
            era.id === "all"
              ? LOCATIONS.length
              : LOCATIONS.filter((l) => l.era === era.id).length;

          return (
            <button
              key={era.id}
              className={`timeline-step-card ${isActive ? "active-step" : ""}`}
              onClick={() => handleEraClick(era.id)}
            >
              <div className="step-top-line">
                <span className="step-seq">{i === 0 ? "ALL" : `0${i}`}</span>
                <span className="step-badge-count">{count} SITES</span>
              </div>
              <strong className="step-card-title">{era.label}</strong>
              <span className="step-card-date">{era.date}</span>
            </button>
          );
        })}
      </div>

      {/* 4. ACTIVE SITES FILMSTRIP REEL */}
      <div className="timeline-filmstrip-section">
        <div className="filmstrip-header">
          <h3>
            Artworks & Monuments from this Era <span>({activeLocationsForEra.length} Canonical Records)</span>
          </h3>
        </div>

        <div className="timeline-artworks-grid">
          {activeLocationsForEra.map((loc) => (
            <article key={loc.id} className="timeline-art-card">
              <div
                className="art-card-thumb"
                style={{ backgroundImage: `url(${loc.image})` }}
              >
                <span className="art-card-period">{loc.period}</span>
                <button
                  className="art-card-inspect-btn"
                  onClick={() => {
                    const targetArt = loc.artworks?.[0] || {
                      title: loc.name,
                      type: loc.form,
                      date: loc.period,
                      image: loc.image,
                      description: loc.description,
                      hotspots: [
                        { x: 50, y: 40, title: "Material & Craft", note: loc.materials.join(", ") },
                        { x: 60, y: 65, title: "Patronage & Context", note: loc.patronage }
                      ]
                    };
                    onInspectArtwork(targetArt, loc);
                  }}
                >
                  <Eye size={13} /> <span>Inspect Hotspots</span>
                </button>
              </div>

              <div className="art-card-body">
                <span className="art-card-region">{loc.region} India · {loc.form}</span>
                <h4>{loc.name} — {loc.state}</h4>
                <p className="art-card-title">{loc.title}</p>
                <p className="art-card-desc">{loc.description.slice(0, 110)}...</p>

                <div className="art-card-footer">
                  <button
                    className="view-dossier-link"
                    onClick={() => onLocationSelect(loc)}
                  >
                    Open Curatorial Dossier <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
