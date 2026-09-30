import React from 'react'

// Plano REAL de la casa (foto del plano original) usado como fondo.
// Los puntos clickeables se posicionan encima mediante coordenadas en %.
export function PlanoCasa() {
  return (
    <img
      src="/plano-casa.svg"
      alt="Plano de la planta de la casa"
      className="plano-img"
      draggable="false"
    />
  )
}

// Plano esquemático del terreno (lote en esquina con casa y galpón).
// Si más adelante tenés un plano real del terreno, se reemplaza igual que el de la casa.
export function PlanoTerreno() {
  const txt = { fontFamily: "Outfit, sans-serif", textAnchor: "middle" }
  return (
    <svg viewBox="0 0 1000 720" preserveAspectRatio="xMidYMid meet" className="plano-svg">
      <defs>
        <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(60,50,40,0.05)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="1000" height="720" fill="url(#grid2)" />

      {/* Lote: 32,18 x 27,01 m con ochava de 5 x 5 m (esquina El Radal / Los Arrayanes) */}
      <polygon points="202,620 202,212 295,120 797,120 797,620"
        fill="rgba(120,140,90,0.10)" stroke="#5e7345" strokeWidth="3" strokeLinejoin="round" />

      {/* Galería (frente sobre El Radal) */}
      <rect x="258" y="326" width="44" height="132"
        fill="rgba(122,95,66,0.08)" stroke="#7a5f42" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* La casa */}
      <rect x="302" y="194" width="185" height="264" rx="3"
        fill="rgba(122,95,66,0.18)" stroke="#7a5f42" strokeWidth="3" />
      <text x="395" y="330" fill="rgba(90,70,50,0.55)" fontSize="16" {...txt}>Casa</text>

      {/* El galpón */}
      <rect x="572" y="176" width="188" height="120" rx="3"
        fill="rgba(100,100,110,0.18)" stroke="#555" strokeWidth="3" />
      <text x="666" y="232" fill="rgba(70,70,80,0.6)" fontSize="16" {...txt}>Galpón</text>

      {/* Calles */}
      <text x="546" y="100" fill="rgba(94,115,69,0.75)" fontSize="16" fontStyle="italic" {...txt}>Av. Los Arrayanes</text>
      <text x="172" y="416" fill="rgba(94,115,69,0.75)" fontSize="16" fontStyle="italic" {...txt}
        transform="rotate(-90 172 416)">Calle El Radal</text>

      {/* Medidas */}
      <text x="500" y="645" fill="rgba(94,115,69,0.6)" fontSize="13" {...txt}>32,18 m</text>
      <text x="822" y="370" fill="rgba(94,115,69,0.6)" fontSize="13" {...txt}
        transform="rotate(90 822 370)">27,01 m</text>

      {/* Orientación */}
      <g transform="translate(900,90)" stroke="#5e7345" strokeWidth="2" fill="#5e7345">
        <line x1="0" y1="20" x2="0" y2="-15" />
        <path d="M -6 -8 L 0 -18 L 6 -8 Z" />
        <text x="0" y="38" fontSize="14" stroke="none" {...txt}>N</text>
      </g>
    </svg>
  )
}