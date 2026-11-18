/* Onde a più strati nei colori del sito. Scorrono piano con lo scroll (vedi App.css). */
export default function Waves() {
  return (
    <div className="waves" aria-hidden="true">
      <svg className="wave wave-1" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wv1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6a2fa0" />
            <stop offset="1" stopColor="#3a1d5c" />
          </linearGradient>
        </defs>
        <path d="M0 0 H640 C520 170 380 230 330 420 C280 610 390 770 240 900 H0 Z" fill="url(#wv1)" />
      </svg>
      <svg className="wave wave-2" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wv2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e49bcf" />
            <stop offset="1" stopColor="#8a4fc0" />
          </linearGradient>
        </defs>
        <path d="M1440 60 C1300 150 1180 290 1205 470 C1230 650 1360 700 1440 730 Z" fill="url(#wv2)" />
      </svg>
      <svg className="wave wave-3" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wv3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#5b2a86" />
            <stop offset="1" stopColor="#e49bcf" />
          </linearGradient>
        </defs>
        <path d="M0 900 V720 C220 630 430 780 670 730 C910 680 1100 560 1440 650 V900 Z" fill="url(#wv3)" />
      </svg>
    </div>
  );
}
