import React, { useState } from "react";
import { COMPARATIVE_STUDIO_PAIRS, LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { ArrowLeft, ArrowRight, Scale, Sparkles, X, Compass, Layers } from "lucide-react";

export default function CompareStudio({
  initialLocationA = null,
  initialLocationB = null,
  onClose,
  onSelectLocation = () => {}
}) {
  const [selectedPairId, setSelectedPairId] = useState(
    COMPARATIVE_STUDIO_PAIRS[0].id
  );

  const [customLocA, setCustomLocA] = useState(
    initialLocationA?.id || COMPARATIVE_STUDIO_PAIRS[0].idA
  );
  const [customLocB, setCustomLocB] = useState(
    initialLocationB?.id || COMPARATIVE_STUDIO_PAIRS[0].idB
  );

  const activeCuratedPair = COMPARATIVE_STUDIO_PAIRS.find(
    p => p.id === selectedPairId
  );

  const locA = LOCATIONS.find(l => l.id === customLocA) || LOCATIONS[0];
  const locB = LOCATIONS.find(l => l.id === customLocB) || LOCATIONS[1];

  const handleCuratedPairSelect = (pair) => {
    soundEngine.playChime("select");
    setSelectedPairId(pair.id);
    setCustomLocA(pair.idA);
    setCustomLocB(pair.idB);
  };

  return (
    <div className="compare-studio-overlay">
      <div className="compare-studio-header">
        <div className="studio-brand">
          <div className="eyebrow"><Scale size={13} /> CURATOR'S COMPARATIVE STUDIO</div>
          <h2>Cross-Regional Stylistic & Material Analysis</h2>
        </div>
        <button className="studio-close-btn" onClick={onClose}>
          <X size={16} /> <span>CLOSE STUDIO</span>
        </button>
      </div>

      <div className="compare-studio-content">
        {/* Curated Presets Bar */}
        <div className="curated-presets-bar">
          <span className="presets-label">CURATED ACADEMIC PAIRS:</span>
          <div className="preset-buttons">
            {COMPARATIVE_STUDIO_PAIRS.map(p => (
              <button
                key={p.id}
                className={selectedPairId === p.id ? "active-preset" : ""}
                onClick={() => handleCuratedPairSelect(p)}
              >
                {p.nameA} vs {p.nameB}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Selector Dropdowns */}
        <div className="custom-pair-selectors">
          <div className="selector-column">
            <label>TRADITION A</label>
            <select
              value={customLocA}
              onChange={e => {
                soundEngine.playChime("select");
                setCustomLocA(e.target.value);
                setSelectedPairId(null);
              }}
            >
              {LOCATIONS.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name} — {l.state} ({l.form})
                </option>
              ))}
            </select>
          </div>

          <div className="vs-divider-badge">VS</div>

          <div className="selector-column">
            <label>TRADITION B</label>
            <select
              value={customLocB}
              onChange={e => {
                soundEngine.playChime("select");
                setCustomLocB(e.target.value);
                setSelectedPairId(null);
              }}
            >
              {LOCATIONS.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name} — {l.state} ({l.form})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Visual Hero Comparison Cards */}
        <div className="compare-hero-grid">
          {/* Card A */}
          <article className="compare-card">
            <div
              className="compare-card-image"
              style={{ backgroundImage: `url(${locA.image})` }}
            >
              <span className="compare-period-badge">{locA.period}</span>
            </div>
            <div className="compare-card-meta">
              <span className="meta-tag">{locA.region} INDIA</span>
              <h3>{locA.name}</h3>
              <p className="compare-subtitle">{locA.title}</p>
              <button
                className="view-map-jump-btn"
                onClick={() => {
                  onSelectLocation(locA);
                  onClose();
                }}
              >
                Inspect on Living Map <ArrowRight size={12} />
              </button>
            </div>
          </article>

          {/* Card B */}
          <article className="compare-card">
            <div
              className="compare-card-image"
              style={{ backgroundImage: `url(${locB.image})` }}
            >
              <span className="compare-period-badge">{locB.period}</span>
            </div>
            <div className="compare-card-meta">
              <span className="meta-tag">{locB.region} INDIA</span>
              <h3>{locB.name}</h3>
              <p className="compare-subtitle">{locB.title}</p>
              <button
                className="view-map-jump-btn"
                onClick={() => {
                  onSelectLocation(locB);
                  onClose();
                }}
              >
                Inspect on Living Map <ArrowRight size={12} />
              </button>
            </div>
          </article>
        </div>

        {/* Curated Deep Comparison Matrix (if curated pair active) */}
        {activeCuratedPair ? (
          <div className="comparison-matrix-table">
            <div className="matrix-title">
              <Sparkles size={14} />
              <span>DIMENSIONAL BREAKDOWN: {activeCuratedPair.summary}</span>
            </div>

            {activeCuratedPair.dimensions.map((d, i) => (
              <div key={i} className="matrix-row">
                <div className="matrix-category">{d.category}</div>
                <div className="matrix-side side-a">
                  <b>{locA.name}:</b>
                  <p>{d.a}</p>
                </div>
                <div className="matrix-side side-b">
                  <b>{locB.name}:</b>
                  <p>{d.b}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Dynamic Generated Comparison Table */
          <div className="comparison-matrix-table">
            <div className="matrix-title">
              <Sparkles size={14} />
              <span>DYNAMIC SYSTEM COMPARISON</span>
            </div>

            <div className="matrix-row">
              <div className="matrix-category">Artistic Form & Period</div>
              <div className="matrix-side side-a">
                <b>{locA.name}:</b>
                <p>{locA.form} · {locA.period}</p>
              </div>
              <div className="matrix-side side-b">
                <b>{locB.name}:</b>
                <p>{locB.form} · {locB.period}</p>
              </div>
            </div>

            <div className="matrix-row">
              <div className="matrix-category">Materials & Pigments</div>
              <div className="matrix-side side-a">
                <b>{locA.name}:</b>
                <p>{locA.materials.join(", ")}</p>
              </div>
              <div className="matrix-side side-b">
                <b>{locB.name}:</b>
                <p>{locB.materials.join(", ")}</p>
              </div>
            </div>

            <div className="matrix-row">
              <div className="matrix-category">Patronage Ecosystem</div>
              <div className="matrix-side side-a">
                <b>{locA.name}:</b>
                <p>{locA.patronage}</p>
              </div>
              <div className="matrix-side side-b">
                <b>{locB.name}:</b>
                <p>{locB.patronage}</p>
              </div>
            </div>

            <div className="matrix-row">
              <div className="matrix-category">Spatial Philosophy</div>
              <div className="matrix-side side-a">
                <b>{locA.name}:</b>
                <p>{locA.spatialPhilosophy || locA.theory}</p>
              </div>
              <div className="matrix-side side-b">
                <b>{locB.name}:</b>
                <p>{locB.spatialPhilosophy || locB.theory}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="compare-studio-footer">
        <button className="footer-back-btn" onClick={onClose}>
          <ArrowLeft size={14} /> RETURN TO ART ATLAS
        </button>
      </div>
    </div>
  );
}
