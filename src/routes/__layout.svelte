<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
		rel="stylesheet"
	/>
	<script src="https://kit.fontawesome.com/6397fa2db2.js" crossorigin="anonymous"></script>
</svelte:head>
<main class="h-screen dark:selection:bg-grue-3">
	<slot />
</main>
