<script>
	export let title, date;
</script>

<h1 class="mb-0 text-6xl text-grue-1 dark:text-grue-4">{title}</h1>
<h3 class="font-mono text-xl">{date}</h3>

<section class="font-mono flex">
	<a href="/post" class="hover:underline no-underline">Posts</a>
	&nbsp;/&nbsp;
	<div>{title}</div>
</section>
