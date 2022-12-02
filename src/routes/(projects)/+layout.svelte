<script>
	import { beforeNavigate } from '$app/navigation';
	import '../../app.css';

	let show = true;
	beforeNavigate(() => (show = false));
</script>

<!-- <section class="container mt-16 pl-28"> -->
{#if show}
	<section class="max-w-screen min-h-screen p-20 border-[40px] border-black">
		<slot />
		<p class="mt-10"><a href="/" class="text-2xl font-light hover:text-orange-600">Home</a></p>
	</section>
{/if}
