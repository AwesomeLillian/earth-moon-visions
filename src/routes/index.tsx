import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, ArrowUpRight, Menu, X, Printer } from "lucide-react";

const asset = (file: string) => ({ url: `/images/${file}` });

const logo = asset("logo-dark.png");
const chamber = asset("chamber.jpg");
const trenching = asset("trenching.jpg");
const compaction = asset("compaction.jpg");
const tonerHp = asset("toner-hp.png");
const tonerSamsung = asset("toner-samsung.png");
const embroidery = asset("embroidery.jpg");
const paving = asset("paving.jpg");
const patchPanels = asset("patch-panels.jpg");
const rackSwitch = asset("rack-switch.jpg");
const dataPoint = asset("data-point.jpg");
const cyberpunkFiber = asset("cyberpunk-fiber.jpg");
const serverRackFull = asset("server-rack-full.jpg");
const pavingRoad = asset("paving-road.jpg");
const peripherals = asset("peripherals.jpg");
const mediaPrinting = asset("media-printing.jpg");

const ADDRESS = "Plot no 657 Leratong Avenue, Wallmansthal";
const MAP_QUERY = encodeURIComponent("Plot 657 Leratong Avenue Wallmansthal, Pretoria");
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const WHATSAPP = "https://wa.me/27793289837";
const CONTACT_MAIL = ["mandetrd11cc", "gmail.com"].join("@");

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moon And Earth Trading And Projects 11cc | Wallmansthal" },
      {
        name: "description",
        content:
          "Network points, server room setup, computer peripherals, toners and cartridges, media printing, embroidery and printing. Wallmansthal, Pretoria.",
      },
      {
        property: "og:title",
        content: "Moon And Earth Trading And Projects 11cc",
      },
      {
        property: "og:description",
        content:
          "Network points, server rooms, peripherals, toners, media printing and embroidery across South Africa.",
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

type Service = {
  title: string;
  body: string;
  points: string[];
  images: { url: string; alt: string }[];
  fit?: "contain";
  imageHeight?: "standard" | "tall";
};

type ServiceGroup = {
  group: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    group: "Network Points",
    services: [
      {
        title: "Server Room Setup",
        fit: "contain",
        imageHeight: "tall",
        body: "Structured cabling and complete comms room builds — trenching, sleeving, cable pulling and data point termination, plus racks, patch panels, switches, power distribution and neat cable management built to last.",
        points: [
          "CAT6 & fibre trenching",
          "Data point termination",
          "Rack & patch panel builds",
          "Switch & power installs",
          "Testing & certification",
        ],
        images: [
          {
            url: serverRackFull.url,
            alt: "Floor-to-ceiling server cabinet with patch panels and structured cabling",
          },
          {
            url: patchPanels.url,
            alt: "Full server rack with labelled patch panels and neatly dressed network cabling",
          },
          {
            url: rackSwitch.url,
            alt: "Rack-mounted network switch, patch panel and power distribution unit",
          },
          {
            url: dataPoint.url,
            alt: "Wall-mounted data point and power outlet installed in an office trunking rail",
          },
          {
            url: trenching.url,
            alt: "Team excavating a trench for network cabling along a residential street",
          },
          {
            url: compaction.url,
            alt: "Crew compacting soil after installing underground network cabling",
          },
          {
            url: chamber.url,
            alt: "Cable distribution chamber ready for installation on site",
          },
        ],
      },
      {
        title: "Computer Peripherals",
        body: "Supply and installation of computers, monitors, keyboards, routers, switches, enclosures and everyday IT hardware for offices of any size.",
        points: ["Hardware supply", "On-site installation", "Ongoing support"],
        images: [
          {
            url: peripherals.url,
            alt: "Office desk setup with monitor, keyboard, mouse, router and network switch",
          },
        ],
      },
    ],
  },
  {
    group: "Media & Printing",
    services: [
      {
        title: "Toners And Cartridges",
        fit: "contain",
        imageHeight: "tall",
        body: "Genuine HP, Samsung and compatible toners and cartridges for every major printer, delivered to your office door.",
        points: ["HP & Samsung stock", "Bulk office orders", "Fast delivery"],
        images: [
          {
            url: tonerHp.url,
            alt: "Genuine HP LaserJet 410A toner cartridges in black, magenta, cyan and yellow",
          },
          {
            url: tonerSamsung.url,
            alt: "Samsung colour toner cartridge range for office printers",
          },
        ],
      },
      {
        title: "Media Printing",
        body: "Banners, signage, posters, flyers and large-format media printing — designed, printed and finished to a professional standard.",
        points: ["Banners & signage", "Flyers & posters", "Large format"],
        images: [
          {
            url: mediaPrinting.url,
            alt: "Large format printer producing a colourful banner alongside printed posters",
          },
        ],
      },
      {
        title: "Embroidery Printing",
        fit: "contain",
        body: "Corporate branding on golf shirts, overalls, caps and PPE — crisp embroidery and heat-transfer printing for teams and municipalities.",
        points: ["Corporate workwear", "Logo embroidery", "PPE branding"],
        images: [
          {
            url: embroidery.url,
            alt: "Navy golf shirt with embroidered Lepelle-Nkumpi Local Municipality badge",
          },
        ],
      },
    ],
  },
  {
    group: "Paving & Kerbs",
    services: [
      {
        title: "Paving And Kerbs",
        fit: "contain",
        imageHeight: "tall",
        body: "Paving, kerbing and site finishing for driveways, streets and property entrances — laid level, edged neatly and built to carry traffic.",
        points: ["Driveways & walkways", "Street paving", "Kerbing & edging"],
        images: [
          {
            url: paving.url,
            alt: "Completed paving and site finishing work at a client property",
          },
          {
            url: pavingRoad.url,
            alt: "Paved residential street with painted centre line completed by the team",
          },
        ],
      },
    ],
  },
];

