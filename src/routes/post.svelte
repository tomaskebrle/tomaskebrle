<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('/posts.json').then((res) => res.json());

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PostsLanding from '$lib/components/PostsLanding.svelte';
	import BlogPosts from '$lib/components/BlogPosts.svelte';
	export let posts;
</script>

<PostsLanding />
<BlogPosts {posts} />
