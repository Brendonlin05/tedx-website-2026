export default function About() {
  return (
    <div style={{background: '#1F1E1E', minHeight: '100vh'}}>
      <section style={{marginTop: -99, position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden'}}>
        {/* Background — same as Speakers page */}
        <img
          src="/Static-Background 2.png"
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <img
          src="/Eunoia%20Poster%20Background.png"
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0}}
        />

        {/* Centered content */}
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
          {/* "About" title */}
          <div style={{
            width: 'clamp(300px, 61.46vw, 885px)',
            textBoxTrim: 'trim-both',
            textBoxEdge: 'cap alphabetic',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
          }}>
            About
          </div>

          {/* Card — width: 885/1440 = 61.46vw, aspect: 885/460 */}
          <div style={{
            width: 'clamp(300px, 61.46vw, 885px)',
            aspectRatio: '885 / 460',
            background: '#272525',
            overflow: 'hidden',
            borderRadius: 20,
            position: 'relative',
            display: 'flex',
          }}>
            <div style={{position: 'absolute', inset: 0, borderRadius: 20, outline: '2px white solid', outlineOffset: '-2px', pointerEvents: 'none', zIndex: 2}} />
            {/* Left blue panel — 540/885 = 61.02% */}
            <div style={{
              width: '61.02%',
              flexShrink: 0,
              position: 'relative',
              background: 'linear-gradient(90deg, #0036D8 35%, #9D9DF8 100%)',
            }}>
              {/* Description — left: 44/540 = 8.15%, top: 45/460 = 9.78% */}
              <div style={{
                position: 'absolute',
                left: '8.15%',
                top: '9.78%',
                right: '8.15%',
                textBoxTrim: 'trim-both',
                textBoxEdge: 'cap alphabetic',
                color: 'white',
                fontSize: 'clamp(12px, 1.11vw, 16px)',
                fontFamily: 'Early Sans Variable',
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

              {/* Button — top: 368/460 = 80% */}
              <a
                href="https://www.tedxcmu.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: '8.15%',
                  top: '80%',
                  width: 'clamp(120px, 14.44vw, 208px)',
                  height: 'clamp(36px, 4.03vw, 58px)',
                  borderRadius: 9999,
                  outline: '1px white solid',
                  outlineOffset: '-1px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: 'clamp(12px, 1.11vw, 16px)',
                  fontFamily: 'Early Sans Variable',
                  fontWeight: '400',
                }}
              >
                TEDxCMU.ORG
              </a>
            </div>

            {/* Right image panel — 345/885 = 38.98% */}
            <div style={{flex: 1, overflow: 'hidden'}}>
              <img
                src="/Eunoia%20Poster.png"
                alt="Eunoia"
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
