import { useState } from 'react'

const base = import.meta.env.BASE_URL

const speakers = [
  {
    name: 'Missi Matthews',
    description: 'Steelers Sideline Reporter',
    bio: 'Missi is an Emmy Award-Winning journalist who has covered the Pittsburgh Steelers since 2012. She joined WDVE-FM, as a sideline reporter in 2018. Missi grew up in Plum and attended the University of Pittsburgh. Outside of football, she is raising two sports-loving sons with her husband, Brad.',
    image: base + 'Missi Speaker Card.webp?v=2',
    headshot: base + 'Missi Headshot.webp?v=2',
    gradient: 'linear-gradient(90deg, #272525 0%, #0036D8 100%)',
    hoverGradient: 'linear-gradient(90deg, #0036D8 0%, #9D9DF8 100%)',
    textColor: 'white',
  },
  {
    name: 'Jona Naqo',
    description: 'MS Candidate at Carnegie Mellon',
    bio: 'Jona is a CMU Swartz Entrepreneurial Fellow and MS candidate in the College of Engineering, where she studies how AI can be designed into products that solve real problems. Born in Greece and raised in Southern Albania, she earned her B.S. in Biochemistry from the University of the Pacific, where she secured an institutional research grant and founded a health education initiative serving underserved high schools in California\'s Central Valley. Now, she\'s focused on how AI can make healthcare work for everyone.',
    image: base + 'Jona Speaker Card.webp?v=2',
    headshot: base + 'Jona Headshot.webp?v=2',
    gradient: 'linear-gradient(90deg, #0036D8 0%, #9D9DF8 100%)',
    hoverGradient: 'linear-gradient(90deg, #9D9DF8 0%, #F888EB 100%)',
    textColor: 'white',
  },
  {
    name: 'David Schott',
    description: 'Law Professor',
    bio: 'David Schott is a nationally esteemed law professor and CMU alumnus graduating with Dean\'s list honors. His legal career has endured since 1997, starting with opening his own law practice focusing on civil trial and domestic litigation and later serving as adjunct faculty at the University of Denver Sturm College of Law. Perhaps his greatest achievement is founding the Providence Foundation of Law & Leadership with a mission of providing scholarship funding to high school students who display an interest in the justice system.',
    image: base + 'David Speaker Card.webp?v=2',
    headshot: base + 'David headshot.webp?v=2',
    gradient: 'linear-gradient(90deg, #9D9DF8 0%, #F888EB 100%)',
    hoverGradient: 'linear-gradient(90deg, #F888EB 0%, #CD082E 100%)',
    textColor: 'white',
  },
  {
    name: 'Nia Sioux',
    description: 'Actress, Dancer, Content Creator, and New York Times Best Selling Author',
    bio: 'Nia Sioux, who first captured audiences on Dance Moms at age 9, has grown into a multi-hyphenate talent—performer, actress, author, and advocate with 15M+ followers. She starred in Lifetime\'s Imperfect High, produced Facebook Watch\'s Dance with Nia, partnered with AdCouncil on mental health, and graduated from UCLA. Alongside collabs with brands from Aerie to Starbucks, she recently released her second book, Bottom of the Pyramid (Harper Horizon, Nov. 4), a memoir of resilience and self-discovery, which instantly hit the New York Times Best Sellers List!',
    image: base + 'Nia Speaker Card.webp',
    headshot: base + 'Nia_Headshot.webp?v=4',
    gradient: 'linear-gradient(90deg, #F888EB 0%, #CD082E 100%)',
    hoverGradient: 'linear-gradient(90deg, #CD082E 0%, #272525 100%)',
    textColor: 'white',
  },
  {
    name: 'Joel Byars',
    description: 'Comedian and Podcaster',
    bio: 'Joel Byars is an award-winning comedian and host of the Hot Breath! podcast, where he\'s interviewed over 400 comedians about the craft of comedy. He has dedicated over 16 years to both performing comedy and studying how humor can help people create real human connection in an increasingly disconnected world. Joel\'s research and clean comedy style have led to partnerships with inspiring organizations like the National Pediatric Cancer Foundation, bringing laughter where it\'s needed most.',
    image: base + 'Joel Speaker Card.webp',
    headshot: base + 'Joel Headshot.webp?v=2',
    gradient: 'linear-gradient(90deg, #CD082E 0%, #272525 100%)',
    hoverGradient: 'linear-gradient(90deg, #272525 0%, #0036D8 100%)',
    textColor: 'white',
  },
]

