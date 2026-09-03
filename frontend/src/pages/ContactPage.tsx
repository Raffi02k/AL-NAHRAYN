export default function ContactPage() {
  return (
    <main>
      <section className="page-hero page-hero-contact"><div className="page-hero-bg"><img src="/images/open-fire.webp" alt="" /></div><div className="page-hero-veil" /><div className="shell page-hero-copy"><p className="eyebrow">تفضلوا · Välkommen</p><h1>Kom för elden.<br />Stanna för smaken.</h1><p>Ring gärna i förväg för Masgouf eller större sällskap.</p></div></section>
      <section className="section contact-section"><div className="shell contact-grid">
        <div>
          <p className="eyebrow">Besök oss</p><h2>ALNAHRAYN Fisk</h2>
          <div className="contact-list">
            <div><span>Adress</span><strong>Långavallsgatan 2B<br />Gunnilse, Göteborg</strong></div>
            <div><span>Telefon</span><a href="tel:+46722838405">072-283 84 05</a></div>
            <div><span>Öppettider</span><strong>Tisdag–söndag<br />11:00–20:00</strong></div>
            <div><span>Instagram</span><a href="https://www.instagram.com/alnahrayn_fisk/" target="_blank" rel="noreferrer">@alnahrayn_fisk</a></div>
          </div>
          <div className="button-row"><a className="button button-solid" href="tel:+46722838405">Ring nu</a><a className="button" href="https://www.google.com/maps/search/?api=1&query=Långavallsgatan+2B+Gunnilse" target="_blank" rel="noreferrer">Öppna karta</a></div>
        </div>
        <div className="map-frame"><iframe title="Karta till ALNAHRAYN Fisk" src="https://maps.google.com/maps?hl=sv&q=L%C3%A5ngavallsgatan%202B%20Gunnilse&t=k&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div></section>
      <section className="contact-photo"><img src="/images/chef-masgouf.webp" alt="Masgouf vid elden" loading="lazy" decoding="async" /><div><p className="eyebrow">Förbeställ Masgouf</p><h2>Eld tar tid.<br /><em>Det är värt väntan.</em></h2><a className="button button-solid" href="tel:+46722838405">072-283 84 05</a></div></section>
    </main>
  );
}
