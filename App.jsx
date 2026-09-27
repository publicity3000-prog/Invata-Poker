import { useState } from 'react';

const navItems = [
  { id: 'learn', label: 'Învățare' },
  { id: 'play', label: 'Joc la masă' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'mindset', label: 'Psihologie și protecție la joc' },
];

function App() {
  const [active, setActive] = useState('learn');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const activate = (id, message = '') => { setActive(id); setNotice(message); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => activate('learn')} aria-label="Înapoi la pagina principală"><span className="brand-mark">P</span><span>POKER<span className="brand-accent">LAB</span></span></button>
        <nav className="main-nav" aria-label="Navigație principală">
          {navItems.map((item) => <button key={item.id} className={active === item.id ? 'nav-link active' : 'nav-link'} onClick={() => activate(item.id)}>{item.label}</button>)}
        </nav>
        <div className="account-area"><span className="status-dot" /><span className="account-name">Salut, Pokeristule!</span><button className="account-button" aria-label="Deschide meniul contului">P</button></div>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">JOACĂ MAI CONȘTIENT</p><h1 id="hero-title">Joacă mai clar.<br /><span>Învață mai repede.</span></h1><p className="hero-text">Strategie practică, antrenament structurat și coaching pentru decizii mai bune la fiecare masă.</p><button className="primary-button" onClick={() => activate('learn', 'Ai intrat în zona de învățare.')}>Începe antrenamentul</button></div><div className="hero-art" role="img" aria-label="Jetoane și cărți de poker pe o masă întunecată" /></section>
        {notice && <div className="notice" role="status">{notice}</div>}
        <section className="destination-grid" aria-label="Direcții principale">
          <article className={active === 'learn' ? 'destination-card selected' : 'destination-card'}><div className="card-image learning-image" /><div className="card-content"><p className="card-kicker">STRUCTURĂ ȘI PRACTICĂ</p><h2>Învățare și antrenament</h2><p>Cursuri, lecții și exerciții practice pentru a-ți construi un joc solid.</p><button className="text-button" onClick={() => activate('learn', 'Zona de învățare este pregătită pentru tine.')}>Vezi conținutul</button></div></article>
          <article className={active === 'play' ? 'destination-card selected' : 'destination-card'}><div className="card-image table-image" /><div className="card-content"><p className="card-kicker">APLICĂ CE AI ÎNVĂȚAT</p><h2>Joc efectiv la masă</h2><p>Intră în joc, analizează-ți deciziile și crește prin experiență.</p><button className="text-button" onClick={() => activate('play', 'Ai intrat în zona de joc la masă.')}>Intră la masă</button></div></article>
          <article className={active === 'coaching' ? 'destination-card coaching-card selected' : 'destination-card coaching-card'}><div className="card-content"><p className="card-kicker">FEEDBACK PENTRU JOCUL TĂU</p><h2>Coaching personalizat</h2><p>Primește direcție clară și accelerează-ți progresul cu ajutorul unui coach.</p><div className="coaching-options"><button onClick={() => setBookingOpen(true)}><strong>În grup</strong><span>Discuții și analiză de mâini</span></button><button onClick={() => setBookingOpen(true)}><strong>Unu-la-unu</strong><span>Feedback adaptat jocului tău</span></button></div><button className="primary-button compact" onClick={() => setBookingOpen(true)}>Fă o programare</button></div></article>
        </section>
        <button className={active === 'mindset' ? 'mindset-banner active' : 'mindset-banner'} onClick={() => activate('mindset', 'Ai deschis resursele pentru psihologie și protecție la joc.')}><span className="banner-label">ECHILIBRU ȘI CONTROL</span><span className="banner-title">Psihologie și protecție la joc</span><span className="banner-copy">Construiește obiceiuri sănătoase, joacă responsabil și păstrează controlul asupra deciziilor tale.</span><span className="banner-action">Descoperă resursele</span></button>
      </main>
      {bookingOpen && <div className="modal-backdrop" onClick={() => setBookingOpen(false)}><section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={() => setBookingOpen(false)} aria-label="Închide">×</button><p className="eyebrow">URMĂTORUL PAS</p><h2 id="booking-title">Alege tipul de coaching</h2><p>Spune-ne ce ți se potrivește, iar noi revenim cu o propunere de programare.</p><div className="booking-actions"><button className="primary-button" onClick={() => { setBookingOpen(false); setNotice('Cererea pentru coaching în grup a fost notată.'); }}>Coaching în grup</button><button className="secondary-button" onClick={() => { setBookingOpen(false); setNotice('Cererea pentru coaching unu-la-unu a fost notată.'); }}>Coaching unu-la-unu</button></div></section></div>}
    </div>
  );
}

export { App };
