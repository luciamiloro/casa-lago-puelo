import React, { useState, useEffect } from 'react'
import { propiedad, ambientes, terreno, videos, contacto, ubicacionLinks, planosOriginales } from './data'
import { PlanoCasa, PlanoTerreno } from './Planos'

// --- Barra de navegación ----------------------------------------------------
function Nav() {
  const [abierto, setAbierto] = useState(false)
 const links = [
    ['#descripcion', 'La propiedad'],
    ['#explorar', 'Recorrido'],
    ['#ubicacion', 'Ubicación'],
    ['#videos', 'Videos'],
    ['#planos', 'Planos'],
    ['#contacto', 'Contacto'],
  ]
  const ir = (e, href) => {
    e.preventDefault()
    setAbierto(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="nav">
      <a href="#top" className="nav-marca" onClick={(e) => ir(e, '#top')}>Lago Puelo</a>
      <button className="nav-burger" onClick={() => setAbierto(!abierto)} aria-label="Menú">
        <span /><span /><span />
      </button>
      <div className={`nav-links ${abierto ? 'abierto' : ''}`}>
        {links.map(([href, txt]) => (
          <a key={href} href={href} onClick={(e) => ir(e, href)}>{txt}</a>
        ))}
      </div>
    </nav>
  )
}

// --- Mapa interactivo reutilizable -----------------------------------------
function MapaInteractivo({ Plano, puntos, onSelect, esSvg }) {
  const [hover, setHover] = useState(null)
  return (
    <div className={`mapa ${esSvg ? 'con-svg' : ''}`}>
      <Plano />
      {puntos.map((p) => {
        const tieneFotos = p.fotos && p.fotos.length > 0
        return (
          <button
            key={p.id}
            className={`punto ${tieneFotos ? 'con-fotos' : 'sin-fotos'} ${hover === p.id ? 'activo' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onClick={() => onSelect(p)}
            onMouseEnter={() => setHover(p.id)}
            onMouseLeave={() => setHover(null)}
            aria-label={p.nombre}
          >
            <span className="punto-pulso" />
            <span className="punto-centro" />
            <span className="punto-label">
              {p.nombre}{tieneFotos ? ` · ${p.fotos.length} ${p.fotos.length === 1 ? 'foto' : 'fotos'}` : ''}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// --- Visor de fotos (lightbox) ---------------------------------------------
function Visor({ ambiente, onClose }) {
  const [idx, setIdx] = useState(0)
  const fotos = ambiente.fotos || []
  const hay = fotos.length > 0

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hay) setIdx((i) => (i + 1) % fotos.length)
      if (e.key === 'ArrowLeft' && hay) setIdx((i) => (i - 1 + fotos.length) % fotos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hay, fotos.length, onClose])

  return (
    <div className="visor-fondo" onClick={onClose}>
      <div className="visor" onClick={(e) => e.stopPropagation()}>
        <button className="visor-cerrar" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="visor-cabecera">
          <h3>{ambiente.nombre}</h3>
          {ambiente.texto && <p>{ambiente.texto}</p>}
        </div>

        {hay ? (
          <div className="visor-imagen-wrap">
            <img src={fotos[idx]} alt={`${ambiente.nombre} ${idx + 1}`} className="visor-imagen" />
            {fotos.length > 1 && (
              <>
                <button className="nav-foto nav-izq" onClick={() => setIdx((i) => (i - 1 + fotos.length) % fotos.length)}>‹</button>
                <button className="nav-foto nav-der" onClick={() => setIdx((i) => (i + 1) % fotos.length)}>›</button>
                <div className="visor-contador">{idx + 1} / {fotos.length}</div>
              </>
            )}
          </div>
        ) : (
          <div className="visor-vacio">
            <p>Todavía no hay fotos cargadas para este sector.</p>
            <span>Agregá las fotos en <code>public/fotos/</code> y editá <code>src/data.js</code></span>
          </div>
        )}

        {fotos.length > 1 && (
          <div className="miniaturas">
            {fotos.map((f, i) => (
              <button key={i} className={`mini ${i === idx ? 'sel' : ''}`} onClick={() => setIdx(i)}>
                <img src={f} alt={`mini ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// --- Visor simple de una sola imagen (planos) -------------------------------
function VisorImagen({ imagen, titulo, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="visor-fondo" onClick={onClose}>
      <div className="visor" onClick={(e) => e.stopPropagation()}>
        <button className="visor-cerrar" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="visor-cabecera"><h3>{titulo}</h3></div>
        <div className="visor-imagen-wrap">
          <img src={imagen} alt={titulo} className="visor-imagen plano-grande" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [seleccion, setSeleccion] = useState(null)
  const [planoAbierto, setPlanoAbierto] = useState(null)
  const [vista, setVista] = useState('casa')

  const hayPlanos = planosOriginales.some((p) => p.imagen)

  return (
    <div className="app" id="top">
      <Nav />

      {/* PORTADA */}
      <header className="portada">
        <div className="portada-overlay" />
        <div className="portada-contenido">
          <span className="portada-eyebrow">Propiedad en venta y alquiler · Patagonia</span>
          <h1>{propiedad.titulo}</h1>
          <p className="portada-sub">{propiedad.subtitulo}</p>
          <div className="destacados">
            {propiedad.destacados.map((d, i) => (
              <div className="destacado" key={i}>
                <span className="destacado-num">{d.numero}</span>
                <span className="destacado-txt">{d.texto}</span>
              </div>
            ))}
          </div>
          <a href="#explorar" className="cta"
             onClick={(e) => { e.preventDefault(); document.querySelector('#explorar')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Explorar la propiedad
          </a>
        </div>
        <div className="portada-scroll" aria-hidden>↓</div>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="seccion descripcion" id="descripcion">
        <span className="seccion-eyebrow">La propiedad</span>
        <h2>Una casa de familia sobre la esquina</h2>
        <p>{propiedad.descripcion}</p>
        <div className="fichas">
          <div className="ficha"><span>Ubicación</span><strong>{propiedad.ubicacion}</strong></div>
          <div className="ficha"><span>Terreno</span><strong>{propiedad.superficieTerreno}</strong></div>
          <div className="ficha"><span>Construcción</span><strong>{propiedad.superficieCubierta}</strong></div>
          <div className="ficha"><span>Lote</span><strong>En esquina, dos frentes</strong></div>
        </div>
      </section>

      {/* MAPA INTERACTIVO */}
      <section className="seccion mapa-seccion" id="explorar">
        <span className="seccion-eyebrow">Recorrido interactivo</span>
        <h2>Conocé cada ambiente</h2>
        <p className="ayuda">
          <span className="ayuda-icono">👆</span>
          Tocá los puntos del plano para ver las fotos de cada sector.
        </p>

        <div className="tabs">
          <button className={vista === 'casa' ? 'tab activa' : 'tab'} onClick={() => setVista('casa')}>
            Interior de la casa
          </button>
          <button className={vista === 'terreno' ? 'tab activa' : 'tab'} onClick={() => setVista('terreno')}>
            Terreno y galpón
          </button>
        </div>

        {vista === 'casa' ? (
          <MapaInteractivo Plano={PlanoCasa} puntos={ambientes} onSelect={setSeleccion} esSvg={false} />
        ) : (
          <MapaInteractivo Plano={PlanoTerreno} puntos={terreno} onSelect={setSeleccion} esSvg={true} />
        )}
        
      </section>

      {/* UBICACIÓN */}
      <section className="seccion ubicacion-seccion" id="ubicacion">
        <span className="seccion-eyebrow">Dónde está</span>
        <h2>Ubicación</h2>
        <p className="ayuda">A pocos minutos del centro de Lago Puelo.</p>

        <div className="mapa-embed">
          <iframe
            title="Mapa de la propiedad"
            src={`https://maps.google.com/maps?q=${ubicacionLinks.lat},${ubicacionLinks.lng}&z=16&output=embed`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="ubicacion-botones">
          <a href={ubicacionLinks.mapa} target="_blank" rel="noopener noreferrer" className="boton-ubi">
            <span className="boton-ubi-icono">📍</span>
            <span>
              <strong>Ver en Google Maps</strong>
              <small>Ubicación en la ciudad</small>
            </span>
          </a>
          <a href={ubicacionLinks.streetView} target="_blank" rel="noopener noreferrer" className="boton-ubi">
            <span className="boton-ubi-icono">🧭</span>
            <span>
              <strong>Ver en Street View</strong>
              <small>Recorré la calle</small>
            </span>
          </a>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="seccion videos-seccion" id="videos">
        <span className="seccion-eyebrow">En movimiento</span>
        <h2>Videos de recorrido</h2>
        <div className="videos-grid">
          {videos.map((v, i) => (
            <div className="video-card" key={i}>
              <h3>{v.titulo}</h3>
              {v.youtubeId ? (
                <div className="video-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="video-vacio" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS ORIGINALES */}
      <section className="seccion planos-seccion" id="planos">
        <span className="seccion-eyebrow">Documentación</span>
        <h2>Planos originales</h2>
        <p className="ayuda">Tocá un plano para verlo en grande.</p>
        {hayPlanos ? (
          <div className="planos-grid">
            {planosOriginales.filter((p) => p.imagen).map((p, i) => (
              <button className="plano-card" key={i} onClick={() => setPlanoAbierto(p)}>
                <img src={p.imagen} alt={p.titulo} />
                <span className="plano-card-titulo">{p.titulo}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="planos-vacio">
            <p>Los planos escaneados se muestran acá.</p>
            <span>Subí los archivos a <code>public/planos/</code> y agregalos en <code>src/data.js</code></span>
          </div>
        )}
      </section>

      {/* CONTACTO / PIE */}
      <footer className="pie" id="contacto">
        <div className="contacto">
          <h3>Contacto</h3>
          {contacto.nombre && <p className="contacto-nombre">{contacto.nombre}</p>}
          {contacto.whatsapp && (
            <>
              <a
                className="boton-wsp"
                href={`https://wa.me/${contacto.whatsapp}${contacto.mensaje ? `?text=${encodeURIComponent(contacto.mensaje)}` : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="wsp-icono" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.94.51 3.83 1.48 5.5L4.9 27.1l6.74-1.57a11 11 0 0 0 4.4.92h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.12 4 16.04 4zm0 20.2h-.01a9.15 9.15 0 0 1-4.66-1.28l-.33-.2-3.46.81.74-3.37-.22-.35a9.13 9.13 0 0 1-1.4-4.85c0-5.05 4.11-9.16 9.17-9.16 2.45 0 4.75.96 6.48 2.69a9.1 9.1 0 0 1 2.68 6.48c0 5.05-4.11 9.16-9.16 9.16zm5.03-6.86c-.27-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.36-.82-.73-1.36-1.63-1.52-1.9-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.66 1.12 2.85.14.18 1.93 2.95 4.68 4.14.65.28 1.17.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32z"/>
                </svg>
            
              </a>
            </>
          )}
          {contacto.email && <p>{contacto.email}</p>}
        </div>
        <p className="pie-loc">{propiedad.ubicacion}</p>
      </footer>

      {seleccion && <Visor ambiente={seleccion} onClose={() => setSeleccion(null)} />}
      {planoAbierto && <VisorImagen imagen={planoAbierto.imagen} titulo={planoAbierto.titulo} onClose={() => setPlanoAbierto(null)} />}
    </div>
  )
}
