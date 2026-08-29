import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "ALNAHRAYN Fisk",
  alternateName: "أسماك النهرين",
  servesCuisine: ["Iraqi", "Seafood", "Middle Eastern"],
  telephone: "+46722838405",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Långavallsgatan 2B",
    addressLocality: "Gunnilse",
    addressRegion: "Västra Götaland",
    addressCountry: "SE",
  },
  priceRange: "$$",
};

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Hoppa till innehållet
      </a>
      <Header />
      <div id="main-content">{children}</div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
    </>
  );
}
