import React, { useState } from "react";
import { soundEngine } from "../utils/soundEngine";
import { Bookmark, FileText, Printer, Trash2, ArrowRight, Sparkles, X, Plus, Check, User } from "lucide-react";

export default function CuratorNotebook({
  bookmarks = [],
  onRemoveBookmark = () => {},
  onSelectLocation = () => {},
  onClose
}) {
  const [curatorNotes, setCuratorNotes] = useState({});
  const [exhibitionTitle, setExhibitionTitle] = useState("Voices of Earth & Light: A Personal Indian Art History");
  const [curatorName, setCuratorName] = useState("Niraj Kumar (RA2411003011259)");

  const handleNoteChange = (id, text) => {
    setCuratorNotes(prev => ({ ...prev, [id]: text }));
  };

  const handlePrintDossier = () => {
    soundEngine.playChime("open");
    window.print();
  };

  return (
    <div className="curator-notebook-modal">
      <div className="notebook-header">
        <div className="notebook-title-block">
          <div className="eyebrow"><Bookmark size={13} /> CURATORIAL NOTEBOOK & EXHIBITION STUDIO</div>
          <h2>My Curated Exhibition</h2>
          <span className="curator-credit-tag"><User size={12} /> Curated by {curatorName}</span>
        </div>
        <button className="notebook-close-btn" onClick={onClose}>
          <X size={16} /> <span>CLOSE NOTEBOOK</span>
        </button>
      </div>

      <div className="notebook-body">
        {/* Exhibition Metadata Customizer */}
        <div className="exhibition-config-card">
          <div className="config-field">
            <label>EXHIBITION TITLE</label>
            <input
              type="text"
              value={exhibitionTitle}
              onChange={e => setExhibitionTitle(e.target.value)}
              placeholder="Enter your exhibition title..."
            />
          </div>
          <div className="config-field">
            <label>CURATED BY (CHIEF CURATOR & REG NO.)</label>
            <input
              type="text"
              value={curatorName}
              onChange={e => setCuratorName(e.target.value)}
              placeholder="Niraj Kumar (RA2411003011259)"
            />
          </div>
          <div className="config-actions">
            <button className="print-dossier-btn" onClick={handlePrintDossier}>
              <Printer size={15} /> EXPORT CATALOGUE DOSSIER (PRINT/PDF)
            </button>
          </div>
        </div>

        {/* Bookmarked Sites List */}
        <div className="bookmarked-sites-list">
          <div className="list-heading">
            <span>SELECTED SITES ({bookmarks.length})</span>
            <small>Add notes to each site to compile your exhibition catalogue</small>
          </div>

          {bookmarks.map((loc, idx) => (
            <article key={loc.id} className="notebook-item-card">
              <div className="item-number-column">
                <span className="curator-seq-number">0{idx + 1}</span>
                <button
                  className="remove-bookmark-btn"
                  onClick={() => onRemoveBookmark(loc)}
                  title="Remove from my exhibition"
                >
                  <Trash2 size={13} />
                </button>
              </div>

              <div
                className="item-thumbnail"
                style={{ backgroundImage: `url(${loc.image})` }}
              />

              <div className="item-details">
                <div className="item-topline">
                  <span className="meta-pill">{loc.region}</span>
                  <span className="meta-pill">{loc.form}</span>
                  <span className="meta-pill">{loc.period}</span>
                </div>
                <h3>{loc.name} — <small>{loc.state}</small></h3>
                <p className="item-title-desc">{loc.title}</p>
                <p className="item-theory">“{loc.theory}”</p>

                {/* Personal Curatorial Note Area */}
                <div className="curator-note-input-area">
                  <label>YOUR CURATORIAL ARGUMENT / NOTE FOR THIS STOP:</label>
                  <textarea
                    rows={2}
                    value={curatorNotes[loc.id] || ""}
                    onChange={e => handleNoteChange(loc.id, e.target.value)}
                    placeholder={`Why is ${loc.name} critical to your exhibition narrative?`}
                  />
                </div>

                <div className="item-card-footer">
                  <button
                    className="focus-map-link"
                    onClick={() => {
                      onSelectLocation(loc);
                      onClose();
                    }}
                  >
                    View on Living Map <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </article>
          ))}

          {!bookmarks.length && (
            <div className="empty-notebook-state">
              <Bookmark size={36} />
              <h3>Your exhibition notebook is ready for curating.</h3>
              <p>
                Explore the Living Art Atlas and click <b>"BOOKMARK SITE"</b> on any location to assemble your personal exhibition tour.
              </p>
            </div>
          )}
        </div>

        {/* PRINT-ONLY DOSSIER LAYOUT (Hidden on screen, revealed only during window.print()) */}
        <div className="printable-dossier-root">
          <div className="print-cover">
            <h1>{exhibitionTitle}</h1>
            <h2>AN INTERACTIVE DIGITAL HUMANITIES EXHIBITION</h2>
            <p className="print-curator-credit">Curated by: <b>{curatorName}</b></p>
            <p>The Living Canvas — National Archive of Indian Art History (2026)</p>
          </div>

          <div className="print-toc">
            <h3>EXHIBITION CATALOGUE INDEX</h3>
            {bookmarks.map((b, i) => (
              <div key={b.id} className="print-toc-row">
                <span>0{i + 1}. {b.name} ({b.state})</span>
                <span>{b.form} · {b.period}</span>
              </div>
            ))}
          </div>

          <div className="print-entries">
            {bookmarks.map((b, i) => (
              <div key={b.id} className="print-entry">
                <h3>0{i + 1}. {b.name} — {b.state}</h3>
                <p><b>Period:</b> {b.period} | <b>Form:</b> {b.form} | <b>Dynasty:</b> {b.dynasty}</p>
                <p><b>Materials:</b> {b.materials.join(", ")}</p>
                <p><b>Curatorial Thesis:</b> {b.theory}</p>
                <p><b>Historical Context:</b> {b.context}</p>
                {curatorNotes[b.id] && (
                  <p><b>Curator's Commentary:</b> {curatorNotes[b.id]}</p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
