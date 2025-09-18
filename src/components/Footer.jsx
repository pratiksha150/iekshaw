function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt="iekShaw logo" className="footer__logo" />
          <span className="footer__name">iekShaw Turbo Services</span>
        </div>
        <p>© {new Date().getFullYear()} iekShaw Turbo Services. All rights reserved.</p>
        <p className="muted">Building secure, scalable IT solutions.</p>
      </div>
    </footer>
  )
}

export default Footer


