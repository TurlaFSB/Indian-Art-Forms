import React from "react";
import { BookOpen, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export default function Methodology() {
  return (
    <section className="methodology-section" id="methodology">
      <div className="section-head">
        <div>
          <div className="eyebrow"><BookOpen size={13} /> 10 / ACADEMIC METHODOLOGY & CITATIONS</div>
          <h2>Curatorial Integrity<br />& <em>Provenance.</em></h2>
        </div>
        <p>
          A digital humanities exhibition must be transparent about its evidence, classifications, and research boundaries. We clearly distinguish between directly documented facts and scholarly curatorial interpretation.
        </p>
      </div>

      <div className="methodology-grid">
        <article className="methodology-card">
          <div className="method-number">01</div>
          <h3>Site & Tradition Selection</h3>
          <p>
            The 36+ locations curated in The Living Canvas represent pivotal geographical intersections where materials, belief systems, patronage networks, and trade transformed visual form. The atlas spans rock art, ancient urban infrastructure, monumental rock-cut and structural architecture, hereditary living crafts, courtly miniature ateliers, and modern anti-colonial avants-gardes.
          </p>
        </article>

        <article className="methodology-card">
          <div className="method-number">02</div>
          <h3>Evidence Classification</h3>
          <p>
            To prevent speculative history, all cross-regional relationships and pigment analyses are categorized into 4 rigorous tiers:
          </p>
          <ul className="evidence-tier-list">
            <li><b>Directly Documented:</b> Backed by extant epigraphs, court workshop records (Suratkhana/Ain-i-Akbari), or radiocarbon laboratory dating.</li>
            <li><b>Strong Scholarly Consensus:</b> Established by peer-reviewed art historical scholarship (e.g. Stella Kramrisch, Ananda Coomaraswamy, B.N. Goswamy).</li>
            <li><b>Probable / Inferred:</b> Supported by stylistic cross-comparison, trade manifests, or pilgrim travelogues.</li>
            <li><b>Curatorial Interpretation:</b> Theoretical lenses proposed by this exhibition to encourage new spatial questions.</li>
          </ul>
        </article>

        <article className="methodology-card">
          <div className="method-number">03</div>
          <h3>Materials & Chemical Provenance</h3>
          <p>
            Mineral pigments (Lapis Lazuli, Malachite, Cinnabar) and organic dyes (Indigo, Madder) are cross-referenced with geological mining sites and chemical conservation data from the Archaeological Survey of India (ASI) and international museum conservation reports.
          </p>
        </article>

        <article className="methodology-card">
          <div className="method-number">04</div>
          <h3>Institutional Repositories & Archives</h3>
          <p>
            Primary source material, accession ledgers, and photographic records are indexed from leading national and international cultural heritage repositories:
          </p>
          <div className="source-repository-links">
            <a href="https://whc.unesco.org/en/statesparties/in/" target="_blank" rel="noreferrer">
              <span>UNESCO World Heritage Centre</span> <ExternalLink size={11} />
            </a>
            <a href="https://asi.nic.in/" target="_blank" rel="noreferrer">
              <span>Archaeological Survey of India (ASI)</span> <ExternalLink size={11} />
            </a>
            <a href="https://www.ngmaindia.gov.in/" target="_blank" rel="noreferrer">
              <span>National Gallery of Modern Art (NGMA)</span> <ExternalLink size={11} />
            </a>
            <a href="https://nationalmuseumindia.gov.in/" target="_blank" rel="noreferrer">
              <span>National Museum, New Delhi</span> <ExternalLink size={11} />
            </a>
            <a href="https://indiaculture.gov.in/" target="_blank" rel="noreferrer">
              <span>Ministry of Culture, Government of India</span> <ExternalLink size={11} />
            </a>
            <a href="https://handicrafts.nic.in/" target="_blank" rel="noreferrer">
              <span>Development Commissioner for Handicrafts</span> <ExternalLink size={11} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
