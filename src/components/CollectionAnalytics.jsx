import React from "react";
import { LOCATIONS, REGIONS, FORMS, ERAS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { BarChart3, PieChart, Sparkles, ArrowRight, Filter } from "lucide-react";

export default function CollectionAnalytics({
  onFilterByRegion = () => {},
  onFilterByForm = () => {},
  onFilterByEra = () => {},
  onScrollToAtlas = () => {}
}) {
  // Aggregate statistics
  const regionCounts = REGIONS.slice(1).map(r => ({
    name: r,
    count: LOCATIONS.filter(l => l.region === r).length
  }));

  const formCounts = FORMS.slice(1).map(f => ({
    name: f,
    count: LOCATIONS.filter(l => l.form === f).length
  }));

  const eraCounts = ERAS.slice(1).map(e => ({
    id: e.id,
    name: e.label,
    count: LOCATIONS.filter(l => l.era === e.id).length
  }));

  return (
    <div className="collection-analytics-section" id="analytics">
      <div className="section-head">
        <div>
          <div className="eyebrow"><BarChart3 size={13} /> 09 / ARCHIVAL DATA ANALYTICS</div>
          <h2>Spatial & Temporal<br /><em>Metrics.</em></h2>
        </div>
        <p>
          Quantitative distribution across geography, time, and medium. Click any metric category below to immediately filter the living atlas.
        </p>
      </div>

      <div className="analytics-metrics-grid">
        {/* Metric Column 1: By Region */}
        <div className="analytics-column">
          <div className="col-header">
            <span className="eyebrow">GEOGRAPHIC SPREAD</span>
            <h4>By Region</h4>
          </div>
          <div className="bar-stat-stack">
            {regionCounts.map(r => {
              const pct = (r.count / LOCATIONS.length) * 100;
              return (
                <button
                  key={r.name}
                  className="stat-row-btn"
                  onClick={() => {
                    soundEngine.playChime("select");
                    onFilterByRegion(r.name);
                    onScrollToAtlas();
                  }}
                  title={`Filter Atlas by ${r.name}`}
                >
                  <div className="stat-label-line">
                    <span>{r.name} India</span>
                    <b>{r.count} sites ({Math.round(pct)}%)</b>
                  </div>
                  <div className="stat-track">
                    <div className="stat-fill" style={{ width: `${pct}%` }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Metric Column 2: By Medium/Form */}
        <div className="analytics-column">
          <div className="col-header">
            <span className="eyebrow">ARTISTIC TAXONOMY</span>
            <h4>By Artistic Form</h4>
          </div>
          <div className="bar-stat-stack">
            {formCounts.map(f => {
              const pct = (f.count / LOCATIONS.length) * 100;
              return (
                <button
                  key={f.name}
                  className="stat-row-btn"
                  onClick={() => {
                    soundEngine.playChime("select");
                    onFilterByForm(f.name);
                    onScrollToAtlas();
                  }}
                  title={`Filter Atlas by ${f.name}`}
                >
                  <div className="stat-label-line">
                    <span>{f.name}</span>
                    <b>{f.count} sites ({Math.round(pct)}%)</b>
                  </div>
                  <div className="stat-track">
                    <div className="stat-fill" style={{ width: `${pct}%` }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Metric Column 3: By Historical Period */}
        <div className="analytics-column">
          <div className="col-header">
            <span className="eyebrow">CHRONOLOGICAL DURATION</span>
            <h4>By Historical Era</h4>
          </div>
          <div className="bar-stat-stack">
            {eraCounts.map(e => {
              const pct = (e.count / LOCATIONS.length) * 100;
              return (
                <button
                  key={e.id}
                  className="stat-row-btn"
                  onClick={() => {
                    soundEngine.playChime("select");
                    onFilterByEra(e.id);
                    onScrollToAtlas();
                  }}
                  title={`Filter Atlas by ${e.name}`}
                >
                  <div className="stat-label-line">
                    <span>{e.name}</span>
                    <b>{e.count} sites ({Math.round(pct)}%)</b>
                  </div>
                  <div className="stat-track">
                    <div className="stat-fill" style={{ width: `${pct}%` }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
