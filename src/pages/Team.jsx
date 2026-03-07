const prMembers = [
  { name: 'Waiz Mansoor', position: 'Head of PR', photo: '/pr/WAIZ MANSOOR.jpg' },
  { name: 'Charvi Hoysal', position: 'PR', photo: '/pr/CHARVI HOYSAL.jpg' },
  { name: 'James Lee', position: 'PR', photo: '/pr/JAMES LEE.jpg' },
  { name: 'Jodie Yang', position: 'PR', photo: '/pr/Jodie Yang.jpg' },
  { name: 'Juhee Park', position: 'PR', photo: '/pr/JUHEE PARK.jpg' },
  { name: 'Vivian Nam', position: 'PR', photo: '/pr/Vivian Nam.jpg' },
]

const salonMembers = [
  { name: 'Mo Fahad', position: 'Head of Salon', photo: '/salon/Mo Fahad.jpg' },
  { name: 'Abby Chong', position: 'Salon', photo: '/salon/Abby Chong.jpg' },
  { name: 'Andrew Xue', position: 'Salon', photo: '/salon/Andrew Xue.jpg' },
  { name: 'Anna Abello', position: 'Salon', photo: '/salon/Anna Abello.jpg' },
  { name: 'Lauren Cho', position: 'Salon', photo: '/salon/Lauren Cho.jpg' },
  { name: 'Milen Tesfaye', position: 'Salon', photo: '/salon/Milen_Tesfaye.jpg' },
  { name: 'Sally Chen', position: 'Salon', photo: '/salon/Sally Chen.jpg' },
]

const logisticsMembers = [
  { name: 'Luna Lee', position: 'Head of Logistics', photo: '/logistics/Luna Lee.jpg' },
  { name: 'Angel Yu', position: 'Logistics', photo: '/logistics/Angel Yu.jpg' },
  { name: 'Archita Jain', position: 'Logistics', photo: '/logistics/Archita Jain.jpg' },
  { name: 'Gregory Surjadi', position: 'Logistics', photo: '/logistics/Gregory Surjadi.jpg' },
  { name: 'Helen Fu', position: 'Logistics', photo: '/logistics/Helen Fu.jpg' },
]

const innovationMembers = [
  { name: 'Roshni Ramesh', position: 'Head of Innovation', photo: '/inno/ROSHNI RAMESH.jpg' },
  { name: 'Abhay Kadambi', position: 'Innovation', photo: '/inno/ABHAY KADAMBI.jpg' },
  { name: 'Brendon Lin', position: 'Innovation', photo: '/inno/Brendon Lin.jpg' },
  { name: 'Vincent Lo', position: 'Innovation', photo: '/inno/VINCENT LO.jpg' },
]

const designMembers = [
  { name: 'Melissa Qin', position: 'Head of Design', photo: '/design/Melissa Qin.jpg' },
  { name: 'Chori Jun', position: 'Design', photo: '/design/Chori Jun.jpg' },
  { name: 'Garrett Lee', position: 'Design', photo: '/design/Garrett Lee.jpg' },
  { name: 'Jackie Ryu', position: 'Design', photo: '/design/Jackie Ryu.jpg' },
  { name: 'Stacy Chen', position: 'Design', photo: '/design/Stacy Chen.jpg' },
  { name: 'Swetha Joseph', position: 'Design', photo: '/design/Swetha Joseph.jpg' },
]

const curationMembers = [
  { name: 'Eesha Palasamudrum', position: 'Head of Speaker Curation', photo: '/curation/Eesha Palasamudrum.jpg' },
  { name: 'Eu-Rway Chew', position: 'Speaker Curation', photo: '/curation/Eu-RwayChew.jpg' },
  { name: 'Madelyn Streisfeld', position: 'Speaker Curation', photo: '/curation/Madelyn Streisfeld.jpg' },
  { name: 'Reagan Appel', position: 'Speaker Curation', photo: '/curation/Reagan Appel.jpg' },
  { name: 'Sara Chokshi', position: 'Speaker Curation', photo: '/curation/SARA CHOKSHI.jpg' },
  { name: 'Tara Prahlad', position: 'Speaker Curation', photo: '/curation/Tara Prahlad.jpg' },
]

const leadershipMembers = [
  { name: 'Stephanie Lu', position: 'Co President', photo: '/pres/Stephanie Lu.jpg' },
  { name: 'Aaron HuSun', position: 'Co President', photo: '/pres/Aaron HuSun.jpg' },
  { name: 'Bill Chang', position: 'VP', photo: '/pres/Bill Chang.jpg' },
]

function MemberCard({ name, position, photo }) {
  return (
    <div style={{
      width: '100%',
      paddingBottom: '95%',
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
