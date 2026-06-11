import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Star, Check, Heart, Share2, Truck, Shield, Sparkles } from "lucide-react";
import { findProduct, categories, productsByCategory, whatsappLink, WHATSAPP, type Product } from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found" }] };
    const url = `https://happy-bite-boutique.lovable.app/product/${params.slug}`;
    return {
      meta: [
        { title: `${p.name} – Swad Food | Happy Bite` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} – Swad Food Happy Bite` },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          brand: { "@type": "Brand", name: "Swad Food – Happy Bite" },
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url,
          },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background p-6">
      <div className="text-center">
        <h1 className="font-display text-3xl text-cocoa">Product not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-gold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to collection
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

const palettes = [
  "from-[oklch(0.35_0.06_40)] to-[oklch(0.55_0.08_50)]",
  "from-[oklch(0.4_0.07_35)] to-[oklch(0.6_0.09_60)]",
  "from-[oklch(0.5_0.08_25)] to-[oklch(0.7_0.07_70)]",
  "from-[oklch(0.45_0.08_45)] to-[oklch(0.65_0.09_55)]",
  "from-[oklch(0.3_0.05_30)] to-[oklch(0.5_0.08_45)]",
];

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const cat = categories.find((c) => c.id === product.categoryId)!;
  const Icon = cat.icon;
  const related = productsByCategory(cat.id).filter((p) => p.slug !== product.slug).slice(0, 4);
  const mrp = Math.round(product.price * 1.25);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-cocoa hover:text-gold transition">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Swad Food Happy Bite logo" className="h-8 w-auto" />
          </Link>
          <a href={whatsappLink(`Hi! I'd like to order: ${product.name}`)} target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition shadow-card-luxe">
            <MessageCircle className="w-4 h-4" /> <span className="hidden sm:inline">Order</span>
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-muted-foreground mb-6 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <a href={`/#${cat.id}`} className="hover:text-gold">{cat.title}</a>
          <span>/</span>
          <span className="text-cocoa font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {/* Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={`relative aspect-square rounded-3xl bg-gradient-to-br ${palettes[cat.accent % palettes.length]} grid place-items-center overflow-hidden shadow-luxe`}>
              <Icon className="w-32 h-32 text-white/80" />
              <div className="absolute inset-0 shimmer opacity-40" />
              {product.tag && (
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-cocoa shadow">
                  {product.tag}
                </span>
              )}
              <span className="absolute bottom-5 right-5 text-xs text-white/60 uppercase tracking-widest">Photo coming soon</span>
            </div>
            {/* Thumbnails (placeholder) */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${palettes[(cat.accent + i) % palettes.length]} opacity-60 grid place-items-center`}>
                  <Icon className="w-6 h-6 text-white/70" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">{cat.title}</span>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-cocoa leading-tight">{product.name}</h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <span className="text-sm text-muted-foreground">5.0 · Loved by customers</span>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-cocoa">
                Custom order · WhatsApp for price
              </span>
              <span className="text-xs font-medium text-muted-foreground">Made fresh · customizable</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes · 250g pack (customizable)</p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  <Sparkles className="w-3 h-3 text-gold" /> {b}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink(`Hi! I'd like to order: ${product.name}`)} target="_blank" rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-6 py-4 rounded-full font-semibold shadow-gold transition-transform hover:scale-[1.02]">
                <MessageCircle className="w-5 h-5" /> Order on WhatsApp
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full border border-border text-cocoa hover:bg-secondary transition">
                <Heart className="w-4 h-4" /> <span className="hidden sm:inline">Save</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full border border-border text-cocoa hover:bg-secondary transition">
                <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { i: Truck, t: "Local delivery", s: "Across Pune" },
                { i: Shield, t: "Hand-packed", s: "Fresh & sealed" },
                { i: Heart, t: "Custom orders", s: "On request" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-card border border-border p-3 text-center">
                  <x.i className="w-5 h-5 text-gold mx-auto" />
                  <div className="mt-1 text-xs font-semibold text-cocoa">{x.t}</div>
                  <div className="text-[10px] text-muted-foreground">{x.s}</div>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card-luxe">
              <h3 className="font-display text-xl font-bold text-cocoa">Ingredients</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" /> {ing}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">Contains traces of nuts and dairy. Best consumed within 15 days. Store in a cool, dry place.</p>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="flex items-end justify-between mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-cocoa">You may also love</h2>
              <a href={`/#${cat.id}`} className="text-sm font-semibold text-gold hover:underline">View all →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {related.map((r) => (
                <Link key={r.slug} to="/product/$slug" params={{ slug: r.slug }}
                  className="group rounded-3xl bg-card border border-border overflow-hidden shadow-card-luxe hover:shadow-luxe transition">
                  <div className={`relative aspect-square bg-gradient-to-br ${palettes[cat.accent % palettes.length]} grid place-items-center`}>
                    <Icon className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-base font-semibold text-cocoa line-clamp-1">{r.name}</h4>
                    <div className="mt-1 text-sm font-semibold text-cocoa">Custom order</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky mobile CTA */}
      <div className="md:hidden sticky bottom-0 z-30 bg-background/90 backdrop-blur border-t border-border p-3">
        <a href={whatsappLink(`Hi! I'd like to order: ${product.name}`)} target="_blank" rel="noopener"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold shadow-gold">
          <MessageCircle className="w-5 h-5" /> Order on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-muted-foreground">
          Made with <Heart className="inline w-3.5 h-3.5 fill-destructive text-destructive" /> by Swad Food – Happy Bite · {WHATSAPP}
        </div>
      </footer>
    </div>
  );
}
