import React, { useState } from "react";
import { ART_HISTORIAN_QUERIES, LOCATIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import { BookOpen, Search, Sparkles, ArrowRight, MessageSquare, HelpCircle, X } from "lucide-react";

export default function ArtHistorianGuide({ onSelectLocation = () => {}, onClose }) {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [customSearch, setCustomSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const activeQuery = ART_HISTORIAN_QUERIES[activeQueryIndex];

  const handleSearch = (text) => {
    setCustomSearch(text);
    if (!text.trim()) {
      setSearchResults([]);
      return;
    }

    const q = text.toLowerCase();
    const matches = LOCATIONS.filter(l => {
      const corpus = `${l.name} ${l.state} ${l.region} ${l.title} ${l.description} ${l.context} ${l.materials.join(" ")} ${l.movements.join(" ")}`.toLowerCase();
      return corpus.includes(q);
    });
    setSearchResults(matches);
  };

  return (
    <div className="historian-guide-modal">
      <div className="historian-header">
        <div className="historian-title-block">
          <div className="eyebrow"><BookOpen size={13} /> CURATORIAL SCHOLARLY ASSISTANT</div>
          <h2>The Art Historian's Guide</h2>
        </div>
        {onClose && (
          <button className="historian-close-btn" onClick={onClose}>
            <X size={16} /> <span>CLOSE GUIDE</span>
          </button>
        )}
      </div>

      <div className="historian-body">
        {/* Search Bar */}
        <div className="historian-search-bar">
          <Search size={16} />
          <input
            type="text"
            value={customSearch}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Ask or search topics (e.g. 'Ajanta pigments', 'Chola bronze', 'Pahari romance', 'double-ikat')..."
          />
          {customSearch && (
            <button className="clear-search" onClick={() => handleSearch("")}>
              <X size={13} />
            </button>
          )}
        </div>

        {/* CUSTOM SEARCH RESULTS (if query entered) */}
        {customSearch ? (
          <div className="historian-search-results">
            <div className="results-header">
              <span>FOUND {searchResults.length} RELATED ART HISTORICAL SITES</span>
            </div>

            <div className="results-grid">
              {searchResults.map(loc => (
                <article key={loc.id} className="search-result-card">
                  <div
                    className="result-card-thumb"
                    style={{ backgroundImage: `url(${loc.image})` }}
                  />
                  <div className="result-card-body">
                    <span className="result-meta">{loc.region} · {loc.form} · {loc.period}</span>
                    <h4>{loc.name} — {loc.state}</h4>
                    <p>{loc.title}</p>
                    <p className="result-theory">“{loc.theory}”</p>
                    <button
                      className="jump-result-btn"
                      onClick={() => {
                        onSelectLocation(loc);
                        if (onClose) onClose();
                      }}
                    >
                      Open Site Record <ArrowRight size={12} />
                    </button>
                  </div>
                </article>
              ))}

              {!searchResults.length && (
                <div className="empty-results">
                  <HelpCircle size={28} />
                  <h4>No direct site records found for "{customSearch}".</h4>
                  <p>Try searching for materials like "Gold", "Silk", "Basalt", dynasties like "Chola", "Mughal", or regions.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* CURATED DEEP INQUIRIES */
          <div className="curated-inquiries-layout">
            <div className="inquiries-sidebar">
              <span className="eyebrow"><MessageSquare size={12} /> CURATED THEMATIC INQUIRIES</span>
              <div className="inquiries-list">
                {ART_HISTORIAN_QUERIES.map((item, idx) => (
                  <button
                    key={idx}
                    className={`inquiry-tab-btn ${activeQueryIndex === idx ? "active" : ""}`}
                    onClick={() => {
                      soundEngine.playChime("select");
                      setActiveQueryIndex(idx);
                    }}
                  >
                    <span className="inquiry-num">0{idx + 1}</span>
                    <p>{item.q}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="inquiry-response-card">
              <div className="response-header">
                <span className="eyebrow"><Sparkles size={11} /> SCHOLARLY RESPONSE</span>
                <h3>{activeQuery.q}</h3>
              </div>

              <div className="response-body">
                <p>{activeQuery.a}</p>
              </div>

              <div className="response-footer">
                <span className="citation-tag">
                  Source: Living Canvas Academic Art History Research Corpus (2026)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
