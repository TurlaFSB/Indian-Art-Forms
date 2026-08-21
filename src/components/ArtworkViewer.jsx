import React, { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  Expand,
  Info,
  Maximize2,
  Minimize2,
  Sparkles,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  HelpCircle
} from "lucide-react";
import { gsap } from "gsap";
import { soundEngine } from "../utils/soundEngine";

export default function ArtworkViewer({ artwork, location, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [showMeta, setShowMeta] = useState(true);
  const stageRef = useRef();

  useEffect(() => {
    gsap.from(".art-stage-image", { opacity: 0, scale: 0.95, duration: 0.6, ease: "power3.out" });
    gsap.from(".art-record", { y: 20, opacity: 0, duration: 0.5, delay: 0.1 });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoomLevel(z => Math.min(z + 0.25, 2.5));
      if (e.key === "-") setZoomLevel(z => Math.max(z - 0.25, 0.75));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [artwork, onClose]);

  const handleHotspotClick = (spot) => {
    soundEngine.playChime("select");
    setActiveHotspot(activeHotspot?.title === spot.title ? null : spot);
  };

  return (
    <div className="art-viewer-modal">
      {/* Top Header */}
      <div className="art-viewer-header">
        <div className="art-header-brand">
          <b>THE LIVING CANVAS</b>
          <span>CONSERVATION & OBJECT INSPECTOR</span>
        </div>
        <div className="art-header-meta">
          <span>{location?.name} ({location?.state})</span>
          <i>·</i>
          <span>{artwork?.type}</span>
        </div>
        <button className="art-close-btn" onClick={onClose}>
          <X size={16} /> <span>CLOSE OBJECT</span>
        </button>
      </div>

      {/* Main Inspection Stage */}
      <div className="art-inspection-stage" ref={stageRef}>
        {/* Floating Zoom & Inspect HUD */}
        <div className="art-zoom-hud">
          <button
            onClick={() => setZoomLevel(z => Math.min(z + 0.3, 2.8))}
            title="Zoom in (+)"
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={() => setZoomLevel(z => Math.max(z - 0.3, 0.7))}
            title="Zoom out (-)"
          >
            <ZoomOut size={14} />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            title="Reset Zoom"
          >
            <RotateCcw size={13} />
          </button>
          <span className="zoom-percentage">{Math.round(zoomLevel * 100)}%</span>
        </div>

        {/* Artwork Canvas Container */}
        <div className="art-canvas-wrapper">
          <div
            className="art-stage-image"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.25s cubic-bezier(0.2, 0, 0.2, 1)"
            }}
          >
            <img src={artwork.image} alt={artwork.title} />

            {/* CURATORIAL HOTSPOTS OVERLAY */}
            {artwork.hotspots?.map((spot, i) => (
              <div
                key={i}
                className={`art-hotspot-pin ${
                  activeHotspot?.title === spot.title ? "active" : ""
                }`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={() => handleHotspotClick(spot)}
                title={spot.title}
              >
                <span className="hotspot-pulse" />
                <span className="hotspot-core">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOTSPOT CURATORIAL POPOVER CARD */}
        {activeHotspot && (
          <div className="hotspot-detail-card">
            <div className="hotspot-card-header">
              <div className="eyebrow"><Sparkles size={11} /> CURATORIAL ANNOTATION</div>
              <button onClick={() => setActiveHotspot(null)}><X size={13} /></button>
            </div>
            <h4>{activeHotspot.title}</h4>
            <p>{activeHotspot.note}</p>
            <div className="hotspot-card-footer">
              <small>Click elsewhere on the image or press ESC to dismiss.</small>
            </div>
          </div>
        )}
      </div>

      {/* OBJECT RECORD SIDEBAR */}
      {showMeta && (
        <aside className="art-record-sidebar">
          <div className="record-header">
            <div className="section-kicker">MUSEUM OBJECT RECORD</div>
            <button
              className="toggle-meta-btn"
              onClick={() => setShowMeta(false)}
              title="Collapse metadata sidebar"
            >
              <Minimize2 size={13} />
            </button>
          </div>

          <h2>{artwork.title}</h2>
          <div className="art-period-tag">{artwork.type} · {artwork.date}</div>

          <p className="art-body-desc">{artwork.description}</p>

          {artwork.hotspots && (
            <div className="hotspot-index-box">
              <span className="eyebrow"><Sparkles size={11} /> INTERACTIVE ANNOTATIONS</span>
              <p>Click on numbered markers across the artwork to inspect details:</p>
              <div className="hotspot-quick-list">
                {artwork.hotspots.map((spot, i) => (
                  <button
                    key={i}
                    className={`hotspot-list-btn ${
                      activeHotspot?.title === spot.title ? "selected" : ""
                    }`}
                    onClick={() => handleHotspotClick(spot)}
                  >
                    <b>0{i + 1}</b> <span>{spot.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="record-rule" />

          <div className="record-table">
            <div className="record-row">
              <small>GEOGRAPHIC SITE</small>
              <b>{location?.name}, {location?.state} ({location?.region})</b>
            </div>
            <div className="record-row">
              <small>PRIMARY MEDIUM / MATERIALS</small>
              <b>{location?.materials.join(", ")}</b>
            </div>
            <div className="record-row">
              <small>TECHNIQUE / CRAFT LOGIC</small>
              <b>{location?.techniques.join(", ")}</b>
            </div>
            <div className="record-row">
              <small>ART TRADITION / GUILD</small>
              <b>{location?.movements.join(", ")}</b>
            </div>
            <div className="record-row">
              <small>ACADEMIC REPOSITORY / SOURCE</small>
              <a href={location?.sourceUrl} target="_blank" rel="noreferrer">
                {location?.source}
              </a>
            </div>
          </div>

          <div className="academic-conservation-disclaimer">
            <Info size={13} />
            <p>
              Images represent curated high-fidelity museum records. Annotations reflect contemporary art historical consensus and material analysis.
            </p>
          </div>
        </aside>
      )}

      {/* Collapsed Sidebar Re-open Button */}
      {!showMeta && (
        <button
          className="reopen-meta-btn"
          onClick={() => setShowMeta(true)}
          title="Open object record"
        >
          <Info size={14} /> SHOW OBJECT RECORD
        </button>
      )}

      {/* Bottom Bar */}
      <div className="art-viewer-bottom-bar">
        <button onClick={onClose}>
          <ArrowLeft size={14} /> BACK TO EXHIBITION
        </button>
        <span>PRESS ESC TO EXIT · USE +/- TO ZOOM</span>
      </div>
    </div>
  );
}