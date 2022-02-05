<script>
	import DarkCard from '$lib/components/DarkCard.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<section class="dark:bg-grue-4 bg-grue-1 p-8 dark:text-grue-1 text-grue-4">
	<h1 class="text-center text-4xl mb-8">My work</h1>

	<div class="flex">
		<span class="basis-1/2">
			<DarkCard link="https://schoolmesh.com">
				<h1>SchoolMesh</h1>

				A social application designed for classes. It allows student to connect with each other, add
				posts, homework and notes to shared class.
				<br /><br />
				For frontend I used <Link href="https://sveltekit.dev">SvelteKit</Link> and <Link
					href="https://tailwincss.com">TailwindCSS</Link
				>. For registration and storing user data I used <Link href="https://firebase.google.com"
					>Firebase</Link
				>
			</DarkCard>

			<DarkCard link="https://tomaskebrle.cz">
				<h1>My personal website</h1>
				This is my personal website. It contains some contact information, and a blog where I write things
				i want to remember and which other might find useful. It is built using SvelteKit, TailwindCSS
				and Firebase. For the blog I use MDSVEX and prismjs
			</DarkCard>
		</span>

		<span class="basis-1/2">
			<DarkCard link="https://maturita-book.vercel.app">
				<h1>Maturita Book</h1>
				A web with overwiev of all book for graduation, where students can vote for their favorites,
				and also add comments to help other students with their choice<br />
				<br />
				I created this project to learn <Link href="https://reactjs.org">React</Link>, so for the
				frontend I used <Link href="https://nextjs.org">NextJS</Link>, and I also used <Link
					href="https://tailwindcss.com">TailwindCSS</Link
				>. And for the database I used NOSQL database called <Link
					href="https://firebase.google.com">Firestore</Link
				>
			</DarkCard>
			<DarkCard link="https://vodacilouny.ovh">
				<h1>Vodní skauti Louny</h1>

				A website I made for my scouts club. With news and events from it.
				<br />

				The site is made using <Link href="https://gohugo.io">hugo</Link> as static site generator and
				<Link href="https://materializecss.com">MaterializeCSS</Link>
			</DarkCard>
		</span>
	</div>
</section>
