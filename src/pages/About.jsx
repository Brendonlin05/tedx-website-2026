export default function About() {
  return (
    <div style={{background: '#1F1E1E', minHeight: '100vh'}}>
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
        <div style={{
          position: 'relative',
          paddingTop: 'calc(99px + clamp(32px, 9.17vw, 132px))',
          paddingBottom: 'clamp(40px, 6.25vw, 90px)',
          paddingLeft: 'clamp(20px, 3.47vw, 50px)',
          paddingRight: 'clamp(20px, 3.47vw, 50px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          {/* Title */}
          <div style={{
            width: '100%',
            maxWidth: 885,
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
          }}>
            About
          </div>

          {/* Card */}
          <div className="about-card" style={{
            width: '100%',
            maxWidth: 885,
            background: '#272525',
            overflow: 'hidden',
            borderRadius: 20,
            position: 'relative',
            display: 'flex',
          }}>
            <div style={{position: 'absolute', inset: 0, borderRadius: 20, outline: '2px white solid', outlineOffset: '-2px', pointerEvents: 'none', zIndex: 2}} />

            {/* Image panel — order:2 on desktop, order:2 on mobile */}
            <div className="about-right" style={{overflow: 'hidden'}}>
              <img
                src={import.meta.env.BASE_URL + "Eunoia Poster.png"}
                alt="Eunoia"
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block'}}
              />
            </div>

            {/* Text panel — order:1 on desktop, order:1 on mobile */}
            <div className="about-left" style={{
              background: '#272525',
              padding: 'clamp(24px, 4vw, 44px) clamp(20px, 3.5vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <div className="about-body-text" style={{
                color: 'white',
                fontSize: 'clamp(10px, calc(8.43px + 0.491vw), 16px)',
                fontFamily: 'early-sans-variable',
                fontWeight: '400',
                wordWrap: 'break-word',
                lineHeight: 1.6,
              }}>
                The TEDxCMU Board is thrilled to introduce our theme for the 2026 conference: Eunoia.
                <br /><br />
                Eunoia is about beautiful thinking. It's the good will we cultivate when we share our ideas with one another.
                <br /><br />
                We invite you to join us as we share, ponder, and discuss the ideas and technologies that will shape our future.
              </div>
            </div>

            {/* Button row — order:3 on mobile, absolute on desktop */}
            <div className="about-btn-row">
              <a
                className="about-btn"
                href="https://www.tedxcmu.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 'clamp(80px, 14.44vw, 208px)',
                  height: 'clamp(28px, 4.03vw, 58px)',
                  borderRadius: 9999,
                  outline: '1px white solid',
                  outlineOffset: '-1px',
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: 'clamp(9px, 1.11vw, 16px)',
                  fontFamily: 'early-sans-variable',
                  fontWeight: '400',
                }}
              >
                TEDxCMU.ORG
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
