<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		const post = await fetch(`${url.pathname}.json`).then((res) => res.json());

		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	import { onMount } from 'svelte';
	export let post;
	let article;
	let time;
	const calculateReadingTime = () => {
		const text = article.innerText;
		const wpm = 250;
		const words = text.trim().split(/\s+/).length;
		time = Math.ceil(words / wpm);
	};
	onMount(() => {
		calculateReadingTime();
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/prism-nord.css" />
</svelte:head>

<PageHead title={post.title} description={post.description} />
<article
	class="dark:bg-grue-1 bg-grue-4 text-grue-1 dark:text-grue-4 min-h-screen"
	bind:this={article}
>
	<div
		class="mx-auto py-16 prose dark:prose-invert prose-headings:font-mono prose-headings:no-underline prose-a:prose-headings:no-underline prose-a:font-mono"
	>
		<ArticleTitle title={post.title} date={post.date} {time} />
		<slot />
	</div>
</article>
