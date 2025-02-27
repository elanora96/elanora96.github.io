import { LoaderFunction } from 'react-router';
import blogPosts from '@pages/blog/blogposts';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

const BASE_URL = 'https://elanora.lol';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

const rssDateFormatString = 'ddd, DD MMMM YYYY HH:mm:ss z';

export interface RssItem {
  title: string;
  link: URL | string;
  description: string;
  pubDate: Dayjs | string;
  author: string;
  guid: string;
}

export interface RssImage {
  url: URL | string;
  title: string;
  link: URL | string;
  width?: number;
  height?: number;
  description?: string;
}

export interface RssChannelOptionals {
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

export interface RssChannelObj {
  title: string;
  link: URL | string;
  description: string;
  atomLink: URL | string;
  itemArray?: RssItem[];
  metaOptionals?: RssChannelOptionals;
}

export const rssMetaDefaults: RssChannelOptionals = {
  language: 'en-us',
  generator:
    'https://github.com/elanora96/elanora96.github.io/blob/main/app/[rss.xml].tsx',
  docs: new URL('https://www.rssboard.org/rss-specification'),
  ttl: 60,
};

const rssChannel: RssChannelObj = {
  title: 'elanora.lol blog posts',
  link: new URL(`${BASE_URL}/blog`),
  atomLink: new URL(`${BASE_URL}/blog/rss.xml`),
  description: 'The collected writings of elanora96',
  itemArray: blogPosts.map((post) => ({
    description: post.description ? post.description : '',
    author: 'rss@elanora.lol (Elanora Manson)',
    pubDate: post.date.format(rssDateFormatString),
    title: post.postName,
    link: new URL(`${BASE_URL}/blog/${post.postName}`),
    guid: `${BASE_URL}/blog/${post.postName}`,
  })),
  metaOptionals: {
    copyright: 'Copyright 2023 - ∞, Elanora Manson',
    managingEditor: 'rss@elanora.lol (Elanora Manson)',
    webMaster: 'rss@elanora.lol (Elanora Manson)',
    pubDate: dayjs().tz('UTC').format(rssDateFormatString),
    ...rssMetaDefaults,
  },
};

export const generateRssChannel = (props: RssChannelObj): string => {
  const { title, description, link, atomLink, itemArray, metaOptionals } =
    props;

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
};

export const loader: LoaderFunction = () => {
  const feed = generateRssChannel(rssChannel);

  const headersObj = {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=2419200',
    },
  };

  return new Response(feed, headersObj);
};
