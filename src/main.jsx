import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Compass,
  MapPin,
  Search,
  Sparkles,
  X,
  Volume2,
  VolumeX,
  Scale,
  Award,
  Bookmark,
  Layers,
  Eye,
  Clock,
  FlaskConical,
  BookOpen,
  Image as ImageIcon
} from "lucide-react";
import { soundEngine } from "./utils/soundEngine";
import {
  LOCATIONS,
  ERAS,
  REGIONS,
  FORMS,
  INFLUENCE_CONNECTIONS,
  PIGMENT_LABORATORY
} from "./data/artData";

import IndiaMap from "./components/IndiaMap";
import ExhibitionDrawer from "./components/ExhibitionDrawer";
import ArtworkViewer from "./components/ArtworkViewer";
import CompareStudio from "./components/CompareStudio";
import TimelinePlayer from "./components/TimelinePlayer";
import MaterialAtlas from "./components/MaterialAtlas";
import MuseumWall from "./components/MuseumWall";
import CuratorNotebook from "./components/CuratorNotebook";
import ArtHistorianGuide from "./components/ArtHistorianGuide";
import CuratorQuiz from "./components/CuratorQuiz";

import "./styles.css";

export default function App() {
  // Navigation View Tabs: 'map' | 'timeline' | 'gallery' | 'compare' | 'materials' | 'quiz'
  const [activeTab, setActiveTab] = useState("map");

  // Selection & Search States
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All regions");
  const [selectedForm, setSelectedForm] = useState("All forms");
  const [selectedEra, setSelectedEra] = useState("all");

  // Modals & Tools
  const [showDrawer, setShowDrawer] = useState(false);
  const [showHistorianGuide, setShowHistorianGuide] = useState(false);
  const [showCuratorNotebook, setShowCuratorNotebook] = useState(false);
  const [bookmarkedLocations, setBookmarkedLocations] = useState([]);
  const [isAmbientOn, setIsAmbientOn] = useState(false);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      if (e.key === "1" || e.key === "m" || e.key === "M") setActiveTab("map");
      if (e.key === "2" || e.key === "t" || e.key === "T") setActiveTab("timeline");
      if (e.key === "3" || e.key === "g" || e.key === "G") setActiveTab("gallery");
      if (e.key === "4" || e.key === "c" || e.key === "C") setActiveTab("compare");
      if (e.key === "5" || e.key === "p" || e.key === "P") setActiveTab("materials");
      if (e.key === "6" || e.key === "q" || e.key === "Q") setActiveTab("quiz");

      if (e.key === "a" || e.key === "A") {
        const next = soundEngine.toggleAmbient();
        setIsAmbientOn(next);
      }
      if (e.key === "n" || e.key === "N") setShowCuratorNotebook(v => !v);
      if (e.key === "i" || e.key === "I") setShowHistorianGuide(v => !v);
      if (e.key === "Escape") {
        setShowHistorianGuide(false);
        setShowCuratorNotebook(false);
        setSelectedArtwork(null);
        setShowDrawer(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtered Locations
  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(l => {
      const corpus = `${l.name} ${l.state} ${l.region} ${l.title} ${l.materials.join(" ")} ${l.movements.join(" ")}`.toLowerCase();
      const matchesQuery = !searchQuery || corpus.includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === "All regions" || l.region === selectedRegion;
      const matchesForm = selectedForm === "All forms" || l.form === selectedForm;
      const matchesEra = selectedEra === "all" || l.era === selectedEra;

      return matchesQuery && matchesRegion && matchesForm && matchesEra;
    });
  }, [searchQuery, selectedRegion, selectedForm, selectedEra]);

  const handleToggleBookmark = (loc) => {
    soundEngine.playChime("select");
    setBookmarkedLocations(prev => {
      const exists = prev.some(b => b.id === loc.id);
      if (exists) return prev.filter(b => b.id !== loc.id);
      return [...prev, loc];
    });
  };

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc);
    setShowDrawer(true);
  };

  return (
    <div className="museum-app-root">
      {/* 1. TOP HEADER & PRIMARY NAVIGATION */}
      <header className="museum-main-header">
        <div className="museum-brand-lockup" onClick={() => setActiveTab("map")}>
          <div className="museum-logo-mark">LC</div>
          <div>
            <h1 className="museum-brand-title">THE LIVING CANVAS</h1>
            <span className="museum-brand-subtitle">
              National Digital Museum · Curated by <strong style={{ color: "#ffffff" }}>PRANAV VERMA</strong> (RA2411030010008)
            </span>
          </div>
        </div>

        {/* Primary View Switcher */}
        <nav className="museum-primary-nav">
          <button
            className={`nav-tab-btn ${activeTab === "map" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("map"); }}
          >
            <Compass size={16} />
            <span>Interactive Map</span>
          </button>

          <button
            className={`nav-tab-btn ${activeTab === "timeline" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("timeline"); }}
          >
            <Clock size={16} />
            <span>Timeline</span>
          </button>

          <button
            className={`nav-tab-btn ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("gallery"); }}
          >
            <ImageIcon size={16} />
            <span>Artwork Gallery</span>
          </button>

          <button
            className={`nav-tab-btn ${activeTab === "compare" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("compare"); }}
          >
            <Scale size={16} />
            <span>Comparative Studio</span>
          </button>

          <button
            className={`nav-tab-btn ${activeTab === "materials" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("materials"); }}
          >
            <FlaskConical size={16} />
            <span>Pigment Lab</span>
          </button>

          <button
            className={`nav-tab-btn ${activeTab === "quiz" ? "active" : ""}`}
            onClick={() => { soundEngine.playChime("select"); setActiveTab("quiz"); }}
          >
            <Award size={16} />
            <span>Curator Quiz</span>
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="museum-header-tools">
          <button
            className={`tool-pill-btn ${isAmbientOn ? "active" : ""}`}
            onClick={() => {
              const next = soundEngine.toggleAmbient();
              setIsAmbientOn(next);
            }}
            title="Toggle Ambient Indian Classical Soundscape (A)"
          >
            {isAmbientOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
            <span>{isAmbientOn ? "Drone Playing" : "Soundscape"}</span>
          </button>

          <button
            className={`tool-pill-btn ${showHistorianGuide ? "active" : ""}`}
            onClick={() => {
              soundEngine.playChime("open");
              setShowHistorianGuide(v => !v);
            }}
            title="Ask Art Historian Guide (I)"
          >
            <BookOpen size={15} />
            <span>Ask Scholar</span>
          </button>

          <button
            className={`tool-pill-btn notebook-tool ${showCuratorNotebook ? "active" : ""}`}
            onClick={() => {
              soundEngine.playChime("open");
              setShowCuratorNotebook(v => !v);
            }}
            title="My Curated Exhibition Notebook (N)"
          >
            <Bookmark size={15} />
            <span>My Exhibition</span>
            {bookmarkedLocations.length > 0 && (
              <span className="bookmark-counter-badge">{bookmarkedLocations.length}</span>
            )}
          </button>
        </div>
      </header>

      {/* 2. MAIN EXHIBITION CONTENT AREA */}
      <main className="museum-main-container">
        {/* ================================================= */}
        {/* VIEW 1: INTERACTIVE ART MAP (PRIMARY HERO) */}
        {/* ================================================= */}
        {activeTab === "map" && (
          <div className="tab-view-container map-view-active">
            {/* Search & Dynamic Filter Header */}
            <div className="map-search-filter-banner">
              <div className="search-input-box">
                <Search size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search Indian art sites, dynasties, pigments, materials (e.g. 'Ajanta', 'Chola Bronze', 'Lapis Lazuli')..."
                />
                {searchQuery && (
                  <button className="clear-btn" onClick={() => setSearchQuery("")}>
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="filter-dropdowns-row">
                <select
                  value={selectedForm}
                  onChange={e => setSelectedForm(e.target.value)}
                  className="museum-select"
                >
                  {FORMS.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>

                <select
                  value={selectedEra}
                  onChange={e => setSelectedEra(e.target.value)}
                  className="museum-select"
                >
                  {ERAS.map(e => (
                    <option key={e.id} value={e.id}>{e.label}</option>
                  ))}
                </select>

                {(searchQuery || selectedRegion !== "All regions" || selectedForm !== "All forms" || selectedEra !== "all") && (
                  <button
                    className="clear-all-filters-btn"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRegion("All regions");
                      setSelectedForm("All forms");
                      setSelectedEra("all");
                    }}
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* The Full Interactive 2-Column Map Stage */}
            <IndiaMap
              locations={filteredLocations}
              onSelect={handleSelectLocation}
              selectedLocation={selectedLocation}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              onInspectArtwork={(art, loc) => setSelectedArtwork({ artwork: art, location: loc })}
            />
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 2: CHRONOLOGICAL TIMELINE */}
        {/* ================================================= */}
        {activeTab === "timeline" && (
          <div className="tab-view-container timeline-view-active">
            <div className="tab-header-banner">
              <div>
                <h2>Chronological Continuum of Indian Art</h2>
                <p>Scrub through 14,000 years of visual history and watch active art centers illuminate across geography.</p>
              </div>
            </div>

            <TimelinePlayer
              activeEra={selectedEra}
              onEraChange={setSelectedEra}
              onLocationSelect={handleSelectLocation}
              onInspectArtwork={(art, loc) => setSelectedArtwork({ artwork: art, location: loc })}
            />
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 3: VISUAL ARTWORK GALLERY & HOTSPOTS */}
        {/* ================================================= */}
        {activeTab === "gallery" && (
          <div className="tab-view-container gallery-view-active">
            <MuseumWall
              onInspectArtwork={(art, loc) => setSelectedArtwork({ artwork: art, location: loc })}
            />
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 4: COMPARATIVE STUDIO */}
        {/* ================================================= */}
        {activeTab === "compare" && (
          <div className="tab-view-container compare-view-active">
            <CompareStudio
              initialLocationA={LOCATIONS[0]}
              initialLocationB={LOCATIONS[1]}
              onClose={() => setActiveTab("map")}
              onSelectLocation={handleSelectLocation}
            />
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 5: PIGMENT & MATERIAL LABORATORY */}
        {/* ================================================= */}
        {activeTab === "materials" && (
          <div className="tab-view-container materials-view-active">
            <MaterialAtlas onSelectLocation={handleSelectLocation} />
          </div>
        )}

        {/* ================================================= */}
        {/* VIEW 6: CURATOR CERTIFICATION QUIZ */}
        {/* ================================================= */}
        {activeTab === "quiz" && (
          <div className="tab-view-container quiz-view-active">
            <CuratorQuiz onClose={() => setActiveTab("map")} />
          </div>
        )}
      </main>

      {/* 3. MODALS & SLIDE-OVER PANELS */}
      {/* Full Location Exhibition Drawer */}
      {showDrawer && selectedLocation && (
        <ExhibitionDrawer
          location={selectedLocation}
          allLocations={LOCATIONS}
          onClose={() => setShowDrawer(false)}
          onArtwork={(art, loc) => setSelectedArtwork({ artwork: art, location: loc })}
          onNavigate={loc => setSelectedLocation(loc)}
          onOpenCompare={() => { setShowDrawer(false); setActiveTab("compare"); }}
          isBookmarked={bookmarkedLocations.some(b => b.id === selectedLocation.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {/* High-Resolution Artwork Inspector with Glowing Hotspots */}
      {selectedArtwork && (
        <ArtworkViewer
          artwork={selectedArtwork.artwork}
          location={selectedArtwork.location}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      {/* Art Historian Scholarly Guide Modal */}
      {showHistorianGuide && (
        <div className="museum-modal-backdrop" onClick={() => setShowHistorianGuide(false)}>
          <div className="museum-modal-dialog" onClick={e => e.stopPropagation()}>
            <ArtHistorianGuide
              onSelectLocation={loc => {
                setSelectedLocation(loc);
                setShowHistorianGuide(false);
                setShowDrawer(true);
              }}
              onClose={() => setShowHistorianGuide(false)}
            />
          </div>
        </div>
      )}

      {/* Curator Notebook & Printable Exhibition Dossier */}
      {showCuratorNotebook && (
        <div className="museum-modal-backdrop" onClick={() => setShowCuratorNotebook(false)}>
          <div className="museum-modal-dialog" onClick={e => e.stopPropagation()}>
            <CuratorNotebook
              bookmarks={bookmarkedLocations}
              onRemoveBookmark={handleToggleBookmark}
              onSelectLocation={loc => {
                setSelectedLocation(loc);
                setShowCuratorNotebook(false);
                setShowDrawer(true);
              }}
              onClose={() => setShowCuratorNotebook(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);