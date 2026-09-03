export default function MasgoufPage() {
  return (
    <main>
      <section className="detail-hero detail-hero-masgouf">
        <img src="/images/05_grillad_karp_masgouf.png" alt="Masgouf serverad som hel grillad karp" />
        <div className="page-hero-veil" />
        <div className="shell detail-hero-copy"><p className="eyebrow">مسكوف عراقي · Öppen eld</p><h1>Masgouf</h1><p>Iraks nationalrätt – en långsam ritual av fisk, glöd och tålamod.</p></div>
      </section>

      <section className="section">
        <div className="shell editorial-grid">
          <div className="editorial-number">01</div>
          <div><p className="eyebrow">Traditionen</p><h2>Mer än en maträtt</h2><p className="lead">Masgouf är en del av Iraks kulinariska identitet och en rätt som samlar människor runt elden.</p><p>Karpen öppnas längs ryggen, läggs ut i ett stort halster och placeras intill lågorna. Den indirekta värmen låter fisken tillagas långsamt utan att torka ut.</p></div>
          <figure className="image-frame"><img src="/images/open-fire.webp" alt="Öppen eld vid grillning" loading="lazy" decoding="async" /><figcaption>Eld · Rök · Tålamod</figcaption></figure>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell section-heading"><p className="eyebrow">Så går det till</p><h2>Fyra steg till Masgouf</h2></div>
        <div className="shell process-grid">
          <article><span>01</span><h3>Fisken</h3><p>En hel karp förbereds och öppnas så att den kan möta värmen jämnt.</p></article>
          <article><span>02</span><h3>Kryddningen</h3><p>Smaker av bland annat tomat, syra, olja och vitlök får möta fisken.</p></article>
          <article><span>03</span><h3>Elden</h3><p>Fisken grillas långsamt intill öppen eld och får sin rökiga karaktär.</p></article>
          <article><span>04</span><h3>Bordet</h3><p>Serveras generöst med tillbehör och delas gärna av hela sällskapet.</p></article>
        </div>
      </section>

      <section className="section order-banner">
        <div className="shell order-banner-grid"><div><p className="eyebrow">Beställ i förväg</p><h2>Ge elden den tid den behöver.</h2><p>Ring gärna innan besöket så kan restaurangen planera den långsamma tillagningen.</p></div><div><span>Pris enligt meny</span><strong>180 kr/kg</strong><a className="button button-solid" href="tel:+46722838405">Ring 072-283 84 05</a></div></div>
      </section>
    </main>
  );
}
