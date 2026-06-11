import { Candy, Cookie, Leaf, Gift, Cake, Heart, Award, Sparkles } from "lucide-react";
import type { ComponentType } from "react";

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  tag?: string;
  price: number;
  description: string;
  ingredients: string[];
  badges: string[];
};

export type Category = {
  id: string;
  title: string;
  emoji: string;
  icon: ComponentType<{ className?: string }>;
  blurb: string;
  accent: number;
};

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const categories: Category[] = [
  { id: "premium", title: "Premium Chocolates", emoji: "🍫", icon: Candy, blurb: "Signature handcrafted truffles and bites.", accent: 0 },
  { id: "bars", title: "Chocolate Bars", emoji: "🍫", icon: Cookie, blurb: "Thick, luxurious bars in artisan flavors.", accent: 1 },
  { id: "healthy", title: "Healthy Collection", emoji: "🌱", icon: Leaf, blurb: "Guilt-free indulgence for mindful moments.", accent: 2 },
  { id: "gifts", title: "Bouquets & Gifts", emoji: "🎁", icon: Gift, blurb: "Edible bouquets that say it sweeter.", accent: 3 },
  { id: "art", title: "Creative Chocolate Art", emoji: "🎨", icon: Cake, blurb: "Custom edible sculptures for special days.", accent: 4 },
];

