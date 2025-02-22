import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';

export const links: Route.LinksFunction = () => [
  { rel: 'shortcut icon', type: 'image', href: './assets/images/favicon.ico' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <title>elanora.lol</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          id="spa-github-pages"
          dangerouslySetInnerHTML={{
            __html: `
            // Single Page Apps for GitHub Pages
            // MIT License
            // https://github.com/rafgraph/spa-github-pages
            // This script checks to see if a redirect is present in the query string,
            // converts it back into the correct url and adds it to the
            // browser's history using window.history.replaceState(...),
            // which won't cause the browser to attempt to load the new url.
            // When the single page app is loaded further down in this file,
            // the correct url will be waiting in the browser's history for
            // the single page app to route accordingly.
            (function (l) {
              if (l.search[1] === '/') {
                var decoded = l.search
                  .slice(1)
                  .split('&')
                  .map(function (s) {
                    return s.replace(/~and~/g, '&');
                  })
                  .join('?');
                window.history.replaceState(
                  null,
                  null,
                  l.pathname.slice(0, -1) + decoded + l.hash,
                );
              }
            })(window.location);`,
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
