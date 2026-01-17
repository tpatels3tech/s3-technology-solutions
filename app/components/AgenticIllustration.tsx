export function AgenticIllustration() {
  // Inline SVG so the site stays self-contained (no external image hosting).
  // Designed for a dark background with high-contrast strokes.
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_28px_90px_-55px_rgba(0,0,0,0.9)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -right-10 -bottom-12 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 920 560"
        className="relative h-[260px] w-full"
        role="img"
        aria-label="Agentic AI workflow diagram"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#7dd3fc" stopOpacity="0.9" />
            <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Links */}
        <g stroke="url(#g1)" strokeWidth="2.5" fill="none" opacity="0.95">
          <path d="M190 160 C 290 70, 420 70, 520 160" />
          <path d="M190 160 C 300 250, 410 250, 520 160" />
          <path d="M520 160 C 620 70, 740 90, 820 180" />
          <path d="M520 160 C 640 240, 740 260, 820 180" />
          <path d="M520 160 C 510 270, 520 340, 560 410" />
          <path d="M560 410 C 470 470, 360 470, 280 420" />
          <path d="M280 420 C 210 360, 200 260, 190 160" />
        </g>

        {/* Nodes */}
        <g filter="url(#glow)">
          {/* Data */}
          <circle cx="190" cy="160" r="38" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
          <text x="190" y="166" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">Data</text>

          {/* Orchestrator */}
          <rect x="450" y="120" width="140" height="80" rx="24" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
          <text x="520" y="156" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">Orchestrator</text>
          <text x="520" y="176" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">(Policies + Guardrails)</text>

          {/* Tools */}
          <circle cx="820" cy="180" r="38" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
          <text x="820" y="186" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">Tools</text>

          {/* Human */}
          <circle cx="560" cy="410" r="42" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
          <text x="560" y="408" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">Human</text>
          <text x="560" y="428" textAnchor="middle" fontSize="12" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">in the loop</text>

          {/* Outcomes */}
          <rect x="220" y="380" width="120" height="80" rx="24" fill="rgba(255,255,255,0.08)" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
          <text x="280" y="420" textAnchor="middle" fontSize="14" fill="#ffffff" fontFamily="ui-sans-serif, system-ui">Outcomes</text>
        </g>

        {/* Labels */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="12" fill="#ffffff" opacity="0.95">
          <text x="305" y="92">Plan</text>
          <text x="330" y="258">Execute</text>
          <text x="650" y="92">Integrate</text>
          <text x="650" y="268">Validate</text>
          <text x="495" y="320">Review</text>
        </g>
      </svg>

      <div className="relative mt-4">
        <div className="text-sm font-semibold text-white">Agentic AI, with controls</div>
        <div className="mt-1 text-sm text-white">
          Orchestrate workflows across data and tools while keeping humans and governance in the loop.
        </div>
      </div>
    </div>
  );
}
