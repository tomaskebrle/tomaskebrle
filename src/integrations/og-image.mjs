import { readFile } from "node:fs/promises";
import puppeteer from "puppeteer";
export default function postsToOGimage() {
  return {
    name: "astro-og-image",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        console.log(routes);
        const data = await readFile(routes[1].distURL.pathname, {
          encoding: "utf-8",
        });
        let title = data.match(/<title[^>]*>([^<]+)<\/title>/)[1];
        console.log(title);

        let html = `
          <html>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Poppins", sans-serif;
        background-image: linear-gradient(
            0deg,
            #031927 35%,
            rgba(3, 25, 39, 0.85) 100%
          ),
          url("https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?cs=srgb&dl=pexels-rodrigo-santos-3888151.jpg&fm=jpg");
        background-position: center;
        background-size: cover;
        color: white;
      }
      h1 {
        height: 90vh;
        font-size: 8rem;
        margin: 2rem;
        margin-top: 4rem;
      }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
  </body>
</html>

        `;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        await page.waitForNetworkIdle();
        await page.setViewport({
          width: 1200,
          height: 630,
        });
        await page.screenshot({ path: `/dist/assets/${title}` });

        await browser.close();
      },
    },
  };
}
