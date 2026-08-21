import React, { useState } from "react";
import { PEOPLE_AND_COLLECTIVES } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { Users, User, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function PeopleNetwork({ onSelectLocation = () => {} }) {
  const [filterType, setFilterType] = useState("all"); // all | collective | individual

  const filteredPeople = PEOPLE_AND_COLLECTIVES.filter(p => {
    if (filterType === "all") return true;
    return p.type === filterType;
  });

  return (
    <div className="people-network-section" id="people">
      <div className="section-head">
        <div>
          <div className="eyebrow"><Users size={13} /> 06 / PEOPLE & ARTISAN COLLECTIVES</div>
          <h2>The Hands That<br /><em>Made Memory.</em></h2>
        </div>
        <p>
          Indian visual history rejects the simplistic Western myth of the solitary artistic genius. Alongside named modern pioneers, vast hereditary guilds and women's ritual lineages carried civilizational knowledge across centuries.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="people-filter-tabs">
        <button
          className={filterType === "all" ? "active" : ""}
          onClick={() => {
            soundEngine.playChime("select");
            setFilterType("all");
          }}
        >
          ALL MAKERS & GUILDS ({PEOPLE_AND_COLLECTIVES.length})
        </button>
        <button
          className={filterType === "collective" ? "active" : ""}
          onClick={() => {
            soundEngine.playChime("select");
            setFilterType("collective");
          }}
        >
          <Users size={14} /> HEREDITARY GUILDS & COLLECTIVES
        </button>
        <button
          className={filterType === "individual" ? "active" : ""}
          onClick={() => {
            soundEngine.playChime("select");
            setFilterType("individual");
          }}
        >
          <User size={14} /> INDIVIDUAL MODERN MASTERS
        </button>
      </div>

      {/* Grid of Makers */}
      <div className="people-grid">
        {filteredPeople.map((person) => {
          const isCollective = person.type === "collective";
          return (
            <article key={person.id} className="person-card">
              <div className="person-card-header">
                <span className={`maker-type-badge ${isCollective ? "collective" : "individual"}`}>
                  {isCollective ? "HEREDITARY GUILD" : "MODERN MASTER"}
                </span>
                <span className="person-period">{person.period}</span>
              </div>

              <h3>{person.name}</h3>
              <div className="person-region-tag">{person.region}</div>

              <div className="person-tradition">
                <small>PRIMARY TRADITION / MEDIUM</small>
                <b>{person.tradition}</b>
              </div>

              <div className="person-philosophy">
                <small>ARTISTIC PHILOSOPHY & CRAFT LOGIC</small>
                <p>{person.philosophy}</p>
              </div>

              <div className="person-legacy">
                <small>HISTORICAL LEGACY</small>
                <p>{person.legacy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
