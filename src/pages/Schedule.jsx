const base = import.meta.env.BASE_URL

const scheduleItems = [
  {
    type: 'simple',
    time: '4:00pm-4:30pm',
    title: 'Check-In Begins',
  },
  {
    type: 'simple',
    time: '4:30pm-4:40pm',
    title: 'Introduction',
  },
  {
  type: 'talk',
  time: '4:40pm-5:00pm',
  title: 'Is Reality TV Really Ethical? Through the Lens of a Childhood Reality TV Star.',
  speaker: {
    name: 'Nia Sioux',
    description: 'Actress, Dancer, Content Creator, and New York Times Best Selling Author',
    avatar: base + 'Nia_Headshot.png',
  },
  description: 'Is reality tv ethical? This talk will explore the ethics of reality tv through the lens of a former childhood reality tv star with a focus on the importance of media literacy skills and its application. The intersectionality of reality tv in the news, pop culture, social media, and politics makes this a relevant topic in today\'s ever-changing world. As an educated society, who is ultimately responsible for the consumption of media and what role do they play in the narratives that are told?',
  icon: base + 'icon 1.png',
},
{
  type: 'talk',
  time: '5:00pm-5:20pm',
  title: 'Helping People Laugh Daily',
  speaker: {
    name: 'Joel Byars',
    description: 'Comedian and Podcaster',
    avatar: base + 'Joel Headshot.png',
  },
  description: 'Talk description goes here.',
  icon: base + 'icon 2.png',
},
  {
    type: 'simple',
    time: '5:20pm-6:00pm',
    title: 'Intermission, Innovation Expo',
  },
  {
    type: 'talk',
    time: '6:00pm-6:20pm',
    title: 'Spoken from the Sidelines: On Sports Reporting & Motherhood',
    speaker: {
      name: 'Missi Matthews',
      description: 'Steelers Sideline Reporter',
      avatar: base + 'Missi Headshot.png',
    },
    description: 'Sports are a defining part of Pittsburgh culture. Growing up an athlete and currently working as a reporter for the Pittsburgh Steelers, Missi Matthews now sees her childhood and profession intersecting with how she speaks to her young boys. What does it mean to shape our communities, from the lessons we pass along to our children to fueling the fire of a 92-year-old fandom, and how do we consider the impact of our words in inspiring the generations that follow us? Just months away from the Pittsburgh-based NFL Draft, Missi reflects on the true life lessons found in talking about sports for a living.',
    icon: base + 'icon 5.png',
  },
  {
    type: 'talk',
    time: '6:20pm-6:40pm',
    title: 'Title of Talk',
    speaker: {
      name: 'Jona Naqo',
      description: 'MS Candidate at Carnegie Mellon',
      avatar: base + 'Jona Headshot.png',
    },
    description: 'Talk description goes here.',
    icon: base + 'icon 4.png',
  },
  {
    type: 'talk',
    time: '6:40pm-7:00pm',
    title: 'Title of Talk',
    speaker: {
      name: 'David Schott',
      description: 'Law Professor',
      avatar: base + 'David headshot.png',
    },
    description: 'Talk description goes here.',
    icon: base + 'icon 5.png',
  },
  {
    type: 'simple',
    time: '7:00pm-7:10pm',
    title: 'Closing',
  },
]

// px → vw reference (÷ 1440):
//   40 → 2.78vw  |  23 → 1.60vw  |  28 → 1.94vw  |  34 → 2.36vw  |  31 → 2.15vw
//  434 → 30.14vw |  436 → 30.28vw | 433 → 30.07vw
//   51.2 → 3.56vw | 24 → 1.67vw | 16 → 1.11vw
//  229 → 15.90vw | 51 → 3.54vw | 166 → 11.53vw | 39 → 2.71vw | 63 → 4.38vw

