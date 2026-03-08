import { useState } from 'react'

const base = import.meta.env.BASE_URL

const expoItems = [
  {
    name: 'Interactive Particles Installation',
    description: 'An interactive particle system using computer vision to track user hand movements. Pick the options that best fit your personality and discover your scotty!',
    image: base + 'Inno Expo Cover.png',
    video: base + 'Particles video.mp4',
  },
]

function ExpoCard({ name, description, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{background: '#272525', overflow: 'hidden', borderRadius: 'clamp(14px, 1.68vw, 24px)', position: 'relative', cursor: 'pointer'}}
    >
      {/* Border overlay */}
      <div style={{position: 'absolute', inset: 0, borderRadius: 'inherit', outline: 'max(1px, 0.17vw) white solid', outlineOffset: 'calc(-1 * max(1px, 0.17vw))', pointerEvents: 'none', zIndex: 2}} />

      {/* Image — 16:9 */}
      <div style={{width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background: '#3A3A3A'}}>
        {image && (
          <img src={image} alt={name} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
        )}
      </div>

      {/* Info section */}
      <div className="expo-card-info" style={{background: '#272525', padding: 'clamp(20px, 2.8vw, 42px) clamp(16px, 2.1vw, 30px)', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 28px)'}}>
        <div className="expo-card-name" style={{
          textBoxTrim: 'trim-both',
          textBoxEdge: 'cap alphabetic',
          color: 'white',
          fontFamily: 'PP Pangaia',
          fontWeight: '200',
          lineHeight: 1.1,
          wordWrap: 'break-word',
        }}>
          {name}
        </div>
        <div className="expo-card-description" style={{
          textBoxTrim: 'trim-both',
          textBoxEdge: 'cap alphabetic',
          color: 'white',
          fontSize: 14,
          fontFamily: "'Noto Sans Display', 'Noto Sans', Arial, sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: 1.5,
        }}>
          {description}
        </div>
      </div>
    </div>
  )
}

function ExpoModal({ item, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 40px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-[95vw] md:w-[72vw] md:max-w-[770px]"
        style={{
          position: 'relative',
          background: '#1F1E1E',
          overflow: 'hidden',
          borderRadius: 'clamp(16px, 3.04vw, 34px)',
        }}
      >
        {/* Video on top, text below — same on all screen sizes */}
        <div style={{width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000'}}>
          <video
            src={item.video}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div style={{padding: 'clamp(16px, 2vw, 28px)'}}>
          <div className="expo-modal-title" style={{color: 'white', fontSize: 'clamp(35px, 2.5vw, 25px)', fontFamily: 'PP Pangaia', fontWeight: '200', marginBottom: 'clamp(8px, 1vw, 14px)', wordWrap: 'break-word', lineHeight: 1.0}}>
            {item.name}
          </div>
          <div style={{color: 'white', fontSize: 'clamp(13px, 1.1vw, 16px)', fontFamily: 'Noto Sans Display', fontWeight: '400', fontStyle: 'normal', wordWrap: 'break-word', lineHeight: 1.5}}>
            {item.description}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{position: 'absolute', top: '3%', right: '1.5%', background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 8, zIndex: 11}}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function InnovationsExpo() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{background: '#1F1E1E', minHeight: '100vh'}}>
      {selected && <ExpoModal item={selected} onClose={() => setSelected(null)} />}
      <section style={{marginTop: -99, position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden'}}>
        {/* Background */}
        <img
          src={import.meta.env.BASE_URL + "Static-Background 2.png"}
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <img
          src={import.meta.env.BASE_URL + "Eunoia Poster Background.png"}
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0}}
        />

        {/* Content */}
        <div className="inno-inner" style={{
          position: 'relative',
          paddingLeft: 'clamp(60px, 6vw, 90px)',
          paddingRight: 'clamp(60px, 6vw, 90px)',
          paddingTop: 'calc(99px + clamp(12px, 4.5vw, 65px))',
          paddingBottom: 'clamp(40px, 6.25vw, 90px)',
        }}>
          <div className="flex flex-wrap justify-center" style={{gap: 'clamp(16px, 1.74vw, 25px)'}}>
            {/* Title — same column width as a card so left edges align */}
            <div className="w-full sm:w-[calc(50%-8px)]" style={{marginBottom: 'clamp(4px, 1vw, 12px)'}}>
              <div style={{
                textBoxTrim: 'trim-both',
                textBoxEdge: 'cap alphabetic',
                color: 'white',
                fontSize: 'clamp(32px, 3.56vw, 52px)',
                fontFamily: 'PP Pangaia',
                fontWeight: '200',
                lineHeight: 1.1,
              }}>
                Innovation Expo
              </div>
            </div>
            {/* Row break — pushes cards below the title */}
            <div style={{flexBasis: '100%', height: 0}} />
            {expoItems.map((item, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-8px)]">
                <ExpoCard {...item} onClick={() => setSelected(item)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
