import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Compass,
  Headphones,
  Image as ImageIcon,
  Layers,
  Scale,
  Share2,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Bookmark,
  Check
} from "lucide-react";
import { gsap } from "gsap";
import { soundEngine } from "../utils/soundEngine";
import { INFLUENCE_CONNECTIONS, LOCATIONS } from "../data/artData";

export default function ExhibitionDrawer({
  location,
  allLocations = [],
  onClose,
  onArtwork,
  onNavigate,
  onOpenCompare = () => {},
  isBookmarked = false,
  onToggleBookmark = () => {}
}) {
  const ref = useRef();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview | materiality | constellation | artworks

  const idx = allLocations.findIndex(x => x.id === location.id);

  // Connected relationships for this location
  const connections = INFLUENCE_CONNECTIONS.filter(
    c => c.from === location.id || c.to === location.id
  );

  useEffect(() => {
    const c = gsap.context(() => {
      gsap.from(".drawer-panel", { x: "100%", duration: 0.65, ease: "power4.out" });
      gsap.from(".drawer-reveal", { y: 20, opacity: 0, duration: 0.45, stagger: 0.05, delay: 0.15 });
    }, ref);

    return () => {
      soundEngine.stopSpeech();
      c.revert();
    };
  }, [location]);

  const handleAudioGuide = () => {
    if (isPlayingAudio) {
      soundEngine.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      soundEngine.speakLocationGuide(
        location,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false)
      );
    }
  };

  return (
    <div className="drawer-layer" ref={ref}>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer-panel">
        {/* Top Control Bar */}
        <div className="drawer-topbar">
          <div className="drawer-top-actions">
            <button
              className={`drawer-action-btn ${isPlayingAudio ? "active-audio" : ""}`}
              onClick={handleAudioGuide}
              title="Listen to Curator Spoken Audio Guide"
            >
              {isPlayingAudio ? <VolumeX size={14} /> : <Headphones size={14} />}
              <span>{isPlayingAudio ? "PAUSE AUDIO GUIDE" : "CURATOR AUDIO GUIDE"}</span>
            </button>

            <button
              className={`drawer-action-btn ${isBookmarked ? "bookmarked" : ""}`}
              onClick={() => {
                soundEngine.playChime("select");
                onToggleBookmark(location);
              }}
              title="Save to My Exhibition"
            >
              {isBookmarked ? <Check size={14} /> : <Bookmark size={14} />}
              <span>{isBookmarked ? "IN MY NOTEBOOK" : "BOOKMARK SITE"}</span>
            </button>
          </div>

          <button className="drawer-close" onClick={onClose}>
            <X size={16} /> <span>CLOSE</span>
          </button>
        </div>

        {/* Hero Artwork Header */}
        <div
          className="drawer-hero drawer-reveal"
          style={{ backgroundImage: `url(${location.image})` }}
        >
          <div className="drawer-hero-meta">
            <span>SITE RECORD / {String(idx + 1).padStart(2, "0")}</span>
            <span>{location.period}</span>
          </div>
          <div className="drawer-hero-title">
            {location.name}
            <small>{location.state} · {location.region} India</small>
          </div>
        </div>

        {/* Categorical Tags */}
        <div className="drawer-meta drawer-reveal">
          <span className="meta-tag region">{location.region}</span>
          <i />
          <span className="meta-tag form">{location.form}</span>
          <i />
          <span className="meta-tag era">{location.era.toUpperCase()}</span>
          {location.dynasty && (
            <>
              <i />
              <span className="meta-tag dynasty">{location.dynasty}</span>
            </>
          )}
        </div>

        <h2 className="drawer-title drawer-reveal">{location.title}</h2>
        <div className="drawer-coords drawer-reveal">
          <Compass size={12} /> {location.lat.toFixed(2)}° N / {location.lon.toFixed(2)}° E
        </div>

        {/* Curatorial Theory Lead */}
        <blockquote className="drawer-quote drawer-reveal">
          “{location.theory}”
        </blockquote>

        {/* Navigation Tabs within Drawer */}
        <div className="drawer-tab-row drawer-reveal">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            OVERVIEW & HISTORY
          </button>
          <button
            className={activeTab === "materiality" ? "active" : ""}
            onClick={() => setActiveTab("materiality")}
          >
            MATERIALITY & PIGMENTS
          </button>
          <button
            className={activeTab === "constellation" ? "active" : ""}
            onClick={() => setActiveTab("constellation")}
          >
            INFLUENCE NETWORK ({connections.length})
          </button>
          <button
            className={activeTab === "artworks" ? "active" : ""}
            onClick={() => setActiveTab("artworks")}
          >
            OBJECTS ({location.artworks.length})
          </button>
        </div>

        {/* TAB 1: OVERVIEW & HISTORY */}
        {activeTab === "overview" && (
          <div className="drawer-tab-content">
            <p className="drawer-description drawer-reveal">{location.description}</p>

            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">HISTORICAL & DYNASTIC CONTEXT</div>
              <p>{location.context}</p>
            </section>

            {location.spatialPhilosophy && (
              <section className="drawer-section drawer-reveal spatial-highlight">
                <div className="section-kicker">SPATIAL PHILOSOPHY & ENVIRONMENT</div>
                <p>{location.spatialPhilosophy}</p>
              </section>
            )}

            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">PATRONAGE & SOCIAL SPHERE</div>
              <div className="patron-badge">
                <b>PATRONS:</b> <span>{location.patronage}</span>
              </div>
            </section>

            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">ARTISTS & COMMUNITY GUILDS</div>
              <div className="artist-list">
                {location.artists.map(x => (
                  <span key={x} className="artist-pill">{x}</span>
                ))}
              </div>
            </section>

            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">MOVEMENTS & TRADITIONS</div>
              <div className="artist-list">
                {location.movements.map(x => (
                  <span key={x} className="movement-pill">{x}</span>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: MATERIALITY & PIGMENTS */}
        {activeTab === "materiality" && (
          <div className="drawer-tab-content">
            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">RAW MATERIALS & SURFACES</div>
              <div className="dual-list">
                <div>
                  <small>PRIMARY MATERIALS</small>
                  {location.materials.map(x => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
                <div>
                  <small>EXECUTION TECHNIQUES</small>
                  {location.techniques.map(x => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            </section>

            {location.pigments && (
              <section className="drawer-section drawer-reveal">
                <div className="section-kicker">PIGMENT CHEMISTRY & MINERAL PALETTE</div>
                <div className="pigment-pill-grid">
                  {location.pigments.map(p => (
                    <div key={p} className="pigment-card-mini">
                      <span className="pigment-dot" />
                      <b>{p}</b>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* TAB 3: INFLUENCE NETWORK & CONSTELLATION */}
        {activeTab === "constellation" && (
          <div className="drawer-tab-content">
            <section className="drawer-section drawer-reveal">
              <div className="section-kicker">DOCUMENTED GEOGRAPHIC RELATIONSHIPS</div>
              <p className="academic-note">
                Relationships are classified according to direct archival evidence, transmission routes, or scholarly consensus.
              </p>

              <div className="constellation-stack">
                {connections.map((c, i) => {
                  const targetId = c.from === location.id ? c.to : c.from;
                  const targetLoc = LOCATIONS.find(l => l.id === targetId);
                  if (!targetLoc) return null;

                  return (
                    <article key={i} className="constellation-card">
                      <div className="constellation-card-head">
                        <span className={`link-type-tag type-${c.type}`}>
                          {c.type.toUpperCase()}
                        </span>
                        <span className="evidence-badge">{c.evidence}</span>
                      </div>
                      <h4>{c.label}</h4>
                      <p>{c.narrative}</p>
                      <button
                        className="jump-connected-btn"
                        onClick={() => onNavigate(targetLoc)}
                      >
                        Explore {targetLoc.name} ({targetLoc.state}) <ArrowRight size={13} />
                      </button>
                    </article>
                  );
                })}

                {!connections.length && (
                  <p className="empty-muted">
                    No primary cross-regional routes linked directly to this specific site.
                  </p>
                )}
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: OBJECTS & ARTWORKS */}
        {activeTab === "artworks" && (
          <div className="drawer-tab-content">
            <div className="objects-title drawer-reveal">
              <span>EXHIBITION OBJECT RECORDS</span>
              <small>{location.artworks.length} primary records</small>
            </div>

            <div className="object-stack">
              {location.artworks.map((a, i) => (
                <article
                  className="object-card"
                  key={a.title}
                  onClick={() => {
                    soundEngine.playChime("open");
                    onArtwork(a, location);
                  }}
                >
                  <div
                    className="object-card-image"
                    style={{ backgroundImage: `url(${a.image})` }}
                  >
                    <span>0{i + 1}</span>
                    <ImageIcon size={15} />
                  </div>
                  <div className="object-card-body">
                    <small>{a.type} · {a.date}</small>
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                    {a.hotspots && (
                      <span className="hotspot-badge">
                        <Sparkles size={11} /> {a.hotspots.length} Curatorial Hotspots Available
                      </span>
                    )}
                    <span className="inspect-link">INSPECT OBJECT <ArrowRight size={14} /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Quick Compare Trigger */}
        <div className="drawer-compare-box drawer-reveal">
          <div>
            <small>CURATOR'S COMPARATIVE STUDIO</small>
            <b>Compare {location.name} with another art tradition</b>
          </div>
          <button
            className="compare-trigger-btn"
            onClick={() => onOpenCompare(location)}
          >
            <Scale size={13} /> COMPARE
          </button>
        </div>

        {/* Academic Source & Provenance Record */}
        <div className="drawer-source drawer-reveal">
          <BookOpen size={15} />
          <div>
            <small>PRIMARY ACADEMIC CITATION</small>
            <a href={location.sourceUrl} target="_blank" rel="noreferrer">
              {location.source}
            </a>
            <span className="evidence-level-tag">
              EVIDENCE CLASSIFICATION: {location.evidenceLevel}
            </span>
          </div>
        </div>

        {/* Bottom Pagination & Return */}
        <div className="drawer-nav">
          <button
            disabled={idx <= 0}
            onClick={() => onNavigate(allLocations[idx - 1])}
          >
            <ChevronLeft size={15} /> PREVIOUS SITE
          </button>
          <span>{idx + 1} / {allLocations.length}</span>
          <button
            disabled={idx >= allLocations.length - 1}
            onClick={() => onNavigate(allLocations[idx + 1])}
          >
            NEXT SITE <ChevronRight size={15} />
          </button>
        </div>

        <button className="return-map" onClick={onClose}>
          <ArrowLeft size={14} /> RETURN TO ART ATLAS
        </button>
      </aside>
    </div>
  );
}