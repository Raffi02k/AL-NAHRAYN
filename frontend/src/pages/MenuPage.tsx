import { useEffect, useState } from "react";
import { menuSections } from "../content/siteContent";
import AppLink from "../components/AppLink";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuSections.some((s) => s.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    if (id !== "all") {
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const displayedSections =
    activeCategory === "all"
      ? menuSections
      : menuSections.filter((section) => section.id === activeCategory);

  return (
    <main>
      <section className="page-hero page-hero-menu">
        <div className="page-hero-bg"><img src="/images/menu-board-1.webp" alt="" /></div>
        <div className="page-hero-veil" />
        <div className="shell page-hero-copy"><p className="eyebrow">قائمة الطعام · Vår meny</p><h1>Fisk, eld &amp; generösa fat</h1><p>Välj grillat, friterat eller en mix att dela. Masgouf beställs gärna i förväg.</p></div>
      </section>

      <section className="section menu-page-section">
        <div className="shell menu-page-grid">
          <aside>
            <p className="eyebrow">Bra att veta</p>
            <h2>Så serveras fisken</h2>
            <p>Flera rätter serveras med ris eller pommes, sallad och grönsaker enligt menyn. Fråga gärna personalen vad som är färskt för dagen.</p>
            <p className="menu-note">Priserna är hämtade från restaurangens aktuella menytavla. Bekräfta gärna pris vid beställning.</p>
            <a className="button button-solid" href="tel:+46722838405">Ring &amp; beställ</a>
          </aside>
          <div>
            <nav className="menu-filter-bar" aria-label="Filtrera menyn">
              <button
                className={`menu-filter-btn ${activeCategory === "all" ? "is-active" : ""}`}
                type="button"
                onClick={() => handleCategorySelect("all")}
              >
                Alla rätter
              </button>
              {menuSections.map((section) => (
                <button
                  className={`menu-filter-btn ${activeCategory === section.id ? "is-active" : ""}`}
                  key={section.id}
                  type="button"
                  onClick={() => handleCategorySelect(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            {displayedSections.map((section) => (
              <article className="full-menu-block" id={section.id} key={section.id}>
                <p className="eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <div className="full-menu-list">
                  {section.items.map(([name, description, price, image]) => (
                    <div className="full-menu-row" key={`${name}-${description}`}>
                      {image && (
                        <div className="full-menu-thumb-wrap">
                          <img className="full-menu-thumb" src={image} alt={name} loading="lazy" decoding="async" />
                        </div>
                      )}
                      <div className="full-menu-info">
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                      <span className="full-menu-price">{price}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-board-section">
        <div className="shell section-heading centered"><p className="eyebrow">Menyöversikt</p><h2>Hela menyn på två tavlor</h2></div>
        <div className="shell menu-board-grid"><img src="/images/menu-board-1.webp" alt="ALNAHRAYN Fisks menytavla sida ett" loading="lazy" decoding="async" /><img src="/images/menu-board-2.webp" alt="ALNAHRAYN Fisks menytavla sida två" loading="lazy" decoding="async" /></div>
      </section>

      <section className="section callout"><div className="shell callout-inner"><div><p className="eyebrow">Iraks nationalrätt</p><h2>Nyfiken på Masgouf?</h2></div><AppLink className="button" href="/masgouf">Läs om tillagningen</AppLink></div></section>
    </main>
  );
}