function SpeakerCard({ name, description, headshot, gradient, hoverGradient, textColor, onClick }) {
  return (
    <div
      onClick={onClick}
      className="speaker-card-new"
      style={{
        '--hover-gradient': hoverGradient,
        width: '100%',
        background: '#272525',
        overflow: 'hidden',
        borderRadius: '4.65%',
        position: 'relative',
        cursor: 'pointer',
        aspectRatio: '1624 / 1681',
      }}
    >
      {/* White outline overlay */}
      <div style={{position: 'absolute', inset: 0, borderRadius: '4.65%', outline: 'max(1px, 0.13vw) white solid', outlineOffset: 'calc(-1 * max(1px, 0.13vw))', pointerEvents: 'none', zIndex: 10}} />

      {/* Full-card headshot */}
      <img
        src={headshot}
        alt={name}
        style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}}
      />

      {/* Gradient text section — bottom 31.24% of card, overlays the photo */}
      <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '31.24%', background: gradient, overflow: 'hidden'}}>
        <div className="card-gradient-hover" />
        <div className="sc-name" style={{
          position: 'absolute',
          left: '5.81%',
          top: '17.99%',
          right: '5.81%',
          color: textColor,
          fontFamily: 'PP Pangaia',
          fontWeight: '200',
          wordWrap: 'break-word',
        }}>{name}</div>
        <div className="sc-desc" style={{
          position: 'absolute',
          left: '5.81%',
          top: '51.80%',
          right: '5.81%',
          color: textColor,
          fontFamily: 'Noto Sans Display, Noto Sans, Arial, sans-serif',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}>{description}</div>
      </div>
    </div>
  )
}

// Figma card: 1009 × 611px
// Image: left 531, width 478, height 611 → starts at 52.63% of card width
// Name: left 42, top 109, width 441, fontSize 54.55
// Bio: left 42, top 278, width 382, fontSize 27.28
// Border radius: 34.09px, outline: 3.41px
function SpeakerModal({ speaker, onClose }) {
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
        {/* Mobile layout */}
        <div className="md:hidden">
          <div style={{width: '100%', aspectRatio: '4/3', overflow: 'hidden'}}>
            <img
              src={speaker.image}
              alt={speaker.name}
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
            />
          </div>
          <div style={{padding: '20px 20px 24px'}}>
            <div style={{color: 'white', fontSize: 26, fontFamily: 'PP Pangaia', fontWeight: '200', marginBottom: 12, wordWrap: 'break-word'}}>
              {speaker.name}
            </div>
            <div style={{color: 'white', fontSize: 13, fontFamily: 'early-sans-variable', fontWeight: '400', wordWrap: 'break-word', lineHeight: 1.5}}>
              {speaker.bio}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block" style={{aspectRatio: '1009 / 611', position: 'relative'}}>
          {/* Right image */}
          <div style={{position: 'absolute', left: '52.63%', top: 0, right: 0, bottom: 0}}>
            <img
              src={speaker.image}
              alt={speaker.name}
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
            />
          </div>

          {/* Name */}
          <div style={{
            position: 'absolute',
            left: '4.16%',
            top: '17.84%',
            width: '43.71%',
            textBoxTrim: 'trim-both',
            textBoxEdge: 'cap alphabetic',
            color: 'white',
            fontSize: 'min(4.2vw, 48px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
            wordWrap: 'break-word',
          }}>
            {speaker.name}
          </div>

          {/* Bio */}
          <div style={{
            position: 'absolute',
            left: '4.16%',
            top: '38%',
            width: '40%',
            textBoxTrim: 'trim-both',
            textBoxEdge: 'cap alphabetic',
            color: 'white',
            fontSize: 'min(1.1vw, 13px)',
            fontFamily: 'early-sans-variable',
            fontWeight: '400',
            wordWrap: 'break-word',
            lineHeight: 1.5,
          }}>
            {speaker.bio}
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

export default function Speakers() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{background: '#1F1E1E', minHeight: '100vh'}}>
      {selected && <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />}
      <section style={{marginTop: -99, position: 'relative', width: '100%', overflow: 'hidden'}}>
        <img
          src={import.meta.env.BASE_URL + "Static-Background 2.webp"}
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <img
          src={import.meta.env.BASE_URL + "Eunoia Poster Background.webp"}
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0}}
        />
        <div className="speakers-inner" style={{position: 'relative', paddingLeft: 'clamp(60px, 6vw, 90px)', paddingRight: 'clamp(60px, 6vw, 90px)', paddingTop: 'calc(99px + clamp(24px, 9vw, 130px))', paddingBottom: 'clamp(40px, 6.25vw, 90px)'}}>
          <div style={{textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(32px, 3.56vw, 56px)', fontFamily: 'PP Pangaia', fontWeight: '200', wordWrap: 'break-word', marginBottom: 'clamp(28px, 5.97vw, 86px)'}}>Speakers</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{gap: 'clamp(16px, 1.74vw, 25px)'}}>
            {speakers.map((speaker, i) => (
              <SpeakerCard key={i} {...speaker} onClick={() => setSelected(speaker)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
