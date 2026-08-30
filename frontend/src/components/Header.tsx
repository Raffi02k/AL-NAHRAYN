"use client";

import { useEffect, useState } from "react";
import { useRouter } from "../router";
import AppLink from "./AppLink";

const links = [
  ["Om oss", "/om-oss"],
  ["Meny", "/meny"],
  ["Masgouf", "/masgouf"],
  ["Galleri", "/galleri"],
  ["Hitta hit", "/kontakt"],
];

export default function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mjuk stängning som väntar ut CSS-animationen
  const closeMenu = () => {
    if (!open || isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 280);
  };

  const handleBrandClick = () => {
    closeMenu();
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
      <div className="header-shell">
        <nav className="desktop-nav nav-left" aria-label="Primär navigation">
          {links.slice(0, 3).map(([label, href]) => (
            <AppLink className={pathname === href ? "active" : ""} href={href} key={href}>
              {label}
            </AppLink>
          ))}
        </nav>
        <AppLink className="brand" href="/" ariaLabel="ALNAHRAYN Fisk startsida" onClick={handleBrandClick}>
          <span className="brand-name">AL NAHRAYN</span>
          <span className="brand-ar">أسماك النهرين</span>
        </AppLink>
        <nav className="desktop-nav nav-right" aria-label="Sekundär navigation">
          {links.slice(3).map(([label, href]) => (
            <AppLink className={pathname === href ? "active" : ""} href={href} key={href}>
              {label}
            </AppLink>
          ))}
          <a className="header-button" href="tel:+46722838405">
            Ring oss
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Öppna meny"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div
          className={`mobile-overlay ${isClosing ? "is-closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobilmeny"
        >
          <button className="mobile-close" type="button" onClick={closeMenu}>
            Stäng ×
          </button>
          <nav>
            <AppLink href="/" onClick={closeMenu}>
              Start <small>01</small>
            </AppLink>
            {links.map(([label, href], index) => (
              <AppLink href={href} key={href} onClick={closeMenu}>
                {label} <small>0{index + 2}</small>
              </AppLink>
            ))}
          </nav>
          <div className="mobile-meta">
            <span>Gunnilse · Göteborg</span>
            <a href="tel:+46722838405">072-283 84 05</a>
          </div>
        </div>
      )}
    </header>
  );
}