function Services() {
  const coreServices = [
    { t: 'Routing & Switching Excellence', d: 'Technical support for multi-vendor routers and switches.' },
    { t: 'Network Audits', d: 'Assess routing, switching and security; identify risks and improvements.' },
    { t: 'Incident Response Planning', d: 'Playbooks and services to respond and recover from cyber incidents.' },
    { t: 'AI‑Powered Threat Detection', d: 'Modern analytics that improve detection and reaction speed.' },
    { t: 'Cloud Security Tools', d: 'Controls and best practices for secure cloud workloads.' },
  ]

  const partnerFor = [
    'Increased Productivity: seamless collaboration, lower downtime',
    'Inspection / Network Auditing',
    'Ironclad Security: protect sensitive data and IP',
    'Training: CCNA, CCNP, Cybersecurity, Salesforce',
  ]

  const capability = [
    'Cisco – CCNA/CCNP',
    'Nokia FP Silicon',
    'Palo Alto Networks',
    'PTC Creo',
    'Salesforce',
    'Java 1.0/1.1/JDK24',
    'Python',
  ]

  const verticals = [
    { t: 'Turbo Services', d: 'Turbines, Compressors, GTG, Pumps, consulting across API & EG.' },
    { t: 'IT Services', d: 'L1 technical support for networking, data centers, corporates.' },
    { t: 'Training Academy', d: 'Professional & academic modules, online certification.' },
    { t: 'Commodity‑SCM', d: 'Category management, sourcing from low‑cost countries; Apparel/FMCG optional.' },
    { t: 'Manufacturing', d: 'Indirect manufacturing: spare parts, auxiliaries, heat exchangers.' },
  ]

  return (
    <section className="section container">
      <h1>Services</h1>

      <div className="grid two" style={{marginTop: '1rem'}}>
        <div>
          <h3>Core Offerings</h3>
          <ul className="list">
            {coreServices.map(s => (
              <li key={s.t}><strong>{s.t}</strong> — {s.d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Client’s Partner For</h3>
          <ul className="list">
            {partnerFor.map(p => (<li key={p}>{p}</li>))}
          </ul>
        </div>
      </div>

      <div className="section" style={{paddingTop: '1.5rem'}}>
        <h3>Product Capability</h3>
        <div className="grid three">
          {capability.map(item => (
            <div className="card product" key={item}><p>{item}</p></div>
          ))}
        </div>
      </div>

      <div className="section" id="services">
        <h2>Business Verticals</h2>
        <div className="grid two">
          {verticals.map(v => (
            <div className="card product" key={v.t}>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


