// 100% self-contained vector SVGs for all Windows 95/98 icons.
// These vector drawings render instantly and offline with zero external dependencies.

const svgUri = (svg: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;

export const ICONS = {
  // Desktop & Start Menu
  skills: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="4" y="5" width="24" height="24" fill="#90a4ae" stroke="#263238" stroke-width="1.5" rx="1"/>
      <rect x="5" y="6" width="22" height="1" fill="#cfd8dc"/>
      <rect x="6" y="18" width="20" height="9" fill="#b0bec5" stroke="#37474f" stroke-width="1"/>
      <rect x="12" y="21" width="8" height="2" fill="#eceff1" stroke="#37474f" stroke-width="0.75"/>
      <rect x="14" y="24" width="4" height="1.5" fill="#546e7a"/>
      <polygon points="5,7 27,7 29,16 3,16" fill="#78909c" stroke="#263238" stroke-width="1"/>
      <path d="M7 10 L7 6 L12 6 L14 7 L17 7 L17 10 Z" fill="#e53935" stroke="#b71c1c" stroke-width="0.75"/>
      <path d="M11 12 L11 7 L17 7 L19 8 L22 8 L22 12 Z" fill="#fbc02d" stroke="#f57f17" stroke-width="0.75"/>
      <path d="M15 14 L15 8 L21 8 L23 9 L26 9 L26 14 Z" fill="#1e88e5" stroke="#0d47a1" stroke-width="0.75"/>
      <polygon points="3,15 29,15 28,18 4,18" fill="#cfd8dc" stroke="#37474f" stroke-width="1"/>
      <rect x="12" y="16" width="8" height="1.5" fill="#455a64"/>
    </svg>
  `),

  work: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M11 7 C11 4, 21 4, 21 7" fill="none" stroke="#4e342e" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="3" y="8" width="26" height="20" rx="2" fill="#8d5b28" stroke="#3e2723" stroke-width="1.5"/>
      <line x1="5" y1="9.5" x2="27" y2="9.5" stroke="#b87333" stroke-width="1"/>
      <path d="M3 15 L12 18 L20 18 L29 15" fill="none" stroke="#5d3a1a" stroke-width="1.5"/>
      <path d="M3 10 L6 10 L6 8" fill="none" stroke="#ffd700" stroke-width="1.5"/>
      <path d="M29 10 L26 10 L26 8" fill="none" stroke="#ffd700" stroke-width="1.5"/>
      <path d="M3 26 L6 26 L6 28" fill="none" stroke="#ffd700" stroke-width="1.5"/>
      <path d="M29 26 L26 26 L26 28" fill="none" stroke="#ffd700" stroke-width="1.5"/>
      <rect x="8" y="14" width="3" height="5" fill="#ffd700" stroke="#b78103" stroke-width="0.75" rx="0.5"/>
      <circle cx="9.5" cy="16.5" r="0.6" fill="#3e2723"/>
      <rect x="21" y="14" width="3" height="5" fill="#ffd700" stroke="#b78103" stroke-width="0.75" rx="0.5"/>
      <circle cx="22.5" cy="16.5" r="0.6" fill="#3e2723"/>
    </svg>
  `),

  education: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="6" y="5" width="22" height="24" rx="2" fill="#1b2a4a"/>
      <rect x="4" y="4" width="22" height="24" rx="2" fill="#1e88e5" stroke="#0d47a1" stroke-width="1.5"/>
      <rect x="4" y="4" width="4" height="24" fill="#0d47a1"/>
      <circle cx="4" cy="7" r="1.5" fill="#eceff1" stroke="#37474f" stroke-width="0.5"/>
      <circle cx="4" cy="12" r="1.5" fill="#eceff1" stroke="#37474f" stroke-width="0.5"/>
      <circle cx="4" cy="17" r="1.5" fill="#eceff1" stroke="#37474f" stroke-width="0.5"/>
      <circle cx="4" cy="22" r="1.5" fill="#eceff1" stroke="#37474f" stroke-width="0.5"/>
      <path d="M26 7 L29 7 L29 10 L26 10 Z" fill="#e53935"/>
      <path d="M26 12 L29 12 L29 15 L26 15 Z" fill="#fbc02d"/>
      <path d="M26 17 L29 17 L29 20 L26 20 Z" fill="#43a047"/>
      <path d="M26 22 L29 22 L29 25 L26 25 Z" fill="#8e24aa"/>
      <polygon points="15,10 22,13 15,16 8,13" fill="#ffd700"/>
      <path d="M10 14.5 L10 18 C10 20, 20 20, 20 18 L20 14.5" fill="#ffb300"/>
      <line x1="22" y1="13" x2="23" y2="17" stroke="#ffd700" stroke-width="1"/>
      <circle cx="23" cy="17" r="0.8" fill="#ffd700"/>
    </svg>
  `),

  about: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <circle cx="12" cy="10" r="4.5" fill="#ffd54f"/>
      <path d="M9 7 C9 5, 15 5, 15 7 C15 8, 14 9, 12 9 C10 9, 9 8, 9 7 Z" fill="#5d4037"/>
      <path d="M5 24 C5 18, 19 18, 19 24 Z" fill="#00897b" stroke="#004d40" stroke-width="1"/>
      <circle cx="20" cy="13" r="5" fill="#ffe082"/>
      <path d="M16 10 C16 7, 24 7, 24 10 C24 11, 23 12, 20 12 C17 12, 16 11, 16 10 Z" fill="#4e342e"/>
      <path d="M12 28 C12 20, 28 20, 28 28 Z" fill="#1976d2" stroke="#0d47a1" stroke-width="1"/>
      <polygon points="20,20 18,23 22,23" fill="#ffffff"/>
    </svg>
  `),

  contact: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="2,12 26,12 30,24 2,24" fill="#e0e0d1" stroke="#424242" stroke-width="1.2"/>
      <polygon points="2,12 6,6 26,6 26,12" fill="#f5f5ea" stroke="#424242" stroke-width="1.2"/>
      <line x1="22" y1="6" x2="22" y2="2" stroke="#212121" stroke-width="2" stroke-linecap="round"/>
      <rect x="4" y="16" width="24" height="6" fill="#212121" rx="1"/>
      <circle cx="7" cy="19" r="1.2" fill="#76ff03"/>
      <circle cx="11" cy="19" r="1.2" fill="#76ff03"/>
      <circle cx="15" cy="19" r="1.2" fill="#76ff03"/>
      <circle cx="19" cy="19" r="1.2" fill="#76ff03"/>
      <circle cx="24" cy="19" r="1.2" fill="#ff1744"/>
    </svg>
  `),

  downloads: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="6,4 20,4 26,10 26,29 6,29" fill="#9e9e9e"/>
      <polygon points="5,3 19,3 25,9 25,28 5,28" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <polygon points="19,3 19,9 25,9" fill="#cfd8dc" stroke="#37474f" stroke-width="1"/>
      <line x1="8" y1="8" x2="16" y2="8" stroke="#90a4ae" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="12" x2="22" y2="12" stroke="#90a4ae" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="18" cy="20" r="7" fill="#2e7d32" stroke="#ffffff" stroke-width="1.2"/>
      <path d="M18 15 L18 22 M15 19 L18 23 L21 19" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),

  minesweeper: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" fill="#c0c0c0"/>
      <polygon points="2,2 30,2 28,4 4,4 4,28 2,30" fill="#ffffff"/>
      <polygon points="30,2 30,30 2,30 4,28 28,28 28,4" fill="#808080"/>
      <line x1="16" y1="6" x2="16" y2="26" stroke="#000000" stroke-width="2"/>
      <line x1="6" y1="16" x2="26" y2="16" stroke="#000000" stroke-width="2"/>
      <line x1="9" y1="9" x2="23" y2="23" stroke="#000000" stroke-width="2"/>
      <line x1="9" y1="23" x2="23" y2="9" stroke="#000000" stroke-width="2"/>
      <circle cx="16" cy="6" r="1.2" fill="#000000"/>
      <circle cx="16" cy="26" r="1.2" fill="#000000"/>
      <circle cx="6" cy="16" r="1.2" fill="#000000"/>
      <circle cx="26" cy="16" r="1.2" fill="#000000"/>
      <circle cx="9" cy="9" r="1.2" fill="#000000"/>
      <circle cx="23" cy="23" r="1.2" fill="#000000"/>
      <circle cx="9" cy="23" r="1.2" fill="#000000"/>
      <circle cx="23" cy="9" r="1.2" fill="#000000"/>
      <circle cx="16" cy="16" r="6" fill="#111111"/>
      <rect x="13.5" y="13.5" width="2" height="2" fill="#ffffff"/>
    </svg>
  `),

  // Window interior icons
  computer: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="3" y="4" width="20" height="17" rx="2" fill="#e0e0d1" stroke="#424242" stroke-width="1.2"/>
      <rect x="5" y="6" width="16" height="13" rx="1" fill="#0000aa"/>
      <rect x="7" y="8" width="8" height="6" fill="#c0c0c0"/>
      <rect x="7" y="8" width="8" height="1.5" fill="#000080"/>
      <polygon points="8,21 18,21 20,24 6,24" fill="#c8c8b8" stroke="#424242" stroke-width="1"/>
      <rect x="23" y="6" width="7" height="20" fill="#dfdfd0" stroke="#424242" stroke-width="1.2"/>
      <line x1="25" y1="10" x2="28" y2="10" stroke="#424242" stroke-width="1"/>
      <line x1="25" y1="13" x2="28" y2="13" stroke="#424242" stroke-width="1"/>
      <circle cx="26.5" cy="22" r="1" fill="#00e676"/>
    </svg>
  `),

  writeFile: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="3,3 17,3 23,9 23,29 3,29" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <polygon points="17,3 17,9 23,9" fill="#cfd8dc" stroke="#37474f" stroke-width="1"/>
      <line x1="6" y1="8" x2="14" y2="8" stroke="#90a4ae" stroke-width="1"/>
      <line x1="6" y1="12" x2="19" y2="12" stroke="#90a4ae" stroke-width="1"/>
      <line x1="6" y1="16" x2="19" y2="16" stroke="#90a4ae" stroke-width="1"/>
      <line x1="6" y1="20" x2="15" y2="20" stroke="#90a4ae" stroke-width="1"/>
      <g transform="rotate(-45 22 20)">
        <rect x="14" y="18" width="16" height="4" fill="#fbc02d" stroke="#f57f17" stroke-width="0.5"/>
        <rect x="10" y="18" width="4" height="4" fill="#ff8a80" stroke="#d32f2f" stroke-width="0.5"/>
        <polygon points="30,18 34,20 30,22" fill="#ffe0b2"/>
        <polygon points="32.5,19.3 34,20 32.5,20.7" fill="#212121"/>
      </g>
    </svg>
  `),

  keyboard: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="3,10 29,10 31,24 1,24" fill="#e0e0d1" stroke="#424242" stroke-width="1.2"/>
      <polygon points="3,11 29,11 29,12 3,12" fill="#ffffff"/>
      <rect x="4" y="13" width="24" height="2" fill="#bdbdbd"/>
      <rect x="3.5" y="16" width="25" height="2" fill="#bdbdbd"/>
      <rect x="3" y="19" width="26" height="2.5" fill="#bdbdbd"/>
      <rect x="9" y="19" width="14" height="2.5" fill="#ffffff"/>
      <path d="M16 10 C16 5, 24 5, 24 2" fill="none" stroke="#424242" stroke-width="1.5"/>
    </svg>
  `),

  userCalendar: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="4" y="6" width="24" height="22" rx="2" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <path d="M4 8 C4 6, 28 6, 28 8 L28 12 L4 12 Z" fill="#d32f2f"/>
      <circle cx="9" cy="9" r="1.2" fill="#ffffff"/>
      <circle cx="23" cy="9" r="1.2" fill="#ffffff"/>
      <circle cx="16" cy="18" r="3" fill="#1976d2"/>
      <path d="M10 26 C10 22, 22 22, 22 26 Z" fill="#1976d2"/>
    </svg>
  `),

  appWizard: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="3" y="4" width="22" height="18" rx="1" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <rect x="3" y="4" width="22" height="4" fill="#000080"/>
      <rect x="5" y="10" width="8" height="10" fill="#e0e0e0"/>
      <line x1="8" y1="28" x2="26" y2="10" stroke="#212121" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="23" y1="13" x2="26" y2="10" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="26,4 27,7 30,8 27,9 26,12 25,9 22,8 25,7" fill="#ffd700"/>
      <polygon points="18,5 18.5,6.5 20,7 18.5,7.5 18,9 17.5,7.5 16,7 17.5,6.5" fill="#ffd700"/>
      <polygon points="29,14 29.5,15.5 31,16 29.5,16.5 29,18 28.5,16.5 27,16 28.5,15.5" fill="#ffd700"/>
    </svg>
  `),

  // Education folder icons & logos
  siit8b: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M16 2 L28 6 L28 17 C28 24, 16 30, 16 30 C16 30, 4 24, 4 17 L4 6 Z" fill="#0d47a1" stroke="#ffb300" stroke-width="1.5"/>
      <path d="M16 4 L26 7.5 L26 16.5 C26 22.5, 16 27.5, 16 27.5 C16 27.5, 6 22.5, 6 16.5 L6 7.5 Z" fill="#1565c0"/>
      <path d="M9 16 C12 14, 16 15, 16 18 C16 15, 20 14, 23 16 L23 22 C20 20, 16 21, 16 24 C16 21, 12 20, 9 22 Z" fill="#ffffff" stroke="#ffb300" stroke-width="0.75"/>
      <path d="M16 8 C14 11, 16 13, 16 13 C16 13, 18 11, 16 8 Z" fill="#ffd700"/>
    </svg>
  `),

  siitLogo: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M24 3 L42 9 L42 25 C42 36, 24 45, 24 45 C24 45, 6 36, 6 25 L6 9 Z" fill="#0d47a1" stroke="#ffb300" stroke-width="2"/>
      <path d="M24 6 L39 11 L39 24 C39 33, 24 41, 24 41 C24 41, 9 33, 9 24 L9 11 Z" fill="#1565c0"/>
      <path d="M13 24 C18 21, 24 22, 24 27 C24 22, 30 21, 35 24 L35 33 C30 30, 24 31, 24 36 C24 31, 18 30, 13 33 Z" fill="#ffffff" stroke="#ffb300" stroke-width="1"/>
      <path d="M24 12 C21 16, 24 19, 24 19 C24 19, 27 16, 24 12 Z" fill="#ffd700"/>
    </svg>
  `),

  sjps8b: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M16 2 L28 6 L28 17 C28 24, 16 30, 16 30 C16 30, 4 24, 4 17 L4 6 Z" fill="#880e4f" stroke="#ffd700" stroke-width="1.5"/>
      <path d="M16 6 L16 24 M10 12 L22 12" stroke="#ffd700" stroke-width="2.5" stroke-linecap="square"/>
      <polygon points="16,8 17,11 20,12 17,13 16,16 15,13 12,12 15,11" fill="#ffffff"/>
    </svg>
  `),

  sjpsLogo: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path d="M24 3 L42 9 L42 25 C42 36, 24 45, 24 45 C24 45, 6 36, 6 25 L6 9 Z" fill="#880e4f" stroke="#ffd700" stroke-width="2"/>
      <path d="M24 9 L24 36 M15 18 L33 18" stroke="#ffd700" stroke-width="3.5" stroke-linecap="square"/>
      <polygon points="24,12 25.5,16.5 30,18 25.5,19.5 24,24 22.5,19.5 18,18 22.5,16.5" fill="#ffffff"/>
    </svg>
  `),

  signature: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="4" y="3" width="24" height="26" rx="1" fill="#fffde7" stroke="#b0bec5" stroke-width="1.2"/>
      <rect x="6" y="5" width="20" height="22" fill="none" stroke="#ffd54f" stroke-width="0.8"/>
      <line x1="8" y1="8" x2="18" y2="8" stroke="#37474f" stroke-width="1.2"/>
      <line x1="8" y1="12" x2="24" y2="12" stroke="#90a4ae" stroke-width="0.8"/>
      <line x1="8" y1="15" x2="24" y2="15" stroke="#90a4ae" stroke-width="0.8"/>
      <circle cx="12" cy="21" r="3.5" fill="#c62828"/>
      <circle cx="12" cy="21" r="2.2" fill="#e53935"/>
      <polygon points="10,24 8,28 11,27" fill="#1565c0"/>
      <polygon points="14,24 16,28 13,27" fill="#1565c0"/>
      <path d="M18 22 Q20 20 22 22 T26 21" fill="none" stroke="#263238" stroke-width="1"/>
    </svg>
  `),

  webFileSet: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="4" y="3" width="24" height="26" rx="1" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <rect x="4" y="3" width="24" height="5" fill="#000080"/>
      <rect x="6" y="4.5" width="10" height="2" fill="#ffffff"/>
      <line x1="7" y1="24" x2="25" y2="24" stroke="#424242" stroke-width="1"/>
      <line x1="7" y1="11" x2="7" y2="24" stroke="#424242" stroke-width="1"/>
      <rect x="9" y="16" width="3" height="8" fill="#1e88e5"/>
      <rect x="13" y="13" width="3" height="11" fill="#43a047"/>
      <rect x="17" y="14" width="3" height="10" fill="#fbc02d"/>
      <rect x="21" y="11" width="3" height="13" fill="#e53935"/>
    </svg>
  `),

  // Downloads folder files
  messageFile: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <polygon points="4,3 18,3 24,9 24,29 4,29" fill="#ffffff" stroke="#37474f" stroke-width="1.2"/>
      <polygon points="18,3 18,9 24,9" fill="#cfd8dc" stroke="#37474f" stroke-width="1"/>
      <rect x="2" y="14" width="24" height="7" fill="#d32f2f"/>
      <text x="14" y="19.5" font-family="Arial,sans-serif" font-size="5" font-weight="bold" fill="#ffffff" text-anchor="middle">PDF</text>
      <path d="M7 6 L7 2 C7 0.5, 11 0.5, 11 2 L11 7 C11 8, 8 8, 8 7 L8 3" fill="none" stroke="#78909c" stroke-width="1"/>
    </svg>
  `),

  // Contact icons
  mailboxWorld: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="11" fill="#1e88e5" stroke="#0d47a1" stroke-width="1.2"/>
      <path d="M12 8 C15 7, 18 10, 16 13 C14 15, 11 12, 12 8 Z" fill="#43a047"/>
      <path d="M16 17 C20 16, 24 18, 22 22 C18 24, 15 20, 16 17 Z" fill="#43a047"/>
      <g transform="translate(1, 3)">
        <rect x="6" y="9" width="18" height="12" rx="1" fill="#ffffff" stroke="#263238" stroke-width="1.2"/>
        <polyline points="6,9 15,16 24,9" fill="none" stroke="#263238" stroke-width="1.2"/>
        <rect x="20" y="10.5" width="2.5" height="3" fill="#e53935"/>
      </g>
    </svg>
  `),

  linkedin: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#0a66c2"/>
      <circle cx="8.5" cy="9.5" r="2" fill="#ffffff"/>
      <rect x="6.8" y="13.5" width="3.4" height="10.5" fill="#ffffff"/>
      <path d="M13.8 13.5 L17 13.5 L17 15.2 C17.7 14 19.3 13.2 21.2 13.2 C24.5 13.2 26 15.2 26 18.8 L26 24 L22.5 24 L22.5 19.3 C22.5 17.5 21.8 16.5 20.3 16.5 C18.8 16.5 17.3 17.6 17.3 19.6 L17.3 24 L13.8 24 Z" fill="#ffffff"/>
    </svg>
  `),

  github: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#24292e"/>
      <path d="M16 6 C10.5 6 6 10.5 6 16 C6 20.4 8.9 24.1 12.8 25.4 C13.3 25.5 13.5 24.9 13.5 24.9 L13.5 23.2 C10.7 23.8 10.1 21.9 10.1 21.9 C9.7 20.8 9 20.5 9 20.5 C8 19.9 9.1 19.9 9.1 19.9 C10.2 20 10.8 21 10.8 21 C11.8 22.6 13.4 22.2 14 21.9 C14.1 21.2 14.4 20.7 14.7 20.4 C12.5 20.1 10.2 19.3 10.2 15.5 C10.2 14.4 10.6 13.5 11.2 12.8 C11.1 12.5 10.7 11.5 11.3 10.1 C11.3 10.1 12.2 9.8 14.2 11.2 C15 11 16 10.9 17 10.9 C18 10.9 19 11 19.8 11.2 C21.8 9.8 22.7 10.1 22.7 10.1 C23.3 11.5 22.9 12.5 22.8 12.8 C23.4 13.5 23.8 14.4 23.8 15.5 C23.8 19.3 21.5 20.1 19.3 20.3 C19.7 20.7 20 21.3 20 22.4 L20 24.9 C20 25.2 20.2 25.5 20.7 25.4 C24.7 24.1 27.5 20.4 27.5 16 C27.5 10.5 22.3 6 16 6 Z" fill="#ffffff"/>
    </svg>
  `),

  facebook: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#1877f2"/>
      <path d="M19 11 L16.8 11 C15 11 14.5 11.8 14.5 13.2 L14.5 15.5 L18.8 15.5 L18.2 20 L14.5 20 L14.5 30 L9.8 30 L9.8 20 L6 20 L6 15.5 L9.8 15.5 L9.8 12.2 C9.8 8.5 12 6.5 15.5 6.5 C17.2 6.5 18.2 6.7 18.2 6.7 Z" fill="#ffffff"/>
    </svg>
  `),

  instagram: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <defs>
        <radialGradient id="ig" cx="30%" cy="105%" r="120%">
          <stop offset="0%" stop-color="#fdf497"/>
          <stop offset="10%" stop-color="#fdf497"/>
          <stop offset="50%" stop-color="#fd5949"/>
          <stop offset="68%" stop-color="#d6249f"/>
          <stop offset="100%" stop-color="#285aeb"/>
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#ig)"/>
      <rect x="7" y="7" width="18" height="18" rx="4.5" fill="none" stroke="#ffffff" stroke-width="2"/>
      <circle cx="16" cy="16" r="4.5" fill="none" stroke="#ffffff" stroke-width="2"/>
      <circle cx="21" cy="11" r="1.2" fill="#ffffff"/>
    </svg>
  `),

  twitter: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#1da1f2"/>
      <path d="M25 10.5 C24.2 10.9 23.3 11.1 22.4 11.2 C23.4 10.6 24.1 9.7 24.4 8.5 C23.5 9.1 22.5 9.5 21.4 9.7 C20.5 8.7 19.2 8.1 17.8 8.1 C15 8.1 12.8 10.3 12.8 13.1 C12.8 13.5 12.8 13.9 12.9 14.2 C8.8 14 5.1 12 2.6 9 C2.2 9.7 2 10.5 2 11.4 C2 13.1 2.9 14.7 4.2 15.6 C3.4 15.6 2.7 15.3 2 15 L2 15 C2 17.5 3.8 19.5 6.1 20 C5.7 20.1 5.2 20.2 4.7 20.2 C4.4 20.2 4 20.2 3.7 20.1 C4.4 22.1 6.3 23.6 8.5 23.6 C6.8 24.9 4.7 25.7 2.4 25.7 C2 25.7 1.6 25.7 1.2 25.6 C3.4 27 6 27.9 8.8 27.9 C17.8 27.9 22.8 20.4 22.8 13.9 L22.8 13.3 C23.7 12.6 24.5 11.6 25 10.5 Z" fill="#ffffff" transform="scale(0.85) translate(3, 2)"/>
    </svg>
  `),

  // Error dialog
  msgError: svgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#d32f2f" stroke="#b71c1c" stroke-width="1.5"/>
      <circle cx="16" cy="16" r="12" fill="#e53935"/>
      <line x1="10" y1="10" x2="22" y2="22" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="22" y1="10" x2="10" y2="22" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `),
};

export default ICONS;
