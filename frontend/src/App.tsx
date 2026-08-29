import React from "react";
import Layout from "./components/Layout";
import PageMeta from "./components/PageMeta";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MasgoufPage from "./pages/MasgoufPage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import { RouterContext } from "./router";

type Route = {
  title: string;
  description: string;
  element: React.ReactNode;
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getPathname() {
  return normalizePath(window.location.pathname);
}

function getRoute(pathname: string): Route {
  switch (pathname) {
    case "/":
      return {
        title: "ALNAHRAYN Fisk | Irakisk Masgouf i Göteborg",
        description:
          "Irakisk fiskrestaurang i Gunnilse med Masgouf, grillad fisk och skaldjur över öppen eld.",
        element: <HomePage />,
      };
    case "/meny":
      return {
        title: "Meny | ALNAHRAYN Fisk",
        description:
          "Se ALNAHRAYN Fisks meny med Masgouf, grillad fisk, friterad fisk, räkor och seafoodmix.",
        element: <MenuPage />,
      };
    case "/masgouf":
      return {
        title: "Masgouf | ALNAHRAYN Fisk",
        description:
          "Upptäck Masgouf – irakisk karp som grillas långsamt över öppen eld hos ALNAHRAYN Fisk i Gunnilse.",
        element: <MasgoufPage />,
      };
    case "/galleri":
      return {
        title: "Galleri | ALNAHRAYN Fisk",
        description: "Se maten, elden och känslan hos ALNAHRAYN Fisk i Gunnilse.",
        element: <GalleryPage />,
      };
    case "/om-oss":
      return {
        title: "Om oss | ALNAHRAYN Fisk",
        description:
          "Lär känna ALNAHRAYN Fisk – irakisk fisktradition, Masgouf och gästfrihet i Gunnilse.",
        element: <AboutPage />,
      };
    case "/kontakt":
      return {
        title: "Kontakt & hitta hit | ALNAHRAYN Fisk",
        description:
          "Hitta ALNAHRAYN Fisk på Långavallsgatan 2B i Gunnilse. Ring restaurangen eller öppna vägbeskrivning.",
        element: <ContactPage />,
      };
    default:
      return {
        title: "Sidan hittades inte | ALNAHRAYN Fisk",
        description: "Sidan du letar efter finns inte.",
        element: <NotFoundPage />,
      };
  }
}

export default function App() {
  const [pathname, setPathname] = React.useState(getPathname);

  React.useEffect(() => {
    const handlePopState = () => setPathname(getPathname());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    const url = new URL(to, window.location.origin);
    const nextPathname = normalizePath(url.pathname);
    const nextUrl = `${nextPathname}${url.search}${url.hash}`;

    if (`${window.location.pathname}${window.location.search}${window.location.hash}` === nextUrl) {
      if (url.hash) {
        const element = document.getElementById(url.hash.slice(1));
        element?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return;
    }

    if (options?.replace) {
      window.history.replaceState(null, "", nextUrl);
    } else {
      window.history.pushState(null, "", nextUrl);
    }

    setPathname(nextPathname);

    if (url.hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(url.hash.slice(1));
        element?.scrollIntoView();
      });
    }
  };

  const route = getRoute(pathname);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      <PageMeta description={route.description} title={route.title} />
      <ScrollToTop pathname={pathname} />
      <Layout>
        <div key={pathname} className="page-transition">
          {route.element}
        </div>
      </Layout>
    </RouterContext.Provider>
  );
}
