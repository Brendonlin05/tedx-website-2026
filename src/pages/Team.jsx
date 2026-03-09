const base = import.meta.env.BASE_URL

const prMembers = [
  { name: 'Waiz Mansoor', position: 'Head of PR', photo: base + 'pr/WAIZ MANSOOR.webp' },
  { name: 'Charvi Hoysal', position: 'PR', photo: base + 'pr/CHARVI HOYSAL.webp' },
  { name: 'James Lee', position: 'PR', photo: base + 'pr/JAMES LEE.webp' },
  { name: 'Jodie Yang', position: 'PR', photo: base + 'pr/Jodie Yang.webp' },
  { name: 'Juhee Park', position: 'PR', photo: base + 'pr/JUHEE PARK.webp' },
  { name: 'Vivian Nam', position: 'PR', photo: base + 'pr/Vivian Nam.webp' },
]

const salonMembers = [
  { name: 'Mo Fahad', position: 'Head of Salon', photo: base + 'salon/Mo Fahad.webp' },
  { name: 'Abby Chong', position: 'Salon', photo: base + 'salon/Abby Chong.webp' },
  { name: 'Andrew Xue', position: 'Salon', photo: base + 'salon/Andrew Xue.webp' },
  { name: 'Anna Abello', position: 'Salon', photo: base + 'salon/Anna Abello.webp' },
  { name: 'Lauren Cho', position: 'Salon', photo: base + 'salon/Lauren Cho.webp' },
  { name: 'Milen Tesfaye', position: 'Salon', photo: base + 'salon/Milen_Tesfaye.webp' },
  { name: 'Sally Chen', position: 'Salon', photo: base + 'salon/Sally Chen.webp' },
]

const logisticsMembers = [
  { name: 'Luna Lee', position: 'Head of Logistics', photo: base + 'logistics/Luna Lee.webp' },
  { name: 'Angel Yu', position: 'Logistics', photo: base + 'logistics/Angel Yu.webp' },
  { name: 'Archita Jain', position: 'Logistics', photo: base + 'logistics/Archita Jain.webp' },
  { name: 'Gregory Surjadi', position: 'Logistics', photo: base + 'logistics/Gregory Surjadi.webp' },
  { name: 'Helen Fu', position: 'Logistics', photo: base + 'logistics/Helen Fu.webp' },
]

const innovationMembers = [
  { name: 'Roshni Ramesh', position: 'Head of Innovation', photo: base + 'inno/ROSHNI RAMESH.webp' },
  { name: 'Abhay Kadambi', position: 'Innovation', photo: base + 'inno/ABHAY KADAMBI.webp' },
  { name: 'Brendon Lin', position: 'Innovation', photo: base + 'inno/Brendon Lin.webp' },
  { name: 'Vincent Lo', position: 'Innovation', photo: base + 'inno/VINCENT LO.webp' },
]

const designMembers = [
  { name: 'Melissa Qin', position: 'Head of Design', photo: base + 'design/Melissa Qin.webp' },
  { name: 'Chori Jun', position: 'Design', photo: base + 'design/Chori Jun.webp' },
  { name: 'Garrett Lee', position: 'Design', photo: base + 'design/Garrett Lee.webp' },
  { name: 'Jackie Ryu', position: 'Design', photo: base + 'design/Jackie Ryu.webp' },
  { name: 'Stacy Chen', position: 'Design', photo: base + 'design/Stacy Chen.webp' },
  { name: 'Swetha Joseph', position: 'Design', photo: base + 'design/Swetha Joseph.webp' },
]

const curationMembers = [
  { name: 'Eesha Palasamudrum', position: 'Head of Speaker Curation', photo: base + 'curation/Eesha Palasamudrum.webp' },
  { name: 'Eu-Rway Chew', position: 'Speaker Curation', photo: base + 'curation/Eu-RwayChew.webp' },
  { name: 'Madelyn Streisfeld', position: 'Speaker Curation', photo: base + 'curation/Madelyn Streisfeld.webp' },
  { name: 'Reagan Appel', position: 'Speaker Curation', photo: base + 'curation/Reagan Appel.webp' },
  { name: 'Sara Chokshi', position: 'Speaker Curation', photo: base + 'curation/SARA CHOKSHI.webp' },
  { name: 'Tara Prahlad', position: 'Speaker Curation', photo: base + 'curation/Tara Prahlad.webp' },
]

const leadershipMembers = [
  { name: 'Stephanie Lu', position: 'Co President', photo: base + 'pres/Stephanie Lu.webp' },
  { name: 'Aaron HuSun', position: 'Co President', photo: base + 'pres/Aaron HuSun.webp' },
  { name: 'Bill Chang', position: 'VP', photo: base + 'pres/Bill Chang.webp' },
]

function MemberCard({ name, position, photo }) {
  return (
    <div style={{
      width: '100%',
      paddingBottom: '100%',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 20,
    }}>
      {/* Border overlay */}
      <div style={{position: 'absolute', inset: 0, borderRadius: 20, outline: 'max(1px, 0.07vw) white solid', outlineOffset: 'calc(-1 * max(1px, 0.07vw))', pointerEvents: 'none', zIndex: 3}} />

      {/* Photo */}
      {photo && (
        <img src={photo} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      )}

      {/* Text overlay at bottom */}
      <div className="member-card-textbox" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(90deg, #272525 50%, #0036D8 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(12px, 2vw, 28px)',
        paddingBottom: 'clamp(12px, 2vw, 28px)',
        zIndex: 2,
      }}>
        <div className="member-card-name">{name}</div>
        <div className="member-card-position">{position}</div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div style={{ background: '#272525', minHeight: '100vh', paddingTop: 'max(24px, 6.25vw)', paddingBottom: 'max(24px, 6.25vw)' }}>
      <div className="team-page-inner" style={{
          paddingLeft: 'clamp(60px, 8vw, 140px)',
          paddingRight: 'clamp(60px, 8vw, 140px)',
        }}>
          {/* Title */}
          <div style={{
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Leadership
          </div>

          {/* Leadership cards grid */}
          <div className="team-grid">
            {leadershipMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* Speaker Curation title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Speaker Curation
          </div>

          {/* Speaker Curation cards grid */}
          <div className="team-grid">
            {curationMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* Design title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Design
          </div>

          {/* Design cards grid */}
          <div className="team-grid">
            {designMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* Innovation title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Innovation
          </div>

          {/* Innovation cards grid */}
          <div className="team-grid">
            {innovationMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* Logistics title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Logistics
          </div>

          {/* Logistics cards grid */}
          <div className="team-grid">
            {logisticsMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* Salon title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            Salon
          </div>

          {/* Salon cards grid */}
          <div className="team-grid">
            {salonMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>

          {/* PR title */}
          <div style={{
            marginTop: 'clamp(40px, 5vw, 80px)',
            marginBottom: 'clamp(20px, 2.43vw, 35px)',
            color: 'white',
            fontSize: 'clamp(32px, 3.56vw, 52px)',
            fontFamily: 'PP Pangaia',
            fontWeight: '200',
          }}>
            PR
          </div>

          {/* PR cards grid */}
          <div className="team-grid">
            {prMembers.map((member, i) => (
              <MemberCard key={i} {...member} />
            ))}
          </div>
        </div>
    </div>
  )
}
