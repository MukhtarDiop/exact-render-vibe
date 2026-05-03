import { useEffect, useRef, useState, FormEvent } from "react";
import { FlipCard } from "@/components/FlipCard";
import { flashcards, principles } from "@/data/content";

const Index = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const principlesRef = useRef<HTMLElement | null>(null);
  const revealRefs = useRef<HTMLElement[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) return setError("Merci d'entrer une adresse e-mail valide.");
    if (!consent) return setError("Tu dois accepter pour recevoir le guide.");
    setSubmitted(true);
    setTimeout(() => {
      principlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  // Reveal on scroll once submitted
  useEffect(() => {
    if (!submitted) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    // immediately reveal first
    requestAnimationFrame(() => {
      revealRefs.current.forEach((el) => el?.classList.add("is-visible"));
    });
    return () => obs.disconnect();
  }, [submitted]);

  const business = flashcards.filter((c) => c.category === "business");
  const famille = flashcards.filter((c) => c.category === "famille");

  return (
    <main className="min-h-screen bg-cream text-brown">
      {/* SECTION 1 — HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl">
          <p className="text-center tracking-[0.4em] text-brown/70 uppercase text-xs mb-12" style={{ fontFamily: 'system-ui, sans-serif' }}>
            CEO Ose
          </p>

          <h1 className="text-center font-serif text-4xl md:text-6xl leading-[1.05] text-brown">
            10 manières d'utiliser l'IA pour alléger ta charge mentale
          </h1>
          <p className="text-center italic text-brown/70 mt-6 text-lg md:text-xl">
            (Promis, on ne parle pas de création de contenu)
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ton adresse e-mail"
              aria-label="Adresse e-mail"
              className="w-full min-h-[52px] px-5 rounded-[12px] bg-cream border border-brown/40 text-brown placeholder:text-brown/50 text-base focus:outline-none focus:border-brown focus:ring-2 focus:ring-brown/20 transition"
            />

            <label className="flex items-start gap-3 text-sm md:text-[15px] text-brown leading-relaxed cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-5 h-5 accent-brown shrink-0"
                aria-label="Consentement"
              />
              <span>
                J'accepte de recevoir des communications par e-mail de la part de CEO Ose. Tu peux te désinscrire à tout moment.{" "}
                <span className="italic text-brown/60">(Conformément à la Loi 25 du Québec)</span>
              </span>
            </label>

            {error && (
              <p className="text-red text-sm" role="alert">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitted}
              className="w-full min-h-[52px] rounded-[12px] bg-brown text-cream text-lg font-serif font-semibold tracking-wide hover:bg-green transition-colors duration-300 disabled:opacity-70"
            >
              {submitted ? "C'est parti ! ✨" : "Accède au guide gratuit →"}
            </button>

            {submitted && (
              <p className="text-center text-green italic mt-2">
                C'est parti ! Découvre les 10 manières ci-dessous ↓
              </p>
            )}
          </form>
        </div>
      </section>

      {/* SECTION 2 — PRINCIPES */}
      {submitted && (
        <section
          ref={(el) => { principlesRef.current = el; if (el) revealRefs.current[0] = el; }}
          className="reveal px-6 py-20 md:py-28 border-t border-brown/15"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-serif text-3xl md:text-5xl text-brown leading-tight">
              Avant de commencer — 4 principes pour bien utiliser l'IA
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14">
              {principles.map((p) => (
                <article
                  key={p.n}
                  className="rounded-[12px] bg-cream border border-brown/30 p-7 md:p-9 shadow-card"
                >
                  <div className="text-brown/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    Principe #{p.n}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl text-brown leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink/85 text-[15px] md:text-base leading-relaxed">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 — FLASHCARDS */}
      {submitted && (
        <section
          ref={(el) => { if (el) revealRefs.current[1] = el; }}
          className="reveal px-6 py-20 md:py-28 border-t border-brown/15"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-serif text-4xl md:text-6xl text-brown">
              Les 10 manières
            </h2>
            <p className="text-center italic text-brown/60 mt-4">
              Survole une carte pour la retourner
            </p>

            {/* Business */}
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-brown/20" />
                <span className="text-brown tracking-[0.3em] uppercase text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Business · 01 → 08
                </span>
                <span className="h-px flex-1 bg-brown/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {business.map((c) => (
                  <FlipCard key={c.number} card={c} />
                ))}
              </div>
            </div>

            {/* Famille */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-brown/20" />
                <span className="text-brown tracking-[0.3em] uppercase text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Famille · 09 → 10
                </span>
                <span className="h-px flex-1 bg-brown/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {famille.map((c) => (
                  <FlipCard key={c.number} card={c} />
                ))}
              </div>
            </div>

            <p className="text-center italic text-brown/60 mt-20 max-w-2xl mx-auto text-lg">
              Ne cherche pas à tout appliquer en même temps. Choisis une idée — celle qui t'a fait penser « ah oui, ça ! » — et teste-la cette semaine.
            </p>

            <p className="text-center text-brown/50 text-xs tracking-[0.3em] uppercase mt-12" style={{ fontFamily: 'system-ui, sans-serif' }}>
              CEO Ose
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
