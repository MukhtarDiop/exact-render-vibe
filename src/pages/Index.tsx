import { useEffect, useRef, useState, FormEvent } from "react";
import { FlipCard } from "@/components/FlipCard";
import { flashcards, principles } from "@/data/content";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [returning, setReturning] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const principlesRef = useRef<HTMLElement | null>(null);
  const revealRefs = useRef<HTMLElement[]>([]);

  // Auto-unlock for returning subscribers
  useEffect(() => {
    try {
      if (localStorage.getItem("ceo-ose-subscribed") === "true") {
        setSubmitted(true);
        setReturning(true);
      }
    } catch {}
  }, []);

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
          <p className="text-center tracking-[0.45em] text-brown uppercase font-normal text-base md:text-xl mb-12" style={{ fontFamily: 'system-ui, sans-serif' }}>
            CEO OSE
          </p>

          <h1 className="text-center font-serif font-bold text-5xl md:text-7xl leading-[1.02] text-brown tracking-tight">
            <span className="mr-3 align-baseline text-[1em]" style={{ fontFamily: "'Abril Fatface', serif" }}>9</span>
            manières d'utiliser l'IA pour alléger ta charge mentale
          </h1>
          <p className="text-center italic text-brown/70 mt-6 text-lg md:text-xl">
            (Promis, on ne parle pas de création de contenu)
          </p>

          {returning ? (
            <div className="mt-12 text-center space-y-5">
              <p className="font-serif text-2xl md:text-3xl text-brown font-semibold">
                Bon retour ! ✨
              </p>
              <p className="text-brown/70 italic">
                Tu as déjà accès au guide. Découvre (ou redécouvre) les <span style={{ fontFamily: "'Abril Fatface', serif" }}>9</span> manières ci-dessous.
              </p>
              <button
                type="button"
                onClick={() => principlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="w-full min-h-[52px] rounded-[12px] bg-brown text-cream text-lg font-serif font-semibold tracking-wide hover:bg-green transition-colors duration-300"
              >
                Accéder au guide ↓
              </button>
              <button
                type="button"
                onClick={() => {
                  try {
                    localStorage.removeItem("ceo-ose-subscribed");
                    localStorage.removeItem("ceo-ose-email");
                    localStorage.removeItem("ceo-ose-name");
                  } catch {}
                  setReturning(false);
                  setSubmitted(false);
                }}
                className="text-brown/60 text-sm underline hover:text-brown transition-colors"
              >
                Utiliser une autre adresse e-mail
              </button>
            </div>
          ) : (
            <form
              onSubmit={async (e: FormEvent) => {
                e.preventDefault();
                setError("");
                if (!fullName.trim()) {
                  setError("Merci d'indiquer ton nom.");
                  return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  setError("Merci d'indiquer une adresse e-mail valide.");
                  return;
                }
                if (!consent) {
                  setError("Merci d'accepter de recevoir les communications.");
                  return;
                }
                try {
                  const res = await fetch("https://n8n.srv1171130.hstgr.cloud/webhook/form-signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });
                  if (!res.ok) throw new Error("Network error");
                } catch {
                  setError("Une erreur est survenue. Merci de réessayer.");
                  return;
                }
                try {
                  localStorage.setItem("ceo-ose-subscribed", "true");
                  localStorage.setItem("ceo-ose-email", email);
                  localStorage.setItem("ceo-ose-name", fullName);
                } catch {}
                toast.success("Merci ! Ton guide est débloqué ci-dessous.");
                setSubmitted(true);
              }}
              className="mt-12 space-y-4"
            >
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ton nom"
                className="w-full min-h-[52px] px-5 rounded-[12px] bg-cream border border-brown/30 text-brown placeholder:text-brown/50 focus:outline-none focus:border-brown transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ton e-mail"
                className="w-full min-h-[52px] px-5 rounded-[12px] bg-cream border border-brown/30 text-brown placeholder:text-brown/50 focus:outline-none focus:border-brown transition-colors"
              />
              <label className="flex items-start gap-3 text-brown/80 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 accent-brown"
                />
                <span>
                  J'accepte de recevoir des communications par e-mail de la part de CEO Ose.{"\n"}
                  Tu peux te désinscrire à tout moment.
                </span>
              </label>
              {error && (
                <p className="text-red-700 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full min-h-[52px] rounded-[12px] bg-brown text-cream text-lg font-serif font-semibold tracking-wide hover:bg-green transition-colors duration-300"
              >
                Recevoir le guide ↓
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 2 — PRINCIPES */}
      {submitted && (
        <section
          ref={(el) => { principlesRef.current = el; if (el) revealRefs.current[0] = el; }}
          className="reveal px-6 py-20 md:py-28 border-t border-brown/15"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-serif font-bold text-4xl md:text-6xl text-brown leading-tight tracking-tight">
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
                  <p className="mt-4 text-ink/85 text-[15px] md:text-base leading-relaxed whitespace-pre-line">
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
            <h2 className="text-center font-serif font-bold text-5xl md:text-7xl text-brown tracking-tight">
              Les <span className="text-[1em]" style={{ fontFamily: "'Abril Fatface', serif" }}>9</span> manières
            </h2>
            <p className="text-center italic text-brown/60 mt-4">
              Survole une carte pour la retourner
            </p>

            {/* Business */}
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-brown/20" />
                <span className="text-brown tracking-[0.3em] uppercase text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Business · 01 → 0{business.length}
                </span>
                <span className="h-px flex-1 bg-brown/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8" data-testid="business-grid">
                {business.map((c, i) => {
                  const isLastOdd =
                    business.length % 2 === 1 && i === business.length - 1;
                  return (
                    <div
                      key={c.number}
                      data-testid="card-wrapper"
                      data-last-odd={isLastOdd ? "true" : "false"}
                      className={isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto md:w-full" : ""}
                    >
                      <FlipCard card={c} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Famille */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-brown/20" />
                <span className="text-brown tracking-[0.3em] uppercase text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Famille · 0{business.length + 1} → 0{business.length + famille.length}
                </span>
                <span className="h-px flex-1 bg-brown/20" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8" data-testid="famille-grid">
                {famille.map((c, i) => {
                  const isLastOdd =
                    famille.length % 2 === 1 && i === famille.length - 1;
                  return (
                    <div
                      key={c.number}
                      data-testid="card-wrapper"
                      data-last-odd={isLastOdd ? "true" : "false"}
                      className={isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto md:w-full" : ""}
                    >
                      <FlipCard card={c} />
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-center italic text-brown/60 mt-20 max-w-2xl mx-auto text-lg">
              Ne cherche pas à tout appliquer en même temps. Choisis une idée — celle qui t'a fait penser « ah oui, ça ! » — et teste-la cette semaine.
            </p>

            <p className="text-center text-brown font-normal text-sm md:text-base tracking-[0.45em] uppercase mt-12" style={{ fontFamily: 'system-ui, sans-serif' }}>
              CEO OSE
            </p>
          </div>
        </section>
      )}

      {/* SECTION 4 — CALL TO ACTION */}
      {submitted && (
        <section
          ref={(el) => { if (el) revealRefs.current[2] = el; }}
          className="reveal px-6 py-20 md:py-28 border-t border-brown/15 bg-brown text-cream"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight">
              Tu es épuisée par ton business?
            </h2>
            <p className="mt-10 text-cream/90 text-lg md:text-xl leading-relaxed text-center">
              Si tu veux mettre le doigt sur ce qui te coûte vraiment :
            </p>
            <ul className="mt-6 space-y-3 mx-auto w-fit text-cream/90 text-base md:text-lg">
              <li className="flex gap-3"><span aria-hidden>•</span><span>du temps</span></li>
              <li className="flex gap-3"><span aria-hidden>•</span><span>de l'argent</span></li>
              <li className="flex gap-3"><span aria-hidden>•</span><span>et de l'énergie</span></li>
            </ul>
            <p className="mt-10 text-cream/90 text-lg md:text-xl leading-relaxed text-center">
              dans ton business et partir avec un plan d'action clair,
            </p>
            <p className="mt-4 text-cream/90 text-lg md:text-xl leading-relaxed text-center">
              alors, envoie-moi le mot <span className="font-serif font-bold italic">AUDIT</span> en DM sur Instagram
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://urls.fr/ywt6eG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-[12px] bg-cream text-brown text-lg font-serif font-semibold tracking-wide hover:bg-cream/90 transition-colors duration-300"
              >
                Envoyer AUDIT en DM 👉
              </a>
            </div>
            <p className="mt-6 text-cream/90 text-lg md:text-xl leading-relaxed text-center">
              On verra si on peut travailler ensemble.
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Index;
