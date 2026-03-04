import { useState } from 'react'

const speakers = [
  {
    name: 'Nia Sioux',
    description: 'Actress, Dancer, Content Creator, and New York Times Best Selling Author',
    bio: 'Nia Sioux, who first captured audiences on Dance Moms at age 9, has grown into a multi-hyphenate talent—performer, actress, author, and advocate with 15M+ followers. She starred in Lifetime\'s Imperfect High, produced Facebook Watch\'s Dance with Nia, partnered with AdCouncil on mental health, and graduated from UCLA. Alongside collabs with brands from Aerie to Starbucks, she recently released her second book, Bottom of the Pyramid (Harper Horizon, Nov. 4), a memoir of resilience and self-discovery, which instantly hit the New York Times Best Sellers List!',
    image: '/Nia%20Speaker%20Card.png',
    headshot: '/Nia_Headshot.png',
  },
  {
    name: 'Joel Byars',
    description: 'Comedian and Podcaster',
    bio: 'Joel Byars is an award-winning comedian and host of the Hot Breath! podcast, where he\'s interviewed over 400 comedians about the craft of comedy. He has dedicated over 16 years to both performing comedy and studying how humor can help people create real human connection in an increasingly disconnected world. Joel\'s research and clean comedy style have led to partnerships with inspiring organizations like the National Pediatric Cancer Foundation, bringing laughter where it\'s needed most.',
    image: '/Joel%20Speaker%20Card.png',
    headshot: '/Joel%20Headshot.png',
  },
  {
    name: 'Missi Matthews',
    description: 'Steelers Sideline Reporter',
    bio: 'Missi is an Emmy Award-Winning journalist who has covered the Pittsburgh Steelers since 2012. She joined WDVE-FM, as a sideline reporter in 2018. Missi grew up in Plum and attended the University of Pittsburgh. Outside of football, she is raising two sports-loving sons with her husband, Brad.',
    image: '/Missi%20Speaker%20Card.png',
    headshot: '/Missi%20Headshot.png',
  },
  {
    name: 'Jona Naqo',
    description: 'MS Candidate at Carnegie Mellon',
    bio: 'Jona is a CMU Swartz Entrepreneurial Fellow and MS candidate in the College of Engineering, where she studies how AI can be designed into products that solve real problems. Born in Greece and raised in Southern Albania, she earned her B.S. in Biochemistry from the University of the Pacific, where she secured an institutional research grant and founded a health education initiative serving underserved high schools in California\'s Central Valley. Now, she\'s focused on how AI can make healthcare work for everyone.',
    image: '/Jona%20Speaker%20Card.png',
    headshot: '/Jona%20Headshot.png',
  },
  {
    name: 'David Schott',
    description: 'Law Professor',
    bio: 'David Schott is a nationally esteemed law professor and CMU alumnus graduating with Dean\'s list honors. His legal career has endured since 1997, starting with opening his own law practice focusing on civil trial and domestic litigation and later serving as adjunct faculty at the University of Denver Sturm College of Law. Perhaps his greatest achievement is founding the Providence Foundation of Law & Leadership with a mission of providing scholarship funding to high school students who display an interest in the justice system.',
    image: '/David%20Speaker%20Card.png',
    headshot: '/David%20headshot.png',
  },
]

function SpeakerCard({ name, description, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{background: '#1F1E1E', overflow: 'hidden', borderRadius: 20, position: 'relative', cursor: 'pointer'}}
    >
      <div style={{position: 'absolute', inset: 0, borderRadius: 20, outline: 'max(1px, 0.07vw) white solid', outlineOffset: 'calc(-1 * max(1px, 0.07vw))', pointerEvents: 'none', zIndex: 2}} />
      <div style={{width: '100%', aspectRatio: '430 / 208', overflow: 'hidden'}}>
        <img
          src={image}
          alt={name}
          style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
      <div className="h-[110px] md:h-[151px]" style={{width: '100%', position: 'relative', background: '#1F1E1E', overflow: 'hidden'}}>
        <div style={{left: 23, top: 25, position: 'absolute', textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 32, fontFamily: 'PP Pangaia', fontWeight: '200', wordWrap: 'break-word'}}>{name}</div>
        <div style={{left: 23, top: 65, position: 'absolute', textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(12px, 1.25vw, 16px)', fontFamily: 'Early Sans Variable', fontWeight: '400', wordWrap: 'break-word'}}>{description}</div>
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
              src={speaker.headshot}
              alt={speaker.name}
              style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}
            />
          </div>
          <div style={{padding: '20px 20px 24px'}}>
            <div style={{color: 'white', fontSize: 26, fontFamily: 'PP Pangaia', fontWeight: '200', marginBottom: 12, wordWrap: 'break-word'}}>
              {speaker.name}
            </div>
            <div style={{color: 'white', fontSize: 13, fontFamily: 'Early Sans Variable', fontWeight: '400', wordWrap: 'break-word', lineHeight: 1.5}}>
              {speaker.bio}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block" style={{aspectRatio: '1009 / 611', position: 'relative'}}>
          {/* Right image */}
          <div style={{position: 'absolute', left: '52.63%', top: 0, right: 0, bottom: 0}}>
            <img
              src={speaker.headshot}
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
            fontFamily: 'Early Sans Variable',
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
          src="/Static-Background 2.png"
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <img
          src="/Eunoia%20Poster%20Background.png"
          alt=""
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0}}
        />
        <div style={{position: 'relative', paddingLeft: 'clamp(40px, 3.47vw, 50px)', paddingRight: 'clamp(40px, 3.47vw, 50px)', paddingTop: 'calc(99px + clamp(24px, 9vw, 130px))', paddingBottom: 'clamp(40px, 6.25vw, 90px)'}}>
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
