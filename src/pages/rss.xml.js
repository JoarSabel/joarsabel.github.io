import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'joar.a.developer',
    description: 'A collection of random thoughts regarding various things',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
