---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Code from '../../components/Code.svelte'
title: How to create Open Graph images with astro
publishDate: 28 Jun 2022
description: A guide on how to create Open Graph images using an astro integration I created.
slug: how-to-create-og-images-with-astro
---

In this guide i will explain to you what Open Graph images are, and how to set them up with your astro blog.

# What even are Open Graph images?

Open graph images are images that you can see on other social media sites like twitter or discord. For example this is how Github uses OG images on their site.
![Github OG image](/assets/blog/github-og-image.png)
Or you can share this page and see how it looks yourself.

# How to add them to your website?

The problem with Open Graph images is that most sites crawl the website with javascript turned off to save resources, this means that images have to be either generated on the server along with the site when the request comes in, or generated at build time.

My integration goes about it the second way. It gets all the routes from astro, then waits for astro to build all the static pages and scrapes the title of them, which it then uses to generate the image using [Puppeteer](https://pptr.dev/), and HTML which describes how the image should look.

## Prerequisites

You will need an astro site with a blog. And then you need to install [astro-og-image package](https://www.npmjs.com/package/astro-og-image).

<Code filename="Terminal" client:load >
```bash
npm i astro-og-image
pnpm add astro-og-image
yarn add astro-og-image
```
</Code>

Lastly you need to add the `--experimental-integrations` flag to your scripts in `package.json`

<Code filename="package.json" client:load >
```json
"scripts": {
  "dev": "astro dev --host --experimental-integrations",
  "start": "astro dev --experimental-integrations",
  "build": "astro build --experimental-integrations",
  "preview": "astro preview --experimental-integrations"
}
```
</Code>
 
## Config
Now you will need to import the integration in astro config

<Code filename="astro.config.mjs" client:load>
```typescript
import {defineConfig} from "astro/config";
import astroOGImage from "astro-og-image";
export default defineConfig({
  integrations: [
    astroOGImage({
      config: {
        path: "/posts", // change this value to the folder where your posts are
        // NOTE: index.md file will not get proccesed, so please avoid it
      },
    }),
  ],
});
```
</Code>

## Creating template for the image

As I stated before the image will be created by screenshotting an HTML page. The integration will load the HTML from `og-image.html` file, so create one **in the root directory** and put your template inside.
<Code filename="og-image.html" client:load>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>@title</h1>
  </body>
</html>
```

</Code>

Note that the `@title` will then be replaced by the title of your post.

## Adding the Open Graph image property to your BaseHead

First of all you will need to add the slug property to your markdown files something like this
<Code filename="my-post.md" client:load>

```md
---
title: My first
publishDate: 28 Jun 2022
description: The very first post on my new blog
slug: my-post // <-- NOTE: slug must be the same as file name
---
```

</Code>

Then in your blogpost layout modify the BaseHead component to accept the slug as a parameter

<Code filename="BlogLayout.astro" client:load>
```astro
---
const { title, description, publishDate, slug } = content; // Destructure it here
---

<html lang={content.lang || 'en'}>
	<head>
		<BaseHead {title} {description} {slug} {publishDate} /> <!-- Pass it here -->
```
</Code>

And modify the BaseHead component meta tags.
_I recomennd that you use a fallback image for all the non posts pages, and in case something goes wrong._
<Code filename="BaseHead.astro" client:load>

```astro
---
export interface Props {
	title: string;
	description: string;
	slug: string;
}
const { title, description, slug, publishDate } = Astro.props;
---

<meta property="og:image" content={slug !== undefined ? `/assets/your-posts-folder/${slug}.png` : `/assets/fallback-image.png`} />
<meta property="twitter:image" content={slug !== undefined ? `/assets/your-posts-folder/${slug}.png` : `/assets/fallback-image.png`} />
```

</Code>

## Final steps

Great now you should be done!🎉 Deploy your site and test it out. Great site for testing this out is [Open Graph previewer](https://www.opengraph.xyz/).
