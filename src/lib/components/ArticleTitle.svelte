<script>
	export let title, date, time;
	import { page } from '$app/stores';

	const pathnameArray = $page.url.pathname.split('/');
</script>

<section class="font-mono flex cursor-pointer mb-2">
	<a href="/" class="hover:underline no-underline">home</a>
	&nbsp;/&nbsp;
	<a href="/post" class="hover:underline no-underline">posts</a>
	&nbsp;/&nbsp;
	<a href={$page.pathname} class="hover:underline no-underline">{pathnameArray[2]}</a>
</section>
<h1 class="mb-4 text-6xl text-grue-1 dark:text-grue-4">{title}</h1>
<div class="flex">
	<h3 class="font-mono text-xl m-0">{date}</h3>
	&nbsp;&nbsp;-&nbsp;&nbsp;
	{#if time}
		<h3 class="font-mono text-xl">{time} minutes to read</h3>
	{/if}
</div>
