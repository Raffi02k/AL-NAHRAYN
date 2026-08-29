import { gallery } from "../content/siteContent";

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero page-hero-gallery"><div className="page-hero-bg"><img src="/images/chef-masgouf.webp" alt="" /></div><div className="page-hero-veil" /><div className="shell page-hero-copy"><p className="eyebrow">المعرض · Galleri</p><h1>Eld, fisk &amp; hantverk</h1><p>En glimt av maten, grillen och känslan kring bordet.</p></div></section>
      <section className="section gallery-page"><div className="shell gallery-grid">{gallery.map(([src, alt], index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={src}><img src={src} alt={alt} loading="lazy" decoding="async" /><figcaption>{String(index + 1).padStart(2, "0")} — {alt}</figcaption></figure>)}</div></section>
      <section className="section callout"><div className="shell callout-inner"><div><p className="eyebrow">Smaka själv</p><h2>Välkommen till Gunnilse.</h2></div><a className="button" href="tel:+46722838405">Ring restaurangen</a></div></section>
    </main>
  );
}
