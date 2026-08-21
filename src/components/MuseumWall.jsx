import React, { useState } from "react";
import { LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { Eye, Image as ImageIcon, Sparkles, ArrowRight, Filter } from "lucide-react";

export default function MuseumWall({ onInspectArtwork = () => {} }) {
  const [selectedFormFilter, setSelectedFormFilter] = useState("All");

  // Aggregate all artwork records across all locations
  const allArtworks = LOCATIONS.flatMap(l =>
    l.artworks.map(a => ({
      ...a,
      location: l
    }))
  );

  const filteredArtworks = allArtworks.filter(a => {
    if (selectedFormFilter === "All") return true;
    return a.location.form === selectedFormFilter;
  });

  const availableForms = ["All", "Mural & Cave Painting", "Miniature Painting", "Sculpture & Bronze Casting", "Temple Architecture", "Folk & Living Indigenous Art", "Woven Textile & Resist Fiber", "Modernist Fine Art"];

  return (
    <div className="museum-wall-section" id="gallery">
      <div className="section-head">
        <div>
          <div className="eyebrow"><ImageIcon size={13} /> 07 / THE MUSEUM WALL</div>
          <h2>Objects Mounted<br />in <em>Space.</em></h2>
        </div>
        <p>
          Each artwork is an inhabited archive. Contemplate these objects as they would hang on a museum wall, or select any piece to enter the deep conservation inspector.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-form-filters">
        {availableForms.map(f => (
          <button
            key={f}
            className={selectedFormFilter === f ? "active" : ""}
            onClick={() => {
              soundEngine.playChime("select");
              setSelectedFormFilter(f);
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Asymmetrical Exhibition Wall */}
      <div className="museum-wall-layout">
        {filteredArtworks.map((item, i) => {
          // Subtle rhythmic height variance for editorial museum layout
          const isLarge = i % 5 === 0;
          return (
            <div
              key={`${item.location.id}-${item.title}`}
              className={`wall-mounted-frame ${isLarge ? "frame-large" : ""}`}
              onClick={() => {
                soundEngine.playChime("open");
                onInspectArtwork(item, item.location);
              }}
            >
              <div className="wall-frame-matting">
                <div
                  className="wall-artwork-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="wall-hover-overlay">
                    <Eye size={20} />
                    <span>INSPECT OBJECT & HOTSPOTS</span>
                  </div>
                </div>
              </div>

              {/* Museum Plaque / Wall Label */}
              <div className="museum-wall-label">
                <div className="label-accession">ACC. NO. LC-2026-{String(i + 1).padStart(3, "0")}</div>
                <h4>{item.title}</h4>
                <div className="label-origin">
                  <b>{item.location.name}</b>, {item.location.state}
                </div>
                <div className="label-medium">{item.type} · {item.date}</div>
                <p className="label-caption">{item.description}</p>
                {item.hotspots && (
                  <span className="label-hotspot-hint">
                    <Sparkles size={10} /> {item.hotspots.length} Curatorial Hotspots
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
