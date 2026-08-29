import AppLink from "../components/AppLink";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero-about"><div className="page-hero-bg"><img src="/images/chef-masgouf.webp" alt="" /></div><div className="page-hero-veil" /><div className="shell page-hero-copy"><p className="eyebrow">قصتنا · Vår berättelse</p><h1>En smak av Irak i Gunnilse</h1><p>Färsk fisk, traditionell eld och ett bord där alla ska känna sig välkomna.</p></div></section>

      <section className="section"><div className="shell about-intro"><p className="eyebrow">ALNAHRAYN Fisk</p><h2>Här står fisken, elden och gästen i centrum.</h2><div className="about-columns"><p>Restaurangen är specialiserad på färska fisk- och skaldjursrätter med särskilt fokus på Masgouf – den irakiska metoden där fisken grillas långsamt vid öppen eld.</p><p>Det är mat för familjer och vänner. Generösa fat, tydliga smaker och en varm atmosfär som bär med sig känslan av irakisk gästfrihet.</p></div></div></section>

      <section className="split-banner"><figure><img src="/images/fish-plate.webp" alt="Grillad fisk serverad med tillbehör" loading="lazy" decoding="async" /></figure><div><p className="eyebrow">Vår filosofi</p><h2>Enkel råvara. Stor smak.</h2><p>Välj din fisk och hur den ska tillagas. Resten handlar om tid, temperatur och hantverket runt grillen.</p><ul className="principle-list"><li><span>01</span>Färsk fisk och skaldjur</li><li><span>02</span>Traditionell tillagning</li><li><span>03</span>Mat byggd för att delas</li></ul><AppLink className="button" href="/meny">Se menyn</AppLink></div></section>

      <section className="section quote-section"><div className="shell"><p className="arabic-quote">أهلاً وسهلاً</p><blockquote>“Välkommen in till ett bord där elden får ta tid och gästen alltid står i centrum.”</blockquote><AppLink className="button button-solid" href="/kontakt">Planera ditt besök</AppLink></div></section>
    </main>
  );
}
