import { Link } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Contact from './Contact'

function Home() {
  return (
    <>
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>iekShaw Turbo Services Pvt. Ltd.</h1>
          <p>
            Trusted engineering and IT partner delivering precise solutions across
            energy and enterprise—networking, cybersecurity, training, and more.
          </p>
          <div className="actions">
            <a href="/#services" className="btn btn--primary">Explore Services</a>
            <Link to="/contact" className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero__image" aria-hidden>
          <div className="glass"></div>
        </div>
      </div>
    </section>

      <div className="container section">
        <h2>Business Verticals</h2>
        <div className="grid three">
          <div className="card product">
            <h3>Turbo Services</h3>
            <p>Turbines, compressors, GTG, pumps fleet consulting across API & EG.</p>
          </div>
          <div className="card product">
            <h3>IT Services</h3>
            <p>Level‑1 technical support for networking, data centres, and corporates.</p>
          </div>
          <div className="card product">
            <h3>Training Academy</h3>
            <p>Professional & academic modules with online certification.</p>
          </div>
          <div className="card product">
            <h3>Commodity‑SCM</h3>
            <p>Global category management and low‑cost country sourcing.</p>
          </div>
          <div className="card product">
            <h3>Manufacturing</h3>
            <p>Indirect manufacturing: spare parts, auxiliaries, heat exchangers.</p>
          </div>
        </div>
      </div>

      <div className="container section">
        <h2>IT Services Snapshot</h2>
        <div className="features" style={{marginTop: '0'}}>
          <div className="feature"><h3>Cloud Services</h3></div>
          <div className="feature"><h3>Routing‑Switching</h3></div>
          <div className="feature"><h3>Cybersecurity</h3></div>
          <div className="feature"><h3>Data Centers</h3></div>
          <div className="feature"><h3>Desktop Support (3rd Party)</h3></div>
          <div className="feature"><h3>Field Work</h3></div>
          <div className="feature"><h3>Project Specific Work</h3></div>
          <div className="feature"><h3>Contract Work</h3></div>
        </div>
      </div>
      <div id="about"></div>
      <About />
      <div id="services"></div>
      <Services />
      <div id="contact"></div>
      <Contact />
    </>
  )
}

export default Home


