import Link from "next/link";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/awards", label: "Awards" },
  { href: "/article", label: "Articles" },
];

const network = [
  { href: "https://www.squareyards.com", label: "Square Yards" },
  { href: "https://book.squareyards.com/", label: "Book Property Online" },
  { href: "https://en.wikipedia.org/wiki/Square_Yards", label: "Square Yards Wiki" },
];

export default function Footer() {
  return (
    <footer className="border-t border-champagne/50 bg-cream/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-ink">Kanika Gupta Shori</p>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-ink-soft">
              Co-Founder &amp; Chief Operating Officer, Square Yards.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-label text-gold">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline font-sans text-sm text-ink-soft hover:text-ink"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-label text-gold">
              Network
            </p>
            <ul className="mt-4 space-y-2">
              {network.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-sm text-ink-soft hover:text-ink"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />
        <p className="mt-6 font-sans text-xs text-ink-soft">
          © {new Date().getFullYear()} Square Yards Consulting Private Limited.
        </p>
      </div>
    </footer>
  );
}
