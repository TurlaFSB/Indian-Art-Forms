import React, { useState } from "react";
import { MATERIAL_ENCYCLOPEDIA, PIGMENT_LABORATORY, LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { FlaskConical, Layers, Sparkles, ArrowRight, ShieldCheck, Beaker } from "lucide-react";

export default function MaterialAtlas({ onSelectLocation = () => {} }) {
  const [selectedMaterialTab, setSelectedMaterialTab] = useState("materials"); // materials | pigments
  const [activePigment, setActivePigment] = useState(PIGMENT_LABORATORY[0]);

  return (
    <div className="material-atlas-section" id="materials">
      <div className="section-head">
        <div>
          <div className="eyebrow"><Layers size={13} /> 05 / MATERIAL ATLAS & PIGMENT LABORATORY</div>
          <h2>Matter into<br /><em>Meaning.</em></h2>
        </div>
        <p>
          Art is never just an image. The density of granite, the mathematics of woven silk, the volcanic chemistry of cinnabar, and the deep blue of Afghan lapis lazuli shape what could be made and how space was consecrated.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="material-mode-tabs">
        <button
          className={selectedMaterialTab === "materials" ? "active" : ""}
          onClick={() => {
            soundEngine.playChime("select");
            setSelectedMaterialTab("materials");
          }}
        >
          <Layers size={14} /> RAW MATERIAL GEOGRAPHY
        </button>
        <button
          className={selectedMaterialTab === "pigments" ? "active" : ""}
          onClick={() => {
            soundEngine.playChime("select");
            setSelectedMaterialTab("pigments");
          }}
        >
          <FlaskConical size={14} /> SCIENTIFIC PIGMENT LABORATORY
        </button>
      </div>

      {/* VIEW 1: RAW MATERIAL GEOGRAPHY */}
      {selectedMaterialTab === "materials" && (
        <div className="material-encyclopedia-grid">
          {MATERIAL_ENCYCLOPEDIA.map((m) => (
            <article key={m.id} className="material-card">
              <div className="material-card-header">
                <span className="material-number">{m.name.toUpperCase()}</span>
              </div>
              <h3>{m.name}</h3>
              <div className="material-subtypes">
                <b>VARIETIES & REGIONAL STRATA:</b>
                <p>{m.types.join(" · ")}</p>
              </div>

              <div className="material-detail-block">
                <small>GEOGRAPHIC CORRIDORS</small>
                <p>{m.geography}</p>
              </div>

              <div className="material-detail-block">
                <small>CRAFT & STRUCTURAL LOGIC</small>
                <p>{m.properties}</p>
              </div>

              <div className="material-detail-block highlight">
                <small>CULTURAL & SACRED SIGNIFICANCE</small>
                <p>{m.culturalSignificance}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* VIEW 2: SCIENTIFIC PIGMENT LABORATORY */}
      {selectedMaterialTab === "pigments" && (
        <div className="pigment-laboratory-layout">
          {/* Pigment Selection Sidebar */}
          <div className="pigment-selector-list">
            <span className="eyebrow"><Beaker size={12} /> SELECT PIGMENT SPECIMEN</span>
            {PIGMENT_LABORATORY.map((p) => {
              const isSelected = activePigment.id === p.id;
              return (
                <button
                  key={p.id}
                  className={`pigment-select-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    soundEngine.playChime("select");
                    setActivePigment(p);
                  }}
                >
                  <span className={`swatch-circle pigment-${p.id}`} />
                  <div>
                    <b>{p.name}</b>
                    <small>{p.chemical}</small>
                  </div>
                  {isSelected && <ArrowRight size={14} />}
                </button>
              );
            })}
          </div>

          {/* Active Pigment Deep Analysis Card */}
          <div className="pigment-analysis-board">
            <div className="analysis-top-banner">
              <div>
                <span className="eyebrow">CONSERVATION CHEMICAL ANALYSIS</span>
                <h2>{activePigment.name}</h2>
              </div>
              <div className="chemical-formula-badge">
                <span>FORMULA:</span>
                <code>{activePigment.chemical}</code>
              </div>
            </div>

            <div className="analysis-grid-cards">
              <div className="analysis-card">
                <small>MINERAL & BOTANICAL ORIGIN</small>
                <p>{activePigment.source}</p>
              </div>

              <div className="analysis-card">
                <small>ATELIER PREPARATION METHOD</small>
                <p>{activePigment.preparation}</p>
              </div>

              <div className="analysis-card">
                <small>OPTICAL & MATERIAL PROPERTIES</small>
                <p>{activePigment.properties}</p>
              </div>

              <div className="analysis-card">
                <small>CANONICAL TRADITIONS & SITES</small>
                <div className="tradition-pills">
                  {activePigment.traditions.map((t) => (
                    <span key={t} className="tradition-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Evidence Certification Tag */}
            <div className="pigment-evidence-footer">
              <ShieldCheck size={16} />
              <div>
                <b>ACADEMIC EVIDENCE CLASSIFICATION:</b>
                <p>{activePigment.evidenceLevel}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
