import React, { useEffect, useState, useRef } from "react";

/* ===== Dictionary สำหรับสลับภาษา (TH/EN) ===== */
const dict = {
  th: {
    brandA: "CHILL",
    brandB: "TOPUP",
    searchGroup: "ค้นหา",
    searchPlaceholder: "พิมพ์คำค้นหา…",
    langName: "ไทย",
    register: "ลงทะเบียน",
    signin: "เข้าสู่ระบบ",
    cart: "ตะกร้า",
    menu: {
      home: "หน้าหลัก",
      games: "เกม",
      promo: "โปรโมชั่น",
      articles: "บทความ",
      esports: "อีสปอร์ต",
      events: "กิจกรรม",
    },
  },
  en: {
    brandA: "CHILL",
    brandB: "TOPUP",
    searchGroup: "Search",
    searchPlaceholder: "Type to search...",
    langName: "English",
    register: "Register",
    signin: "Sign In",
    cart: "Cart",
    menu: {
      home: "Home",
      games: "Games",
      promo: "Promotions",
      articles: "Articles",
      esports: "Esports",
      events: "Events",
    },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);      // mobile menu
  const [scrolled, setScrolled] = useState(false);  // shadow on scroll
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [lang, setLang] = useState("th");           // ภาษา
  const [langOpen, setLangOpen] = useState(false);  // เปิด/ปิด dropdown ภาษา
  const langBtnRef = useRef(null);
  const t = dict[lang];

  // เงาเมื่อเลื่อน
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ปิด dropdown ภาษาเมื่อคลิกนอก
  useEffect(() => {
    function onClickOutside(e) {
      if (!langBtnRef.current) return;
      if (!langBtnRef.current.contains(e.target)) setLangOpen(false);
    }
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    console.log({ q: query, category, lang });
    // ภายหลังค่อย navigate("/search?q=" + encodeURIComponent(query))
  }

  // mock active page (ถ้าใช้ React Router ค่อยเปลี่ยนเป็น NavLink)
  const active = "home";

  return (
    <header className={`bg-black text-white sticky top-0 z-50 ${scrolled ? "shadow-md" : ""}`}>
      {/* ROW 1: Logo | Search | Lang/Cart/Auth */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center gap-4">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="font-extrabold tracking-wide text-xl">
              <span className="text-lime-400">{t.brandA}</span>
              <span>{t.brandB}</span>
            </span>
          </a>

          {/* SEARCH (desktop) */}
          <form onSubmit={handleSearch} role="search" className="hidden md:flex flex-1 items-center justify-center">
            <div className="w-full max-w-xl">
              <div className="flex items-stretch bg-zinc-800 rounded-md border border-zinc-700 overflow-hidden">
                {/* group dropdown */}
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="appearance-none bg-zinc-700/70 pl-3 pr-8 py-2 text-sm outline-none cursor-pointer"
                  >
                    <option value="all">{t.searchGroup}</option>
                    <option value="games">{t.menu.games}</option>
                    <option value="promo">{t.menu.promo}</option>
                    <option value="articles">{t.menu.articles}</option>
                  </select>
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-300">
                    ▾
                  </span>
                </div>
                {/* input */}
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                      <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full bg-zinc-800 text-sm text-white placeholder-zinc-400 pl-9 pr-3 py-2 outline-none"
                    autoComplete="off"
                    aria-label={t.searchGroup}
                  />
                </div>
              </div>
            </div>
          </form>

          {/* RIGHT (desktop): lang / cart / auth */}
          <div className="hidden md:flex items-center gap-5 ml-auto">
            {/* Language dropdown */}
            <div className="relative" ref={langBtnRef}>
              <button
                className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation(); // กันคลิกแล้วโดนปิดทันที
                  setLangOpen((v) => !v);
                }}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                {t.langName} ▾
              </button>

              {langOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-zinc-900 border border-zinc-700 rounded-md overflow-hidden z-50">
                  <li>
                    <button
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 ${lang === "th" ? "text-lime-400" : ""}`}
                      onClick={() => { setLang("th"); setLangOpen(false); }}
                    >
                      ไทย
                    </button>
                  </li>
                  <li>
                    <button
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 ${lang === "en" ? "text-lime-400" : ""}`}
                      onClick={() => { setLang("en"); setLangOpen(false); }}
                    >
                      English
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Cart */}
            <a href="/cart" className="inline-flex items-center hover:opacity-90" aria-label={t.cart} title={t.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1.5"></circle>
                <circle cx="19" cy="21" r="1.5"></circle>
                <path d="M1 1h3l2.6 12.5a2 2 0 0 0 2 1.5h9.2a2 2 0 0 0 2-1.6l1.1-6.9H6.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>

            {/* Auth */}
            <div className="flex items-center gap-3 text-sm">
              <a href="/register" className="hover:text-lime-400">{t.register}</a>
              <span className="text-lime-400">|</span>
              <a href="/signin" className="hover:text-lime-400">{t.signin}</a>
            </div>
          </div>

          {/* MOBILE: hamburger */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-zinc-800"
              aria-label="เมนู"
              aria-expanded={isOpen}
            >
              <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2: main nav (desktop) */}
      <div className="border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="hidden md:flex h-12 items-center gap-8">
            {[
              { key: "home", label: t.menu.home, href: "/" },
              { key: "games", label: t.menu.games, href: "/games" },
              { key: "promo", label: t.menu.promo, href: "/promotions" },
              { key: "articles", label: t.menu.articles, href: "/articles" },
              { key: "esports", label: t.menu.esports, href: "/esports" },
              { key: "events", label: t.menu.events, href: "/events" },
            ].map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`pb-2 transition ${
                  active === item.key
                    ? "text-white border-b-2 border-lime-400"
                    : "text-zinc-200 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* MOBILE MENU (search + lang + menu + auth) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[36rem]" : "max-h-0"
        } bg-black border-t border-zinc-900`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-3 space-y-3">
          {/* language (mobile) */}
          <div className="flex gap-2">
            <button
              className={`px-3 py-1.5 rounded-md border border-zinc-700 text-sm ${lang === "th" ? "border-lime-400 text-white" : "text-zinc-300"}`}
              onClick={() => setLang("th")}
            >
              ไทย
            </button>
            <button
              className={`px-3 py-1.5 rounded-md border border-zinc-700 text-sm ${lang === "en" ? "border-lime-400 text-white" : "text-zinc-300"}`}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>

          {/* search (mobile) */}
          <form onSubmit={handleSearch} role="search">
            <div className="flex items-stretch bg-zinc-800 rounded-md border border-zinc-700 overflow-hidden">
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-zinc-700/70 pl-3 pr-8 py-2 text-sm outline-none cursor-pointer"
                >
                  <option value="all">{t.searchGroup}</option>
                  <option value="games">{t.menu.games}</option>
                  <option value="promo">{t.menu.promo}</option>
                  <option value="articles">{t.menu.articles}</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-300">▾</span>
              </div>
              <div className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="7" strokeWidth="2"></circle>
                    <path d="M20 20l-3.5-3.5" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-zinc-800 text-sm text-white placeholder-zinc-400 pl-9 pr-3 py-2 outline-none"
                  autoComplete="off"
                  aria-label={t.searchGroup}
                />
              </div>
            </div>
          </form>

          {/* menu */}
          <nav className="grid grid-cols-2 gap-2">
            {[
              { key: "home", label: t.menu.home, href: "/" },
              { key: "games", label: t.menu.games, href: "/games" },
              { key: "promo", label: t.menu.promo, href: "/promotions" },
              { key: "articles", label: t.menu.articles, href: "/articles" },
              { key: "esports", label: t.menu.esports, href: "/esports" },
              { key: "events", label: t.menu.events, href: "/events" },
            ].map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm border border-zinc-800 hover:bg-zinc-900 ${
                  active === item.key ? "border-lime-400 text-white" : "text-zinc-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* auth + cart */}
          <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-sm">
            <a href="/register" className="hover:text-lime-400">{t.register}</a>
            <a href="/signin" className="hover:text-lime-400">{t.signin}</a>
            <a href="/cart" className="hover:text-lime-400">{t.cart}</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
