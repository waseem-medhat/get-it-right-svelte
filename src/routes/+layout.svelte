<script>
	import '../app.css';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<!-- <section class="container mt-16 pl-28"> -->
<section class="max-w-screen h-screen p-20 border-[40px] border-black grid">
	{#key data.url}
		<div in:fly={{ x: 20, duration: 250, delay: 300 }} out:fly={{ x: -20, duration: 250 }}>
			<slot />
		</div>
	{/key}
</section>

<style global>
	body {
		overflow: hidden;
	}
</style>
