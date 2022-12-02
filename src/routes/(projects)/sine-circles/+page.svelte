<script>
	import { range } from 'd3';
	import { fade } from 'svelte/transition';

	let t = 0,
		n = 0,
		data = [];

	setInterval(() => {
		n = 7 + Math.sin(t) * 8;
		t += 0.01;
		data = range(n).map((d) => ({
			cx: d * 60 + 50,
			cy: 150 + Math.sin(d * 0.5 + t) * 120
		}));
	}, 1000 / 50);
</script>

<h2 class="text-6xl font-share mb-10">Sine Circles</h2>
<svg width="960" height="300" class="bg-blue-900">
	<filter id="glow">
		<feGaussianBlur stdDeviation="3" />
	</filter>

	{#each data as { cx, cy }}
		<circle {cx} {cy} r="20" fill="beige" transition:fade={{ duration: 500 }} />
		<circle
			{cx}
			{cy}
			r="20"
			fill="beige"
			filter="url('#glow')"
			transition:fade={{ duration: 500 }}
		/>
	{/each}
</svg>
