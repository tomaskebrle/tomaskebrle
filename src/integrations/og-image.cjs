const fs = require("fs");
const puppeteer = require("puppeteer");
const { fileURLToPath } = require("node:url");
module.exports = (options) => {
  return {
    name: "astro-og-image",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        let path = options.config.path;
        // Filters all the routes that need OG image
        let filteredRoutes = routes.filter((route) =>
          route.pathname.includes(path)
        );

        // Creates a directory for the images if it doesn't exist already
        let directory = fileURLToPath(new URL(`./assets${path}`, dir));
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
        }

        const browser = await puppeteer.launch();
        for (const route of filteredRoutes) {
          // Gets the title
          const data = fs.readFileSync(route.distURL.pathname, "utf-8");
          let title = await data.match(/<title[^>]*>([^<]+)<\/title>/)[1];
          console.log("title", title);

          // Get the html
          const html = fs
            .readFileSync("og-image.html", "utf-8")
            .toString()
            .replace("@title", title);

          const page = await browser.newPage();
          await page.setContent(html);
          await page.waitForNetworkIdle();
          await page.setViewport({
            width: 1200,
            height: 630,
          });

          await page
            .screenshot({
              path: fileURLToPath(
                new URL(`./assets${route.pathname}.png`, dir)
              ),
              encoding: "binary",
            })
            .catch((err) => console.error(err));
        }
        await browser.close();
      },
    },
  };
};
