export function AgenticPulse() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-[var(--surface-strong)] p-6 shadow-[0_24px_48px_-30px_rgba(0,0,0,0.8)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute right-0 top-8 h-48 w-48 rounded-full bg-blue-500/16 blur-3xl" />
      </div>

      <svg viewBox="0 0 560 280" className="relative h-52 w-full" role="img" aria-label="Agentic operating model graphic">
        <defs>
          <linearGradient id="pulseLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#67e8f9" />
            <stop offset="0.55" stopColor="#93c5fd" />
            <stop offset="1" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#pulseLine)" strokeWidth="2.5">
          <path d="M40 210 C110 120, 150 110, 205 150 S320 245, 380 170 S465 90, 520 125" opacity="0.95" />
          <path d="M40 170 C95 120, 165 95, 235 130 S345 215, 410 155 S470 110, 520 150" opacity="0.38" />
        </g>

        <g>
          <rect x="40" y="56" width="118" height="58" rx="16" fill="rgba(15,27,45,0.94)" stroke="rgba(159,197,255,0.4)" />
          <text x="99" y="80" textAnchor="middle" fontSize="14" fill="#f7fbff" fontFamily="ui-sans-serif, system-ui">Signals</text>
          <text x="99" y="98" textAnchor="middle" fontSize="11" fill="#d9e3f0" fontFamily="ui-sans-serif, system-ui">data + intent</text>

          <rect x="220" y="32" width="122" height="66" rx="18" fill="rgba(15,27,45,0.96)" stroke="rgba(159,197,255,0.5)" />
          <text x="281" y="58" textAnchor="middle" fontSize="14" fill="#f7fbff" fontFamily="ui-sans-serif, system-ui">Agents</text>
          <text x="281" y="77" textAnchor="middle" fontSize="11" fill="#d9e3f0" fontFamily="ui-sans-serif, system-ui">reason + plan</text>

          <rect x="398" y="58" width="122" height="58" rx="16" fill="rgba(15,27,45,0.94)" stroke="rgba(159,197,255,0.4)" />
          <text x="459" y="82" textAnchor="middle" fontSize="14" fill="#f7fbff" fontFamily="ui-sans-serif, system-ui">Systems</text>
          <text x="459" y="100" textAnchor="middle" fontSize="11" fill="#d9e3f0" fontFamily="ui-sans-serif, system-ui">tools + actions</text>

          <rect x="218" y="168" width="126" height="58" rx="16" fill="rgba(15,27,45,0.94)" stroke="rgba(240,214,162,0.45)" />
          <text x="281" y="192" textAnchor="middle" fontSize="14" fill="#f7fbff" fontFamily="ui-sans-serif, system-ui">Governance</text>
          <text x="281" y="210" textAnchor="middle" fontSize="11" fill="#d9e3f0" fontFamily="ui-sans-serif, system-ui">review + policy</text>
        </g>

        <g fill="#9ec5ff">
          <circle cx="99" cy="142" r="5" />
          <circle cx="281" cy="125" r="6" />
          <circle cx="459" cy="142" r="5" />
          <circle cx="281" cy="154" r="5" />
        </g>
      </svg>

      <div className="relative mt-4">
        <div className="text-sm font-semibold text-[var(--ink)]">Agentic operating model</div>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          Strategy, orchestration, tool integration, and governance working together in one delivery model.
        </p>
      </div>
    </div>
  );
}
