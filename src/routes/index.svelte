<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('/posts.json?limit=5').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Landing from '$lib/components/Landing.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import BlogPosts from '$lib/components/BlogPosts.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageHead from '$lib/components/PageHead.svelte';
	export let posts;
</script>

<PageHead title="Home" description="Personal website and blog" />

<Landing />
<About />
<Contact />
<BlogPosts {posts} />
<Footer />
