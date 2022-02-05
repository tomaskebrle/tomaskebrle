<script>
	import DarkCard from './DarkCard.svelte';
	import ArticleTitle from './ArticleTitle.svelte';
	export let posts;
</script>

<section class="dark:bg-grue-4 bg-grue-1 p-8 dark:text-grue-1 text-grue-4">
	<h1 class="text-center text-4xl mb-8">Recent blog posts</h1>
	<div class="grid lg:grid-cols-2">
		{#each posts as { slug, title, author, description, date }}
			<DarkCard link={`posts/${slug}`}>
				<h1 class="mb-0">{title}</h1>
				<h3 class="font-mono">{date}</h3>
				<p>
					{description}
				</p>
			</DarkCard>
		{/each}
	</div>
</section>
