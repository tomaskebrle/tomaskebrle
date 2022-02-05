<script>
	export let link = '#';
</script>

<a href={link}>
	<section class="bg-grue-4 dark:bg-grue-1 text-grue-1 dark:text-grue-4 p-4 rounded-md m-4">
		<slot />
	</section>
</a>
