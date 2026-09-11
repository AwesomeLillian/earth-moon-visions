import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

import logo from "@/assets/logo-dark.jpg.asset.json";
import chamber from "@/assets/chamber.jpg.asset.json";
import trenching from "@/assets/trenching.jpg.asset.json";
import compaction from "@/assets/compaction.jpg.asset.json";
import serverBox from "@/assets/server-box.jpg.asset.json";
import tonerHp from "@/assets/toner-hp.png.asset.json";
import tonerSamsung from "@/assets/toner-samsung.png.asset.json";
import embroidery from "@/assets/embroidery.jpg.asset.json";
import paving from "@/assets/paving.jpg.asset.json";

const ADDRESS = "Plot no 657 Leratong Avenue, Wallmansthal";
const MAP_QUERY = encodeURIComponent("Plot 657 Leratong Avenue Wallmansthal, Pretoria");
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const WHATSAPP = "https://wa.me/27793289837";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moon And Earth Trading And Projects 11cc | Wallmansthal" },
      {
        name: "description",
        content:
          "Network points, server room setup, computer peripherals, toners and cartridges, media printing, embroidery and printing. Wallmansthal, Pretoria. Trading since 2009.",
      },
      {
        property: "og:title",
        content: "Moon And Earth Trading And Projects 11cc",
      },
      {
        property: "og:description",
        content:
          "Network points, server rooms, peripherals, toners, media printing and embroidery. Serving South Africa since 2009.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Moon And Earth Trading And Projects 11cc",
          foundingDate: "2009",
          telephone: "+27793289837",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot no 657 Leratong Avenue",
            addressLocality: "Wallmansthal",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4a9.85 9.85 0 0 0 4.7 1.2h.01c5.44 0 9.87-4.43 9.87-9.87S17.48 2 12.04 2zm0 17.94h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.25-4.37c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.26-8.16 8.26z" />
    </svg>
  );
}

const services = [
  {
    title: "Network Points",
    image: trenching.url,
    alt: "Team excavating a trench for network cabling along a residential street",
    body: "Structured cabling and data point installation — trenching, sleeving, cable pulling and termination for homes, schools, clinics and municipal sites.",
    points: ["CAT6 & fibre trenching", "Data point termination", "Testing & certification"],
  },
  {
    title: "Server Room Setup",
    image: chamber.url,
    alt: "Cable distribution chamber ready for installation on site",
    body: "Complete server and comms room builds: racks, patch panels, distribution chambers, power and neat cable management built to last.",
    points: ["Rack & patch panel builds", "Chambers & manholes", "Clean cable management"],
  },
  {
    title: "Computer Peripherals",
    image: serverBox.url,
    alt: "Technician assembling networking enclosure and peripheral hardware on site",
    body: "Supply and installation of computers, monitors, keyboards, routers, switches, enclosures and everyday IT hardware for offices of any size.",
    points: ["Hardware supply", "On-site installation", "Ongoing support"],
  },
  {
    title: "Toner And Cartridges",
    image: tonerHp.url,
    alt: "Genuine HP LaserJet 410A toner cartridges in black, magenta, cyan and yellow",
    body: "Genuine HP, Samsung and compatible toners and cartridges for every major printer, delivered to your office door.",
    points: ["HP & Samsung stock", "Bulk office orders", "Fast delivery"],
  },
  {
    title: "Media Printing",
    image: paving.url,
    alt: "Completed red and grey paved driveway showing quality of site finishing work",
    body: "Banners, signage, posters, flyers and large-format media printing — designed, printed and finished to a professional standard.",
    points: ["Banners & signage", "Flyers & posters", "Large format"],
  },
  {
    title: "Embroidery And Printing",
    image: embroidery.url,
    alt: "Navy golf shirt with embroidered Lepelle-Nkumpi Local Municipality badge",
    body: "Corporate branding on golf shirts, overalls, caps and PPE — crisp embroidery and heat-transfer printing for teams and municipalities.",
    points: ["Corporate workwear", "Logo embroidery", "PPE branding"],
  },
];

const stats = [
  { value: "2009", label: "Trading since" },
  { value: "6", label: "Service lines" },
  { value: "100%", label: "On-site delivery" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[var(--glow-orbit)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <img
            src={logo.url}
            alt="Moon And Earth Trading And Projects 11cc logo"
            className="h-11 w-auto rounded-md"
          />
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-foreground" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            079 328 9837
          </a>
        </div>
      </header>

      <main>
        <section className="surface-glow relative overflow-hidden border-b border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Wallmansthal · South Africa
              </p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-6xl">
                Connecting your world,
                <span className="block text-primary">from the ground up.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Moon And Earth Trading And Projects 11cc installs network points and server
                rooms, supplies IT hardware and toners, and brands your team with embroidery
                and print — all under one roof since 2009.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Request a quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Our services
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-bold text-foreground">
                      {s.value}
                    </dd>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-card)]">
                <img
                  src={compaction.url}
                  alt="Crew compacting soil after installing underground network cabling"
                  className="h-[420px] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/70 bg-card p-4 shadow-[var(--shadow-card)] sm:block">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  On site
                </p>
                <p className="mt-1 text-sm font-semibold">Fibre & data trenching crews</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Six service lines, one accountable team — from the trench outside to the branded
            shirt on your staff.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-border/70">
              <img
                src={tonerSamsung.url}
                alt="Samsung toner cartridge range in black, cyan, magenta and yellow"
                loading="lazy"
                className="h-full w-full bg-white object-contain p-6"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">About the company</h2>
              <p className="mt-5 text-muted-foreground">
                We have been trading since 2009, growing from consumable supply into a
                full-service infrastructure and branding partner. Our crews work across
                municipal, education and private sites, and we handle each job end to end —
                planning, installation, supply and after-care.
              </p>
              <p className="mt-4 text-muted-foreground">
                Whether it is a single toner delivery or a full server room and network
                rollout, the same team stands behind the work.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Visit or contact us</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">WhatsApp / Phone</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm text-muted-foreground hover:text-foreground"
                  >
                    079 328 9837
                  </a>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    www.moon&amp;earthtrading11cc.co.za
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Trading since</p>
                  <p className="mt-1 text-sm text-muted-foreground">2009</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/70">
              <iframe
                title="Map to Moon And Earth Trading And Projects 11cc office"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Moon And Earth Trading And Projects 11cc logo"
              className="h-10 w-auto rounded"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Proudly trading since 2009.</p>
            <p className="mt-1">{ADDRESS}</p>
            <p className="mt-1">
              © {new Date().getFullYear()} Moon And Earth Trading And Projects 11cc. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
