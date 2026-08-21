import React, { useState } from "react";
import { INFLUENCE_CONNECTIONS, LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { ArrowRight, Filter, Network, ShieldCheck, Sparkles, Compass } from "lucide-react";

export default function InfluenceNetwork({ onSelectLocation = () => {} }) {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedEvidence, setSelectedEvidence] = useState("all");

  const filteredConnections = INFLUENCE_CONNECTIONS.filter(c => {
    const matchesType = selectedType === "all" || c.type === selectedType;
    const matchesEvidence = selectedEvidence === "all" || c.evidence === selectedEvidence;
    return matchesType && matchesEvidence;
  });

  const relationTypes = [
    { id: "all", label: "ALL RELATIONSHIPS" },
    { id: "style", label: "STYLISTIC & FORMAL" },
    { id: "trade", label: "TRADE & MARITIME" },
    { id: "pilgrimage", label: "PILGRIMAGE & RITUAL" },
    { id: "patronage", label: "PATRONAGE & ATELIERS" },
    { id: "material", label: "MATERIAL TRADITIONS" },
    { id: "migration", label: "ARTISAN MIGRATION" }
  ];

  return (
    <div className="influence-network-section">
      <div className="section-head">
        <div>
          <div className="eyebrow"><Network size={13} /> 04 / CIRCULATION & TRANSMISSION GRAPH</div>
          <h2>How Art Moves<br />Across <em>Geography.</em></h2>
        </div>
        <p>
          Artistic traditions do not develop in sealed containers. They circulate through trade routes, royal atelier migrations, pilgrimage corridors, and raw material access.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="network-filters-bar">
        <div className="filter-group">
          <span className="filter-label">RELATIONSHIP NATURE:</span>
          <div className="filter-pill-row">
            {relationTypes.map(t => (
              <button
                key={t.id}
                className={selectedType === t.id ? "active" : ""}
                onClick={() => {
                  soundEngine.playChime("select");
                  setSelectedType(t.id);
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">EVIDENCE LEVEL:</span>
          <select
            value={selectedEvidence}
            onChange={e => setSelectedEvidence(e.target.value)}
          >
            <option value="all">All Evidence Classifications</option>
            <option value="Directly Documented">Directly Documented (Epigraphs / Ledgers)</option>
            <option value="Strong Scholarly Consensus">Strong Scholarly Consensus</option>
            <option value="Probable / Inferred">Probable / Inferred</option>
            <option value="Curatorial Interpretation">Curatorial Interpretation</option>
          </select>
        </div>
      </div>

      {/* Connection Graph Cards Grid */}
      <div className="network-connections-grid">
        {filteredConnections.map((conn, i) => {
          const fromLoc = LOCATIONS.find(l => l.id === conn.from);
          const toLoc = LOCATIONS.find(l => l.id === conn.to);
          if (!fromLoc || !toLoc) return null;

          return (
            <article key={i} className="network-card">
              <div className="network-card-top">
                <span className={`link-type-tag type-${conn.type}`}>
                  {conn.type.toUpperCase()}
                </span>
                <span className="evidence-badge">
                  <ShieldCheck size={11} /> {conn.evidence}
                </span>
              </div>

              <div className="network-endpoints">
                <div className="endpoint-node">
                  <b>{fromLoc.name}</b>
                  <small>{fromLoc.state} · {fromLoc.period}</small>
                </div>
                <div className="endpoint-arrow">
                  <span className={`arrow-line type-${conn.type}`} />
                  <ArrowRight size={16} />
                </div>
                <div className="endpoint-node">
                  <b>{toLoc.name}</b>
                  <small>{toLoc.state} · {toLoc.period}</small>
                </div>
              </div>

              <h4>{conn.label}</h4>
              <p>{conn.narrative}</p>

              <div className="network-card-actions">
                <button
                  className="jump-node-btn"
                  onClick={() => onSelectLocation(fromLoc)}
                >
                  Focus {fromLoc.name} <ArrowRight size={11} />
                </button>
                <button
                  className="jump-node-btn"
                  onClick={() => onSelectLocation(toLoc)}
                >
                  Focus {toLoc.name} <ArrowRight size={11} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