function SimpleCard({ title }) {
  return (
    <div style={{width: '100%', padding: '2.92vw 2.78vw', background: 'linear-gradient(90deg, #282626 30%, #0036D8 70%, #F888EB 100%)', borderRadius: 20, outline: '0.14vw white solid', outlineOffset: '-0.14vw', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
      <span style={{color: 'white', fontSize: '3.56vw', fontFamily: 'PP Pangaia', fontWeight: '200', wordWrap: 'break-word'}}>
        {title}
      </span>
    </div>
  )
}

function TalkCard({ title, speaker, description, icon }) {
  return (
    <div style={{width: '100%', position: 'relative', background: 'linear-gradient(90deg, #272525 50%, #0036D8 100%)', overflow: 'hidden', borderRadius: 20, outline: '0.14vw white solid', outlineOffset: '-0.14vw'}}>
      {/* Rotated decorative vector — desktop only */}
      <div className="hidden md:block" style={{width: '100%', height: '100%', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '0.14vw white solid', outlineOffset: '-0.07vw'}} />
      {/* Vertical separator — desktop only */}
      <div className="hidden md:block" style={{position: 'absolute', top: 0, bottom: 0, right: '30.14vw', width: '0.14vw', background: 'white'}} />

      {/* Icon in right panel — desktop only */}
      {icon && (
        <div className="hidden md:flex" style={{position: 'absolute', top: 0, bottom: 0, right: 0, width: '30.14vw', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none'}}>
          <img src={icon} alt="" style={{width: '55%', height: '70%', objectFit: 'contain'}} />
        </div>
      )}

      {/* Title */}
      <div
        className="pr-4 md:pr-[calc(30.14vw+0.14vw+2.78vw)]"
        style={{paddingTop: 'max(16px, 2.78vw)', paddingLeft: 'max(16px, 2.78vw)', paddingBottom: 'max(16px, 2.78vw)'}}
      >
        <div style={{textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(20px, 3.56vw, 51px)', fontFamily: 'PP Pangaia', fontWeight: '200', wordWrap: 'break-word', lineHeight: 1.25}}>{title}</div>
      </div>

      {/* Horizontal separator */}
      <div className="mr-0 md:mr-[30.28vw]" style={{height: '0.14vw', background: 'white'}} />

      {/* Speaker */}
      <div
        className="pr-4 md:pr-[calc(30.14vw+0.14vw+2.78vw)]"
        style={{paddingTop: 'max(12px, 2vw)', paddingLeft: 'max(16px, 2.78vw)'}}
      >
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 'max(8px, 0.84vw)'}}>
          {speaker.avatar ? (
            <img src={speaker.avatar} alt={speaker.name} style={{width: 'clamp(28px, 3.54vw, 51px)', height: 'clamp(28px, 3.54vw, 51px)', borderRadius: 9999, objectFit: 'cover', flexShrink: 0}} />
          ) : (
            <div style={{width: 'clamp(28px, 3.54vw, 51px)', height: 'clamp(28px, 3.54vw, 51px)', background: '#D9D9D9', borderRadius: 9999, flexShrink: 0}} />
          )}
          <div>
            <div style={{textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(14px, 1.67vw, 24px)', fontFamily: 'early-sans-variable', fontWeight: '400', wordWrap: 'break-word'}}>{speaker.name}</div>
            <div style={{marginTop: 'max(6px, 0.9vw)', textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(11px, 1.11vw, 16px)', fontFamily: 'early-sans-variable', fontWeight: '400', wordWrap: 'break-word'}}>{speaker.description}</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div
        className="talk-description mr-4 md:mr-0 md:max-w-[35vw]"
        style={{marginTop: 'max(12px, 2.5vw)', marginLeft: 'max(16px, 2.78vw)', paddingBottom: 'max(16px, 2.5vw)', textBoxTrim: 'trim-both', textBoxEdge: 'cap alphabetic', color: 'white', fontSize: 'clamp(11px, 1.11vw, 16px)', fontFamily: 'early-sans-variable', fontWeight: '400', wordWrap: 'break-word'}}
      >{description}</div>
    </div>
  )
}

export default function Schedule() {
  return (
    <div style={{background: '#272525', minHeight: '100vh', paddingTop: 'max(24px, 6.25vw)', paddingBottom: 'max(24px, 6.25vw)'}}>
      <div style={{paddingLeft: 'max(16px, 3.47vw)', paddingRight: 'max(16px, 3.47vw)', display: 'flex', flexDirection: 'column', gap: 'max(20px, 5.63vw)'}}>
        {scheduleItems.map((item, i) => (
          <div key={i}>
            <div style={{color: 'white', fontSize: 'clamp(12px, 1.11vw, 16px)', fontFamily: 'early-sans-variable', fontWeight: '400', marginBottom: 'max(8px, 1.53vw)'}}>
              {item.time}
            </div>
            {item.type === 'simple' ? (
              <SimpleCard title={item.title} />
            ) : (
              <TalkCard title={item.title} speaker={item.speaker} description={item.description} icon={item.icon} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
