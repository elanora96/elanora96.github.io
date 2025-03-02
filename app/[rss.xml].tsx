import { LoaderFunction } from 'react-router';
import blogPosts from '@pages/blog/blogposts';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

const BASE_URL = 'https://elanora.lol';
const rssDateFormatString = 'ddd, DD MMMM YYYY HH:mm:ss z';
export const rssCfg = {
  title: "Elanora Manson's blog posts",
  link: new URL(`${BASE_URL}/blog`),
  description: "The incomplete collection of Elanora Manson's writings",
  atomLink: new URL(`${BASE_URL}/blog/rss.xml`),
  itemArray: blogPosts.map((post) => ({
    description: post.description ? post.description : '',
    author: 'rss@elanora.lol (Elanora Manson)',
    pubDate: post.date.format(rssDateFormatString),
    title: post.postName,
    link: new URL(`${BASE_URL}/blog/${post.postName}`),
    guid: `${BASE_URL}/blog/${post.postName}`,
  })),
  metaOptionals: {
    language: 'en-us',
    copyright: 'Copyright 2023 - ∞, Elanora Manson',
    managingEditor: 'rss@elanora.lol (Elanora Manson)',
    webMaster: 'rss@elanora.lol (Elanora Manson)',
    pubDate: dayjs().tz('UTC').format(rssDateFormatString),
  },
};

export const loader: LoaderFunction = () => {
  const rssFeed = new RSS(rssCfg);

  return rssFeed.toResponse();
};

interface RssItem {
  title: string;
  link: URL | string;
  description: string;
  pubDate: Dayjs | string;
  author: string;
  guid: string;
}

interface RssImage {
  url: URL | string;
  title: string;
  link: URL | string;
  width?: number;
  height?: number;
  description?: string;
}

interface RssChannelOptionals {
  language?: string;
  copyright?: string;
  managingEditor?: string;
  webMaster?: string;
  pubDate?: string;
  lastBuildDate?: string;
  category?: string;
  generator?: string;
  docs?: URL | string;
  cloud?: string;
  ttl?: number;
  image?: RssImage;
  rating?: string;
  textInput?: string;
  skiphours?: string;
  skipDays?: string;
}

interface RssChannel {
  title: string;
  link: URL | string;
  description: string;
  atomLink: URL | string;
  itemArray?: RssItem[];
  metaOptionals?: RssChannelOptionals;
}

export class RSS implements RssChannel {
  title: string;
  link: URL | string;
  description: string;
  atomLink: URL | string;
  itemArray?: RssItem[];
  metaOptionals?: RssChannelOptionals;

  private rssMetaDefaults: RssChannelOptionals = {
    generator:
      'https://github.com/elanora96/elanora96.github.io/blob/main/app/%5Brss.xml%5D.tsx',
    docs: new URL('https://www.rssboard.org/rss-specification'),
    ttl: 60,
  };

  constructor(cfg: RssChannel) {
    this.title = cfg.title;
    this.link = cfg.link;
    this.description = cfg.description;
    this.atomLink = cfg.atomLink;
    this.itemArray = cfg.itemArray;
    this.metaOptionals = { ...cfg.metaOptionals, ...this.rssMetaDefaults };
  }

  toXML() {
    const { title, description, link, atomLink, itemArray, metaOptionals } =
      this;

    return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${title}</title>
      <description>${description}</description>
      <link>${link}</link>
      ${
        metaOptionals
          ? Object.entries(metaOptionals)
              .map(([key, value]) => `<${key}>${value}</${key}>`)
              .join('')
          : ''
      }
      <atom:link href="${atomLink}" rel="self" type="application/rss+xml" />
      ${
        itemArray
          ? itemArray
              .map(
                (item) => `
        <item>
          <title><![CDATA[${item.title}]]></title>
          <description><![CDATA[${item.description}]]></description>
          <pubDate>${item.pubDate}</pubDate>
          <link>${item.link}</link>
          ${item.guid ? `<guid isPermaLink="false">${item.guid}</guid>` : ''}
        </item>`,
              )
              .join('')
          : ''
      }
    </channel>
  </rss>`;
  }

  toResponse() {
    return new Response(this.toXML(), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=2419200',
      },
    });
  }
}
