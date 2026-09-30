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
  return (
    <svg viewBox="0 0 1000 720" preserveAspectRatio="xMidYMid meet" className="plano-svg">
      <defs>
        <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(60,50,40,0.05)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="1000" height="720" fill="url(#grid2)" />

      {/* Límite del lote (polígono irregular de 5 lados, esquina) */}
      <polygon points="150,120 760,120 850,560 150,600"
        fill="rgba(120,140,90,0.10)" stroke="#5e7345" strokeWidth="3" strokeLinejoin="round" />

      {/* La casa */}
      <rect x="220" y="200" width="260" height="220" rx="4"
        fill="rgba(122,95,66,0.18)" stroke="#7a5f42" strokeWidth="3" />
      <text x="350" y="315" fill="rgba(90,70,50,0.5)" fontFamily="Outfit, sans-serif" fontSize="16" textAnchor="middle">Casa</text>

      {/* El galpón */}
      <rect x="560" y="180" width="200" height="150" rx="4"
        fill="rgba(100,100,110,0.18)" stroke="#555" strokeWidth="3" />
      <text x="660" y="260" fill="rgba(70,70,80,0.55)" fontFamily="Outfit, sans-serif" fontSize="16" textAnchor="middle">Galpón</text>

      {/* Calles */}
      <text x="500" y="100" fill="rgba(94,115,69,0.7)" fontFamily="Outfit, sans-serif" fontSize="16" textAnchor="middle" fontStyle="italic">Av. Los Arrayanes</text>
      <text x="90" y="360" fill="rgba(94,115,69,0.7)" fontFamily="Outfit, sans-serif" fontSize="16" textAnchor="middle" fontStyle="italic" transform="rotate(-90 90 360)">Calle El Radal</text>

      {/* Orientación */}
      <g transform="translate(900,90)" stroke="#5e7345" strokeWidth="2" fill="#5e7345">
        <line x1="0" y1="20" x2="0" y2="-15" />
        <path d="M -6 -8 L 0 -18 L 6 -8 Z" />
        <text x="0" y="38" fontFamily="Outfit, sans-serif" fontSize="14" textAnchor="middle" stroke="none">N</text>
      </g>
    </svg>
  )
}
