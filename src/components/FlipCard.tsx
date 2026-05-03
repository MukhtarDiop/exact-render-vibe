import { useState } from "react";
import type { Flashcard } from "@/data/content";

export const FlipCard = ({ card }: { card: Flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card group ${flipped ? "is-flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      aria-label={`Carte ${card.number}: ${card.title}. Survoler pour retourner.`}
    >
      <div className="flip-inner min-h-[320px] md:min-h-[360px]">
        {/* RECTO */}
        <div className="flip-face absolute inset-0 rounded-[12px] bg-brown text-cream p-7 md:p-8 flex flex-col justify-between shadow-warm">
          <div>
            <div className="text-cream/60 text-sm tracking-[0.25em] uppercase font-sans" style={{ fontFamily: 'system-ui, sans-serif' }}>
              {card.category === "business" ? "Business" : "Famille"} · {card.number}
            </div>
            <h3 className="mt-6 text-3xl md:text-4xl leading-tight font-serif">
              {card.title}
            </h3>
          </div>
          <p className="italic text-cream/70 text-sm mt-6">
            Survole la carte pour en savoir plus →
          </p>
        </div>

        {/* VERSO */}
        <div className="flip-face flip-back absolute inset-0 rounded-[12px] bg-cream text-ink border border-brown/40 p-6 md:p-7 overflow-y-auto shadow-warm">
          <div className="text-brown/70 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            {card.number} — {card.title}
          </div>
          <div className="space-y-3 text-[15px] md:text-base leading-relaxed text-ink/90">
            {card.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {card.warning && (
            <div className="mt-4 border-l-4 border-red bg-red/5 px-4 py-3 text-sm text-red leading-relaxed">
              ⚠ {card.warning}
            </div>
          )}

          <div className="mt-5 border-l-4 border-green bg-green/5 px-4 py-3">
            <div className="text-green text-xs uppercase tracking-widest font-semibold mb-1" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Ce que ça change
            </div>
            <p className="text-ink/90 text-[15px] leading-relaxed">{card.change}</p>
          </div>

          {card.tools && (
            <p className="mt-4 italic text-brown/60 text-sm">Outils : {card.tools}</p>
          )}

          <p className="mt-5 italic text-brown/50 text-xs">← Clique pour retourner</p>
        </div>
      </div>
    </div>
  );
};
