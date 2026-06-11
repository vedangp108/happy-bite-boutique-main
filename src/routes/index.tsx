import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin, Mail, MessageCircle, Star, Heart, Sparkles, Award, Leaf,
  Cookie, ChevronDown, Phone, Instagram, ArrowRight
} from "lucide-react";
import { categories, products, productsByCategory, whatsappLink, WHATSAPP, PHONE, INSTAGRAM_URL, type Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Bite | Homemade Premium Chocolates in Pune" },
      { name: "description", content: "Handcrafted chocolates, healthy bites, gift hampers, bouquets and creative chocolate art — made with premium ingredients in Pune. Order on WhatsApp." },
      { property: "og:title", content: "Swad Food – Happy Bite" },
      { property: "og:description", content: "Crafted with Love, Shared with Happiness. Premium homemade chocolates & creative chocolate gifts in Pune." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://happy-bite-boutique.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://happy-bite-boutique.lovable.app/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Swad Food – Happy Bite",
        description: "Homemade premium chocolates, bouquets and creative chocolate art.",
        email: "swadfood7@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "Saafa Banquet, Baner", addressLocality: "Pune", addressCountry: "IN" },
        url: "https://happy-bite-boutique.lovable.app/",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <BadgesStrip />
      <About />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

const badges = [
  { icon: Heart, label: "Homemade" },
  { icon: Award, label: "Premium Quality" },
  { icon: Sparkles, label: "Custom Orders" },
  { icon: Leaf, label: "Sugar-Free Options" },
  { icon: Cookie, label: "Healthy Bites" },
];

const testimonials = [
  { name: "Priya Sharma", text: "The pan chocolate is unreal — melts like a dream. Ordered a bouquet for my mom and she cried happy tears!", role: "Pune" },
  { name: "Rohan Mehta", text: "Got the chocolate Ganpati for our office — everyone was stunned. Tasted as gorgeous as it looked.", role: "Baner" },
  { name: "Aarti Deshpande", text: "Sugar-free options that actually taste premium. My new go-to gift for every occasion.", role: "Aundh" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="leading-tight">
            <div className="font-display font-bold text-cocoa text-base">Swad Food</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Happy Bite</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/#about" className="hover:text-gold transition">About</a>
          <a href="/#collection" className="hover:text-gold transition">Collection</a>
          <a href="/#reviews" className="hover:text-gold transition">Reviews</a>
          <a href="/#contact" className="hover:text-gold transition">Contact</a>
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-card-luxe">
          <MessageCircle className="w-4 h-4" /> Order
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute top-20 left-10 float-slow opacity-30 text-6xl">🍫</div>
      <div className="absolute top-40 right-10 float-slow opacity-30 text-5xl" style={{ animationDelay: "1.5s" }}>🍬</div>
      <div className="absolute bottom-20 right-20 float-slow opacity-30 text-5xl" style={{ animationDelay: "3s" }}>🎁</div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial="hidden" animate="show" variants={fade}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs sm:text-sm tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Homemade Premium Chocolates
          </span>
        </motion.div>

        <motion.h1 initial="hidden" animate="show" custom={1} variants={fade}
          className="mt-6 font-display font-bold text-[clamp(2.6rem,8vw,4.5rem)] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          Swad Food
          <span className="block italic font-normal text-gold mt-2">Happy Bite</span>
        </motion.h1>

        <motion.p initial="hidden" animate="show" custom={2} variants={fade} className="mt-6 text-base sm:text-xl text-primary-foreground/80 max-w-xl mx-auto font-light italic">
          "Crafted with Love, Shared with Happiness."
        </motion.p>

        <motion.div initial="hidden" animate="show" custom={3} variants={fade} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="#collection" className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-gold text-cocoa px-6 py-4 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform">
            View Our Collection
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-4 rounded-full font-semibold shadow-gold transition-transform hover:scale-105">
            <MessageCircle className="w-4 h-4" /> WhatsApp Order
          </a>
        </motion.div>

        <motion.div initial="hidden" animate="show" custom={4} variants={fade} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-primary-foreground/70">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" />Prabhavee Exhibition, Saafa Banquet, Baner, Pune</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
          <a href="mailto:swadfood7@gmail.com" className="flex items-center gap-2 hover:text-gold transition"><Mail className="w-4 h-4 text-gold" />swadfood7@gmail.com</a>
        </motion.div>
      </div>
    </section>
  );
}

function BadgesStrip() {
  return (
    <div className="bg-cocoa text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 text-sm">
            <b.icon className="w-4 h-4 text-gold" />
            <span className="font-medium tracking-wide">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade}>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Our Story</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-cocoa">A bite of pure happiness</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-cocoa">Swad Food – Happy Bite</span> specializes in handcrafted
            chocolates, healthy bites, gift hampers, bouquets, and creative chocolate art — made with premium
            ingredients and lots of love. Every piece is a small celebration, designed to surprise, delight, and
            be remembered.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          {[
            { n: "100+", l: "Creations" },
            { n: "5★", l: "Loved by Customers" },
            { n: "100%", l: "Homemade" },
          ].map((s, i) => (
            <motion.div key={s.l} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="rounded-2xl bg-card border border-border p-6 shadow-card-luxe">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold">{s.n}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="collection" className="py-20 sm:py-28 bg-gradient-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">The Collection</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-cocoa">Explore every craving</h2>
          <p className="mt-4 text-muted-foreground">From classic truffles to edible sculptures — handcrafted to impress.</p>
        </div>

        <div className="mt-16 space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade}
                className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold grid place-items-center text-2xl shadow-gold">
                  {cat.emoji}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-cocoa">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {productsByCategory(cat.id).map((item, i) => (
                  <ProductCard key={item.slug} item={item} index={i} accent={cat.accent} Icon={cat.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const palettes = [
  "from-[oklch(0.35_0.06_40)] to-[oklch(0.55_0.08_50)]",
  "from-[oklch(0.4_0.07_35)] to-[oklch(0.6_0.09_60)]",
  "from-[oklch(0.5_0.08_25)] to-[oklch(0.7_0.07_70)]",
  "from-[oklch(0.45_0.08_45)] to-[oklch(0.65_0.09_55)]",
  "from-[oklch(0.3_0.05_30)] to-[oklch(0.5_0.08_45)]",
];

function ProductCard({ item, index, accent, Icon }: { item: Product; index: number; accent: number; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} custom={index} variants={fade}
      whileHover={{ y: -6 }}
    >
      <Link
        to="/product/$slug"
        params={{ slug: item.slug }}
        className="group block rounded-3xl bg-card border border-border overflow-hidden shadow-card-luxe hover:shadow-luxe transition-shadow"
      >
        <div className={`relative aspect-square bg-gradient-to-br ${palettes[accent % palettes.length]} grid place-items-center overflow-hidden`}>
          <Icon className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          {item.tag && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold text-cocoa shadow">
              {item.tag}
            </span>
          )}
        </div>
        <div className="p-4">
          <h4 className="font-display text-base sm:text-lg font-semibold text-cocoa leading-tight line-clamp-2 min-h-[2.6em]">{item.name}</h4>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cocoa">
              Custom order
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-cocoa group-hover:text-gold transition">
              View <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Happy Bites</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-cocoa">Loved by sweet souls</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="rounded-3xl bg-card border border-border p-7 shadow-card-luxe">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-cocoa/85 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center font-display font-bold text-cocoa">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-cocoa text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cocoa text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blush/10 blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Get in Touch</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Let's make it sweet</h2>
        <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
          Visit our exhibition stall or order directly on WhatsApp. Custom hampers and themed art on request.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-gold/80 mb-1">Find Us</div>
              <div className="text-sm">Prabhavee Exhibition, Saafa Banquet, Baner, Pune</div>
            </div>
          </div>
          <a href="mailto:swadfood7@gmail.com" className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 flex items-start gap-3 hover:bg-white/10 transition">
            <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-gold/80 mb-1">Email</div>
              <div className="text-sm">swadfood7@gmail.com</div>
            </div>
          </a>
          <a href={`tel:${PHONE}`} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 flex items-start gap-3 hover:bg-white/10 transition">
            <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-gold/80 mb-1">Call</div>
              <div className="text-sm font-semibold">{PHONE}</div>
            </div>
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 flex items-start gap-3 hover:bg-white/10 transition">
            <Instagram className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-gold/80 mb-1">Instagram</div>
              <div className="text-sm break-all">@swad_food_homemade_chocolate</div>
            </div>
          </a>
        </div>

        <a href={whatsappLink()} target="_blank" rel="noopener"
          className="mt-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-5 rounded-full font-semibold text-lg shadow-gold transition-transform hover:scale-105">
          <MessageCircle className="w-6 h-6" />
          WhatsApp Order Now
          <span className="hidden sm:inline text-sm font-normal opacity-80">{WHATSAPP}</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-gold grid place-items-center text-sm">🍫</span>
          <span className="font-display font-semibold text-cocoa">Swad Food – Happy Bite</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Made with <Heart className="inline w-3.5 h-3.5 fill-destructive text-destructive" /> by Swad Food – Happy Bite
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <a href={`tel:${PHONE}`} className="font-medium text-cocoa hover:text-gold transition">{PHONE}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition"><Instagram className="w-4 h-4" /></a>
          <a href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-gold transition"><MessageCircle className="w-4 h-4" /></a>
          <a href="mailto:swadfood7@gmail.com" aria-label="Email" className="hover:text-gold transition"><Mail className="w-4 h-4" /></a>
          <a href={`tel:${PHONE}`} aria-label="Phone" className="hover:text-gold transition"><Phone className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative" />
    </a>
  );
}

// Also export products list for /sitemap.xml
export { products };
