export type MetaInput = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locales?: Array<{ hreflang: string; href: string }>;
  /** Optional type for OG (article, website, etc.) - defaults to 'website' */
  type?: string;
  /** Optional site name for og:site_name */
  siteName?: string;
};

function upsertMetaTag(selector: string, attrs: Record<string, string>, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    el.setAttribute('data-generated', 'true');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function setMeta({ title, description, image, url, locales, type, siteName }: MetaInput) {
  if (title) document.title = title;

  if (description) upsertMetaTag('meta[name="description"]', { name: 'description' }, description);
  if (title) upsertMetaTag('meta[property="og:title"]', { property: 'og:title' }, title);
  if (description) upsertMetaTag('meta[property="og:description"]', { property: 'og:description' }, description);
  if (image) upsertMetaTag('meta[property="og:image"]', { property: 'og:image' }, image);
  if (url) upsertMetaTag('meta[property="og:url"]', { property: 'og:url' }, url);

  // OG type and site name
  upsertMetaTag('meta[property="og:type"]', { property: 'og:type' }, type || 'website');
  if (siteName) upsertMetaTag('meta[property="og:site_name"]', { property: 'og:site_name' }, siteName);

  if (url) {
    // canonical
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"][data-generated="true"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('data-generated', 'true');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  // Twitter card meta
  if (image) {
    upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, image);
  } else {
    upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary');
  }
  if (title) upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
  if (description) upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description);

  // remove existing hreflang alternates we generated
  document.head.querySelectorAll('link[rel="alternate"][data-generated="true"]').forEach((n) => n.remove());

  // add provided alternates
  if (locales && locales.length) {
    locales.forEach((l) => {
      const a = document.createElement('link');
      a.setAttribute('rel', 'alternate');
      a.setAttribute('hreflang', l.hreflang);
      a.setAttribute('href', l.href);
      a.setAttribute('data-generated', 'true');
      document.head.appendChild(a);
    });
  }
}

export function addJsonLd(obj: object) {
  const id = 'generated-json-ld';
  // remove old
  document.head.querySelectorAll(`script[type=\"application/ld+json\"][data-generated=\"true\"]`).forEach((n) => n.remove());
  const s = document.createElement('script');
  s.setAttribute('type', 'application/ld+json');
  s.setAttribute('data-generated', 'true');
  s.textContent = JSON.stringify(obj);
  document.head.appendChild(s);
}

export function clearGeneratedMeta() {
  document.head.querySelectorAll('[data-generated="true"]').forEach((n) => n.remove());
}
