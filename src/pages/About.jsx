function About() {
  return (
    <section className="about">
      <div className="about__background">
        <div className="about__slide about__slide--1"></div>
        <div className="about__slide about__slide--2"></div>
        <div className="about__slide about__slide--3"></div>
      </div>
      <div className="section container about__content">
        <h1>About Us</h1>
        <div className="grid three">
          <div className="card product">
            <h3>Mission</h3>
            <p>
              Provide world‑class service solutions through experts and precise
              engineering. Enable environmentally responsible supply chains by
              integrating global suppliers.
            </p>
          </div>
          <div className="card product">
            <h3>Vision</h3>
            <p>
              Be the most trusted global partner in the energy sector, delivering
              engineering excellence and innovation that powers critical
              industries toward a sustainable future.
            </p>
          </div>
          <div className="card product">
            <h3>Values</h3>
            <ul className="list">
              <li>Speed</li>
              <li>Trust</li>
              <li>Simplicity & Be Real</li>
              <li>Team Ethics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


