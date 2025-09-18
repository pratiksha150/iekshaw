import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="brand">
          <img src="/logo.jpg" alt="iekShaw Turbo Services logo" className="brand__logo" />
          <span className="brand__name">iekShaw Turbo Services</span>
        </NavLink>
        <nav className="nav__links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


