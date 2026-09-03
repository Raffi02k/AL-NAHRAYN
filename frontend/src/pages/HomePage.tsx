import { featuredDishes, menuCategories } from "../content/siteContent";
import AppLink from "../components/AppLink";

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/chef-masgouf.webp"
          aria-hidden="true"
        >
          <source src="/media/hero-grill-demo.mp4" type="video/mp4" />
        </video>
        <div className="hero-veil" />
        <div className="hero-content">
          <div className="hero-heading">
            <p className="eyebrow">أسماك النهرين · Gunnilse, Göteborg</p>
            <h1 id="hero-title">Irakisk fisk över öppen eld</h1>
            <p className="hero-script">AL NAHRAYN</p>
          </div>
          <div className="hero-side">
            <p>
              Masgouf, färsk fisk och generösa smaker tillagat långsamt med eld, rök och irakisk gästfrihet.
            </p>
            <div className="button-row">
              <AppLink className="button button-solid" href="/meny">
                Se menyn
              </AppLink>
              <a className="button" href="tel:+46722838405">
                Ring &amp; beställ
              </a>
            </div>
            <span className="hero-note">Färsk fisk · Familjevänligt · Takeaway</span>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Upptäck</span>
          <i />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Masgouf</span><b>✦</b><span>Öppen eld</span><b>✦</b><span>Färsk fisk</span><b>✦</b><span>Irakisk gästfrihet</span><b>✦</b>
          <span>Masgouf</span><b>✦</b><span>Öppen eld</span><b>✦</b><span>Färsk fisk</span><b>✦</b><span>Irakisk gästfrihet</span><b>✦</b>
        </div>
      </div>

      <section className="section story-section">
        <div className="shell story-grid">
          <figure className="image-frame story-image">
            <img src="/images/chef-masgouf.webp" alt="Masgouf förbereds vid elden" loading="lazy" decoding="async" />
            <figcaption>Öppen eld · På plats i Gunnilse</figcaption>
          </figure>
          <div className="story-copy">
            <p className="eyebrow">Vår specialitet</p>
            <h2>
              Från Mesopotamien till <em>Göteborg.</em>
            </h2>
            <p className="lead">
              ALNAHRAYN är en irakisk fiskrestaurang byggd kring en av Iraks mest älskade mattraditioner: Masgouf.
            </p>
            <p>
              Fisken öppnas, kryddas och får tillagas långsamt intill den öppna elden. Resultatet är saftigt, rökigt och gjort för att delas vid bordet.
            </p>
            <div className="stat-row">
              <div><strong>01</strong><span>Öppen eld</span></div>
              <div><strong>02</strong><span>Färsk fisk</span></div>
              <div><strong>03</strong><span>Irakisk tradition</span></div>
            </div>
            <AppLink className="button" href="/masgouf">
              Läs om Masgouf
            </AppLink>
          </div>
        </div>
      </section>

      <section className="section category-section">
        <div className="shell section-heading">
          <p className="eyebrow">Utforska menyn</p>
          <h2>Från grillen till bordet</h2>
        </div>
        <div className="category-grid shell">
          {menuCategories.map((category) => (
            <AppLink className="category-card" href={`/meny#${category.id}`} key={category.id}>
              <img src={category.image} alt="" loading="lazy" decoding="async" />
              <div><span>{category.arabic}</span><h3>{category.title}</h3><p>Se rätterna →</p></div>
            </AppLink>
          ))}
        </div>
      </section>

      <section className="masgouf-feature">
        <img src="/images/05_grillad_karp_masgouf.png" alt="Masgouf serverad som hel grillad karp" loading="lazy" decoding="async" />
        <div className="masgouf-overlay" />
        <div className="shell masgouf-feature-copy">
          <p className="eyebrow">01 — Iraks nationalrätt</p>
          <h2><em>Masgouf</em></h2>
          <p>Hel karp som grillas långsamt intill lågorna tills ytan får djup färg och smaken av vedeldad värme.</p>
          <span className="price">180 kr/kg</span>
          <AppLink className="button button-solid" href="/masgouf">Upptäck traditionen</AppLink>
        </div>
      </section>

      <section className="section menu-teaser">
        <div className="shell">
          <div className="menu-head">
            <div><p className="eyebrow">Smaker från menyn</p><h2>Välj din favorit</h2></div>
            <p>För muspekaren över en rätt för att se den. Priser anges i SEK.</p>
          </div>
          <div className="dish-list">
            {featuredDishes.map((dish, index) => (
              <div className="dish-row" key={dish.name}>
                <span className="dish-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="dish-name">{dish.name}<i>{dish.arabic}</i></span>
                <span className="dish-dots" />
                <span className="dish-price">{dish.price}</span>
                <img className="dish-peek" src={dish.image} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
          <div className="center"><AppLink className="button" href="/meny">Utforska hela menyn</AppLink></div>
        </div>
      </section>

      <section className="experience-section">
        <div className="shell experience-head">
          <div><p className="eyebrow">Upplevelsen</p><h2>En irakisk fiskeld <em>i Göteborg.</em></h2></div>
          <AppLink className="text-link" href="/galleri">Se galleriet →</AppLink>
        </div>
        <div className="experience-rail" aria-hidden="true">
          {[
            "/images/open-fire.webp",
            "/images/fish-plate.webp",
            "/images/chef-masgouf.webp",
            "/images/masgouf-fire.webp",
            "/images/open-fire.webp",
            "/images/fish-plate.webp",
          ].map((src, index) => (
            <figure key={`${src}-${index}`}><img src={src} alt="" loading="lazy" decoding="async" /></figure>
          ))}
        </div>
      </section>

      <section className="section visit-section">
        <div className="shell visit-grid">
          <div>
            <p className="eyebrow">Välkommen till Gunnilse</p>
            <h2>Kom hungrig. Lämna som familj.</h2>
            <p className="lead">Ring gärna i förväg om du vill beställa Masgouf – den långsamma tillagningen är en del av upplevelsen.</p>
            <div className="visit-details">
              <div><span>Adress</span><strong>Långavallsgatan 2B, Gunnilse</strong></div>
              <div><span>Öppettider</span><strong>Tis–sön 11:00–20:00</strong></div>
              <div><span>Telefon</span><a href="tel:+46722838405">072-283 84 05</a></div>
            </div>
            <div className="button-row">
              <a className="button button-solid" href="tel:+46722838405">Ring restaurangen</a>
              <AppLink className="button" href="/kontakt">Hitta hit</AppLink>
            </div>
          </div>
          <figure className="image-frame visit-image"><img src="/images/restaurant-menu.webp" alt="ALNAHRAYN Fisks meny i restaurangen" loading="lazy" decoding="async" /><figcaption>Äkta irakisk känsla · Gunnilse</figcaption></figure>
        </div>
      </section>
    </main>
  );
}
