import { useEffect } from "react";
import storeData from "../Data.json";

export const SITE_URL = "https://mdfashion.online";
export const SITE_NAME = "MD Fashion";

export const slugify = (str = "") =>
  str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const productSlug = (product) => `${slugify(product.name)}-${product.id}`;

/* Human-readable, keyword-rich paths for the pages that matter for search
   (kids' kurta, sherwani, festive kurta) instead of leaving every page
   on the same "/" URL, which is invisible to search engines. */
export function routeFor(page) {
  const { name, ...params } = page || {};
  switch (name) {
    case "home": return "/";
    case "category":
      return params.id === "kids" ? "/kids-kurta" : `/collections/${params.id}`;
    case "search": {
      const q = (params.query || "").toLowerCase();
      if (q === "sherwani") return "/sherwani";
      if (q === "festive") return "/festive-kurta";
      return `/search${params.query ? `?q=${encodeURIComponent(params.query)}` : ""}`;
    }
    case "product": {
      const product = storeData.products.find((p) => p.id === params.id);
      return `/product/${product ? productSlug(product) : params.id}`;
    }
    case "cart": return "/cart";
    case "checkout": return "/checkout";
    case "account": return params.tab ? `/account?tab=${params.tab}` : "/account";
    case "about": return "/about-us";
    case "faq": return "/faq";
    default: return "/";
  }
}

/* Inverse of routeFor — turns a browser location back into the {name, ...params}
   shape the app's in-memory router already understands, so a direct visit or
   refresh on e.g. /sherwani lands on the right screen instead of always home. */
export function parseRoute(pathname, search) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const params = new URLSearchParams(search);

  if (path === "/") return { name: "home" };
  if (path === "/kids-kurta") return { name: "category", id: "kids" };
  if (path === "/sherwani") return { name: "search", query: "sherwani" };
  if (path === "/festive-kurta") return { name: "search", query: "festive" };
  if (path === "/search") return { name: "search", query: params.get("q") || "" };
  if (path === "/cart") return { name: "cart" };
  if (path === "/checkout") return { name: "checkout" };
  if (path === "/account") return { name: "account", tab: params.get("tab") || undefined };
  if (path === "/about-us") return { name: "about" };
  if (path === "/faq") return { name: "faq" };

  const productMatch = path.match(/^\/product\/(.+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    const product = storeData.products.find((p) => slug === productSlug(p) || slug.endsWith(`-${p.id}`) || slug === p.id);
    return { name: "product", id: product ? product.id : slug };
  }

  const collectionMatch = path.match(/^\/collections\/(.+)$/);
  if (collectionMatch) return { name: "category", id: collectionMatch[1] };

  return { name: "home" };
}

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/* Keeps <title>, meta description, canonical, Open Graph, Twitter Card and
   an optional JSON-LD block in sync with whatever page is currently showing —
   this is a client-only app (no server-side rendering), so these tags only
   exist for crawlers that execute JS; index.html carries static fallbacks
   for everyone else. */
export function useSEO({ title, description, path, image, noindex, jsonLd }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    if (title) document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", path.startsWith("/product/") ? "product" : "website");
    if (image) upsertMeta("property", "og:image", image.startsWith("http") ? image : `${SITE_URL}${image}`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (image) upsertMeta("name", "twitter:image", image.startsWith("http") ? image : `${SITE_URL}${image}`);

    upsertMeta("name", "robots", noindex ? "noindex,follow" : "index,follow");

    let script = document.getElementById("seo-jsonld");
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "seo-jsonld";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, noindex, jsonLd]);
}
