<script>
	export let link = '#';
</script>

<a href={link}>
	<section class="dark:bg-grue-4 bg-grue-1 p-8 dark:text-grue-1 text-grue-4">
		<slot />
	</section>
</a>
