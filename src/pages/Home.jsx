import { useEffect, useRef } from 'react'

export default function Home() {
  const teaserRef = useRef(null)
  const teaserVideoRef = useRef(null)

  useEffect(() => {
    const section = teaserRef.current
    const video = teaserVideoRef.current
    if (!section || !video) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
      if (video.duration) {
        video.currentTime = progress * video.duration
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Landing Section */}
      <section
        style={{
          marginTop: -99,
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/eunoia-background.mp4" type="video/mp4" />
        </video>

        {/* Figma overlay elements */}
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {/* Centered wordmark */}
          <img
            src="/Eunoia wordmark.png"
            alt="Eunoia"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '60%',
            }}
          />

          {/* Bottom-right event info */}
          <div className="event-info-container flex flex-col gap-[12px] md:flex-row md:gap-[4.17vw]" style={{ right: '5.28%', top: '89.75%', position: 'absolute', alignItems: 'flex-start' }}>
            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Early Sans Variable', fontWeight: '400', wordWrap: 'break-word' }}>TEDxCMU: EUNOIA</div>
            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Early Sans Variable', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', flexShrink: 0 }}>MARCH 14, 4:00 PM<br />UC MCCONOMY</div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div style={{ background: '#0036D8', overflow: 'hidden', paddingTop: '1.94vw', paddingBottom: '1.94vw' }}>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: 'marquee 22.2s linear infinite',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'baseline', paddingRight: '3.33vw' }}>
              <span style={{ color: 'white', fontSize: '3.46vw', fontFamily: 'Early Sans Variable', fontWeight: '400', textTransform: 'uppercase' }}>ideas&nbsp;</span>
              <span style={{ color: 'white', fontSize: '3.27vw', fontFamily: 'PP Pangaia', fontWeight: '200', textTransform: 'uppercase' }}>LIVE BETWEEN&nbsp;</span>
              <span style={{ color: 'white', fontSize: '3.46vw', fontFamily: 'Early Sans Variable', fontWeight: '400', textTransform: 'uppercase' }}>PEOPLE.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll-driven Teaser Video */}
      <section ref={teaserRef} style={{ position: 'relative', height: '250vh' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          <video
            ref={teaserVideoRef}
            muted
            playsInline
            preload="auto"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/eunoiateaser-sped.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer
        className="footer-section"
        style={{
          width: '100%',
          position: 'relative',
          background: 'linear-gradient(180deg, #22273B 15%, #CD082E 100%)',
          overflow: 'hidden',
          height: '32vw',
        }}
      >
        {/* Heading — left: 50, top: 61 in Figma → 3.47vw, 4.24vw */}
        <div className="footer-heading" style={{ left: '3.47vw', top: '4.24vw', position: 'absolute' }}>
          <span style={{ color: 'white', fontSize: '3.56vw', fontFamily: 'Early Sans Variable', fontWeight: '400', lineHeight: '3.56vw', wordWrap: 'break-word', display: 'block' }}>WELCOME</span>
          <span style={{ color: 'white', fontSize: '3.56vw', fontFamily: 'PP Pangaia', fontWeight: '200', lineHeight: '3.56vw', wordWrap: 'break-word', display: 'block' }}>TO EUNOIA</span>
        </div>

        {/* Body text — absolute left: 504 (50+454), top: 61, width: 430 in Figma */}
        <div className="footer-body" style={{ left: '35vw', top: '4.24vw', width: '29.86vw', position: 'absolute' }}>
          <p style={{ color: 'white', fontSize: 20, fontFamily: 'Early Sans Variable', fontWeight: '400', lineHeight: '24px', margin: 0 }}>
            The TEDxCMU Board is thrilled to introduce our theme for the 2026 conference: Eunoia.
            <br /><br />
            Eunoia is about beautiful thinking. It's the good will we cultivate when we share our ideas with one another.
            <br /><br />
            We invite you to join us as we share, ponder, and discuss the ideas and technologies that will shape our future.
          </p>
        </div>
      </footer>
    </div>
  )
}
