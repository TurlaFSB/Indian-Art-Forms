import React, { useState } from "react";
import { ONE_OBJECT_MANY_HISTORIES } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { Sparkles, Layers, ArrowRight, BookOpen, Compass } from "lucide-react";

export default function ObjectDeepHistory() {
  const [activeLayer, setActiveLayer] = useState(0);
  const data = ONE_OBJECT_MANY_HISTORIES;

  return (
    <div className="object-deep-history-section">
      <div className="section-head">
        <div>
          <div className="eyebrow"><Layers size={13} /> 08 / ONE OBJECT → MANY HISTORIES</div>
          <h2>Deconstruction of<br />an <em>Icon.</em></h2>
        </div>
        <p>
          How art historians construct context: A single master bronze sculpture expands into mineral trade, sacred guild mathematics, imperial dynastic politics, and modern subatomic physics.
        </p>
      </div>

      <div className="deep-history-layout">
        {/* Step Progression Tabs */}
        <div className="deep-history-steps-sidebar">
          {data.layers.map((layer, idx) => (
            <button
              key={idx}
              className={`deep-step-btn ${activeLayer === idx ? "active" : ""}`}
              onClick={() => {
                soundEngine.playChime("select");
                setActiveLayer(idx);
              }}
            >
              <span className="step-num">0{idx + 1}</span>
              <b>{layer.title.split(":")[0] || layer.title}</b>
            </button>
          ))}
        </div>

        {/* Active Layer Visual Stage */}
        <div className="deep-layer-active-stage">
          <div className="layer-content-header">
            <span className="eyebrow"><Sparkles size={11} /> HISTORICAL LAYER 0{activeLayer + 1}</span>
            <h3>{data.layers[activeLayer].title}</h3>
          </div>

          <div className="layer-content-body">
            <p>{data.layers[activeLayer].desc}</p>
          </div>

          <div className="layer-navigation-footer">
            <button
              disabled={activeLayer <= 0}
              onClick={() => {
                soundEngine.playChime("select");
                setActiveLayer(l => l - 1);
              }}
            >
              Previous Layer
            </button>
            <span>{activeLayer + 1} OF {data.layers.length} HISTORICAL DIMENSIONS</span>
            <button
              disabled={activeLayer >= data.layers.length - 1}
              onClick={() => {
                soundEngine.playChime("select");
                setActiveLayer(l => l + 1);
              }}
            >
              Next Layer <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
