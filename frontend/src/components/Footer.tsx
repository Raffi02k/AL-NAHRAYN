import AppLink from "./AppLink";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true">
        <span>MASGOUF</span>
        <i>✦</i>
        <span>AL NAHRAYN</span>
        <i>✦</i>
        <span>ÖPPEN ELD</span>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong>AL NAHRAYN</strong>
          <span>أسماك النهرين</span>
          <p>Irakisk fisk, Masgouf och varm gästfrihet i Gunnilse.</p>
        </div>
        <div>
          <h3>Utforska</h3>
          <AppLink href="/meny">Menyn</AppLink>
          <AppLink href="/masgouf">Masgouf</AppLink>
          <AppLink href="/om-oss">Om oss</AppLink>
          <AppLink href="/galleri">Galleri</AppLink>
        </div>
        <div>
          <h3>Besök</h3>
          <p>
            Långavallsgatan 2B
            <br />
            Gunnilse, Göteborg
          </p>
          <p>
            Tis–sön
            <br />
            11:00–20:00
          </p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href="tel:+46722838405">072-283 84 05</a>
          <a href="https://www.instagram.com/alnahrayn_fisk/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <AppLink href="/kontakt">Vägbeskrivning</AppLink>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 ALNAHRAYN Fisk</span>
        <a
          className="footer-credit"
          href="https://mediamagnet-three.vercel.app"
          target="_blank"
          rel="noreferrer"
          aria-label="Byggd av MediaMagnet"
        >
          <span>Byggd av</span>
          <img src="/images/mediamagnet_logo_with_text_vit.png" alt="MediaMagnet" />
        </a>
        <span>Irakisk fiskrestaurang i Göteborg</span>
      </div>
    </footer>
  );
}
