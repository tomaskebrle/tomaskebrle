<script>
	import Typewriter from 'svelte-typewriter';
	import dayjs from 'dayjs';

	let age;
	setInterval(() => {
		age = dayjs().diff(dayjs(1125525600000), 'year', true);
	}, 50);

	let visible = false;
	let height = 'h-full fixed';
</script>

<section
	class="{height} w-full flex justify-center items-center bg-grue-4 dark:bg-grue-1 transition-all duration-1000 text-center dark:text-grue-4 text-grue-1 font-mono"
>
	<div>
		<Typewriter
			cascade
			interval={70}
			cursor="0e0c1f"
			on:done={() => {
				height = 'h-4/6';
				visible = true;
			}}
		>
			<h1 class="text-6xl font-mono mb-8">&#123;tomáš kebrle&#125;</h1>
		</Typewriter>

		{#if visible}
			<div class="flex justify-center">
				A {age.toPrecision(14)}
				year old developer
			</div>
		{/if}
	</div>
</section>