const raw: Array<Omit<Product, "slug" | "category"> & { categoryId: string }> = [
  { categoryId: "premium", name: "Rice Crisp Chocolate", price: 180, description: "Crunchy rice pearls folded into silky milk chocolate — a nostalgic snap in every bite.", ingredients: ["Belgian milk chocolate", "Toasted rice crisp", "Pure cocoa butter"], badges: ["Homemade", "Bestseller"] },
  { categoryId: "premium", name: "Pan Chocolate", price: 220, description: "Inspired by the Indian paan — gulkand, fennel and cool mint wrapped in dark chocolate.", ingredients: ["Dark chocolate 55%", "Gulkand", "Fennel", "Mint"], badges: ["Signature"] },
  { categoryId: "premium", name: "Rose Butterscotch", price: 200, description: "Buttery butterscotch laced with rose petals and finished in rich chocolate shells.", ingredients: ["Butterscotch", "Rose petals", "Milk chocolate"], badges: ["Floral"] },
  { categoryId: "premium", name: "Coffee Chocolate", price: 210, description: "Single-origin espresso ganache encased in dark chocolate. A wake-up in one bite.", ingredients: ["Espresso", "Dark chocolate 60%", "Fresh cream"], badges: ["Bold"] },
  { categoryId: "premium", name: "Bounty Chocolate", price: 220, description: "Tender coconut centers wrapped in deep dark chocolate — tropical & decadent.", ingredients: ["Fresh coconut", "Dark chocolate", "Condensed milk"], badges: ["Tropical"] },
  { categoryId: "premium", name: "Fruit & Nut", price: 230, description: "Roasted almonds, cashews and dried berries set in classic milk chocolate.", ingredients: ["Milk chocolate", "Almonds", "Cashews", "Dried berries"], badges: ["Classic"] },
  { categoryId: "premium", name: "Ferrero Rocher Style", price: 280, description: "Hazelnut praline core, wafer crunch, gold-dusted chocolate shell.", ingredients: ["Hazelnut praline", "Wafer", "Milk chocolate"], badges: ["Premium"] },
  { categoryId: "premium", name: "Chocolate Coated Almonds", price: 250, description: "Whole roasted almonds individually robed in dark chocolate.", ingredients: ["Almonds", "Dark chocolate"], badges: ["Crunchy"] },
  { categoryId: "premium", name: "Pure Dark Chocolate", price: 240, description: "Bittersweet 70% cacao — bold, smooth, indulgent.", ingredients: ["Cacao 70%", "Cocoa butter", "Sugar"], badges: ["Dark"] },
  { categoryId: "premium", name: "Marshmallow Chocolate", price: 200, description: "Pillowy marshmallow dipped and finished in fine chocolate.", ingredients: ["Marshmallow", "Milk chocolate"], badges: ["Fun"] },
  { categoryId: "premium", name: "Central Filling (Peanut & Gulkand)", price: 230, description: "Two soulful fillings — roasted peanut and rose gulkand — in a smooth shell.", ingredients: ["Peanut butter", "Gulkand", "Milk chocolate"], badges: ["Unique"] },
  { categoryId: "premium", name: "Sugar-Free Chocolate", price: 260, description: "All the indulgence, none of the sugar. Sweetened with stevia.", ingredients: ["Cocoa", "Stevia", "Cocoa butter"], badges: ["Sugar-Free"], tag: "Sugar-Free" },

  { categoryId: "bars", name: "Dried Fruit Bar", price: 320, description: "A loaded bar of dried apricot, cranberry and fig in milk chocolate.", ingredients: ["Apricot", "Cranberry", "Fig", "Milk chocolate"], badges: ["Loaded"] },
  { categoryId: "bars", name: "Dry Fruits Bar", price: 340, description: "Almond, cashew, pistachio and walnut bar — rich and crunchy.", ingredients: ["Almond", "Cashew", "Pistachio", "Walnut"], badges: ["Premium"] },
  { categoryId: "bars", name: "Designer Bar", price: 380, description: "A hand-painted bar with marbled cocoa swirls. Almost too pretty to eat.", ingredients: ["Belgian chocolate", "Edible color"], badges: ["Bestseller"], tag: "Bestseller" },
  { categoryId: "bars", name: "Sugar-Free Bar", price: 360, description: "A bar that's friendly for sugar-conscious sweet lovers.", ingredients: ["Stevia", "Cacao", "Cocoa butter"], badges: ["Sugar-Free"], tag: "Sugar-Free" },
  { categoryId: "bars", name: "Protein Bar Chocolate", price: 300, description: "Post-workout treat with whey protein and dark chocolate.", ingredients: ["Whey protein", "Dark chocolate", "Oats"], badges: ["Healthy"], tag: "Healthy" },

  { categoryId: "healthy", name: "Health Mini Bite (Seeds)", price: 180, description: "Pumpkin, sunflower and chia seeds bound in dark chocolate. Tiny powerhouses.", ingredients: ["Mixed seeds", "Dark chocolate", "Honey"], badges: ["Healthy"], tag: "Healthy" },
  { categoryId: "healthy", name: "Protein Bar Chocolate", price: 300, description: "Clean protein bar coated in dark chocolate — gym-friendly fuel.", ingredients: ["Whey protein", "Dark chocolate"], badges: ["Healthy"], tag: "Healthy" },
  { categoryId: "healthy", name: "Sugar-Free Chocolate", price: 260, description: "A guilt-free everyday chocolate, sweetened with stevia.", ingredients: ["Stevia", "Cacao"], badges: ["Sugar-Free"], tag: "Sugar-Free" },

  { categoryId: "gifts", name: "Ferrero Rocher Bouquet", price: 1200, description: "A hand-tied bouquet of golden Ferrero-style chocolates wrapped in luxe paper.", ingredients: ["Praline chocolates", "Gift wrap"], badges: ["Gift"] },
  { categoryId: "gifts", name: "Heart Chocolate Bouquet", price: 1100, description: "Heart-shaped chocolates arranged in a romantic bouquet.", ingredients: ["Assorted chocolates", "Ribbon wrap"], badges: ["Romantic"] },
  { categoryId: "gifts", name: "Chocolate Flower Bouquet", price: 1400, description: "Edible chocolate flowers crafted petal by petal.", ingredients: ["Modeling chocolate", "Cocoa"], badges: ["Artisan"] },
  { categoryId: "gifts", name: "Couple Chocolate Bar", price: 450, description: "Two interlocking chocolate bars — perfect for sharing with someone special.", ingredients: ["Belgian chocolate"], badges: ["Romantic"] },

  { categoryId: "art", name: "Chocolate House", price: 2500, description: "A miniature edible house with chocolate windows, doors and roof tiles.", ingredients: ["Chocolate", "Edible decor"], badges: ["Custom"] },
  { categoryId: "art", name: "Chocolate Chest", price: 1800, description: "A treasure chest of chocolate filled with bite-sized gems.", ingredients: ["Chocolate", "Assorted bites"], badges: ["Custom"] },
  { categoryId: "art", name: "Chocolate Solar Panel", price: 1600, description: "A playful, science-themed chocolate sculpture.", ingredients: ["Chocolate", "Edible foil"], badges: ["Themed"] },
  { categoryId: "art", name: "Chocolate Bike", price: 2200, description: "A detailed chocolate bicycle — sculpted to wow.", ingredients: ["Tempered chocolate"], badges: ["Showpiece"] },
  { categoryId: "art", name: "Chocolate Car", price: 2400, description: "A sleek chocolate car for car-loving sweet teeth.", ingredients: ["Tempered chocolate"], badges: ["Showpiece"] },
  { categoryId: "art", name: "Chocolate Draped Doll", price: 2000, description: "A doll dressed in flowing chocolate drapes — a true centerpiece.", ingredients: ["Modeling chocolate"], badges: ["Custom"] },
  { categoryId: "art", name: "Chocolate Ganpati Theme", price: 3500, description: "A devotional Ganpati centerpiece crafted entirely in chocolate.", ingredients: ["Chocolate", "Edible gold"], badges: ["Custom"], tag: "Custom" },
  { categoryId: "art", name: "Chocolate Chess Board", price: 2800, description: "A playable chocolate chess set — board, pieces and all.", ingredients: ["Dark & white chocolate"], badges: ["Showpiece"] },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  slug: slug(p.name) + "-" + p.categoryId,
  category: categories.find((c) => c.id === p.categoryId)!.title,
}));

export const findProduct = (s: string) => products.find((p) => p.slug === s);
export const productsByCategory = (id: string) => products.filter((p) => p.categoryId === id);

export const badgeIcon: Record<string, ComponentType<{ className?: string }>> = {
  Homemade: Heart,
  "Premium Quality": Award,
  "Custom Orders": Sparkles,
  "Sugar-Free Options": Leaf,
  "Healthy Bites": Cookie,
};

export const PHONE = "+91 9689254863";
export const WHATSAPP = PHONE;
export const INSTAGRAM_URL = "https://www.instagram.com/swad_food_homemade_chocolate?igsh=bXh5a21rdDZmNWZ6";
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message ?? "Hi Swad Food! I'd like to order some chocolates.")}`;
