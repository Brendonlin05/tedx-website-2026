import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'SCHEDULE', path: '/schedule' },
  { name: 'SPEAKERS', path: '/speakers' },
  { name: 'INNOVATION EXPO', path: '/innovations-expo' },
  { name: 'ABOUT', path: '/about' },
  { name: 'OUR TEAM', path: '/team' },
]

const TICKET_URL = 'https://tartanconnect.cmu.edu/tedxcmu/rsvp_boot?id=1935342'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backdropFilter: 'blur(6.8px)' }}>
      <div
        className="w-full flex items-center justify-between px-6 lg:px-[50px]"
        style={{
          height: 99,
          background: 'linear-gradient(90deg, #272525 50%, #0036D8 100%)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={import.meta.env.BASE_URL + "black-tedx-logo 1.webp"}
            alt="TEDxCMU"
            className="object-contain w-[90px] h-[36px] lg:w-[135px] lg:h-[55px]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-[18px]">
          {navLinks.map((link, i) => (
            <>
              {i > 0 && (
                <span key={`sep-${i}`} style={{ color: 'white', opacity: 0.5, fontWeight: 400 }}>//</span>
              )}
              <Link
                key={link.path}
                to={link.path}
                className="text-center text-sm lg:text-base whitespace-nowrap transition-colors duration-200"
                style={{ color: location.pathname === link.path ? '#52A5FF' : 'white', fontWeight: 400 }}
              >
                {link.name}
              </Link>
            </>
          ))}
        </div>

        {/* Purchase Tickets Button */}
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center shrink-0 text-white text-sm lg:text-xl whitespace-nowrap transition-colors duration-200 hover:bg-white/10 px-5 lg:px-0 lg:w-[214px] h-[46px] rounded-full"
          style={{
            border: '1px solid white',
            fontWeight: 400,
          }}
        >
          Purchase Tickets
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-8 pb-6 pt-4 space-y-4"
          style={{ background: 'linear-gradient(90deg, #272525 50%, #0036D8 100%)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg transition-colors ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-white text-lg mt-4 rounded-full"
            style={{
              padding: '10px 0',
              border: '1px solid white',
            }}
          >
            Purchase Tickets
          </a>
        </div>
      )}
    </nav>
  )
}