const stats = [
  { value: "2009", label: "Trading since" },
  { value: "5", label: "Service lines" },
  { value: "100%", label: "On-site delivery" },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function ServiceCard({ service }: { service: Service }) {
  const [active, setActive] = useState(0);
  const current = service.images[active];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)]">
      {current ? (
        <div className="relative overflow-hidden">
          <img
            src={current.url}
            alt={current.alt}
            loading="lazy"
            className={`${service.imageHeight === "tall" ? "h-72 sm:h-80" : "h-56 sm:h-64"} w-full transition-transform duration-500 group-hover:scale-[1.02] ${
              service.fit === "contain"
                ? "bg-secondary/40 object-contain p-2 sm:p-3"
                : "object-cover"
            }`}
          />
          {service.images.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-background/90 to-transparent p-3">
              {service.images.map((img, i) => (
                <button
                  key={img.url}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show photo ${i + 1} of ${service.title}`}
                  aria-current={i === active}
                  className={`h-12 w-12 overflow-hidden rounded-md border transition-opacity ${
                    i === active
                      ? "border-primary opacity-100"
                      : "border-border/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-52 w-full items-center justify-center bg-secondary/40">
          <Printer className="h-12 w-12 text-primary" aria-hidden="true" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{service.body}</p>
        <ul className="mt-5 space-y-2 text-sm">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();
    if (!n || n.length > 100) return setError("Please enter your name (max 100 characters).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) || em.length > 255)
      return setError("Please enter a valid email address.");
    if (!msg || msg.length > 1000)
      return setError("Please enter a message (max 1000 characters).");
    
    setError("");
    setSending(true);
    setStatus("Sending...");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, email: em, message: msg }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully! ✅");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("");
        setError(data.error || "Failed to send, try again");
      }
    } catch {
      setStatus("");
      setError("Failed to send, try again. Check internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border/70 bg-card p-6"
    >
      <div>
        <h3 className="text-lg font-semibold">Send us a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us what you need and we will get back to you.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted-foreground">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted-foreground">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            required
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-muted-foreground">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={1000}
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {status && <p className="text-sm text-green-600 font-medium">{status}</p>}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send message"}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <div className="h-24 w- overflow-visible md:h-28 md:w-">
            <img
              src={logo.url}
              alt="Moon And Earth Trading And Projects 11cc logo"
              className="h-full w-full object-contain object-left"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="main-menu"
            className="border-t border-border/60 bg-background/95 backdrop-blur"
          >
             <div className="mx-auto flex max-w-7xl flex-col px-5 py-2 lg:px-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="surface-glow relative overflow-hidden border-b border-border/60">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:min-h-[620px] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-10 md:py-20 lg:gap-16 lg:px-8 lg:py-24">
            <div className="min-w-0 md:py-4">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                MOON &amp; EARTH TRADING
              </p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-bold md:text-5xl lg:text-6xl">
                Connecting your world,
                <span className="block text-primary">from the ground up.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Moon And Earth Trading And Projects 11cc installs network points and server
                rooms, supplies IT hardware and toners, and brands your team with embroidery
                and print — all under one roof.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request a quote
                  <ArrowUpRight className="h-4 w-4" />
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
            <div className="relative -mx-5 min-w-0 md:mx-0">
              <div className="overflow-hidden md:rounded-3xl md:shadow-[var(--shadow-card)]">
                <img
                  src={cyberpunkFiber.url}
                  alt="Field crew installing fibre cabling linked to a glowing server rack"
                  className="aspect-video w-full object-cover md:h-auto md:object-contain"
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
            Five service lines, one accountable team — from the trench outside to the branded
            shirt on your staff.
          </p>
          <div className="mt-12 space-y-16">
            {serviceGroups.map((g) => (
              <div key={g.group}>
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {g.group}
                  </h3>
                  <span className="h-px flex-1 bg-border/70" />
                </div>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {g.services.map((s) => (
                    <ServiceCard key={s.title} service={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-border/70">
              <img
                src={trenching.url}
                alt="Team excavating a trench for network cabling along a residential street"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">About the company</h2>
              <p className="mt-5 text-muted-foreground">
                We have grown from consumable supply into a full-service infrastructure and
                branding partner. Our crews work across municipal, education and private
                sites, and we handle each job end to end — planning, installation, supply and
                after-care.
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
          <div className="mt-10 grid gap-8 md:grid-cols-2">
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
              <div className="overflow-hidden rounded-2xl border border-border/70">
                <iframe
                  title="Map to Moon And Earth Trading And Projects 11cc office"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full border-0"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div className="h-20 w-[270px] max-w-full overflow-hidden">
            <img
              src={logo.url}
              alt="Moon And Earth Trading And Projects 11cc logo"
              className="h-full w-full object-contain object-left"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{ADDRESS}</p>
            <p className="mt-1">
              © 2009 Moon And Earth Trading And Projects 11cc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
