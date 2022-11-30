<script>
	import { range } from 'd3';

	let t = 0,
		n = 0,
		data = [];

	setInterval(() => {
		n = 10 + Math.sin(t) * 5;
		t += 0.03;
		data = range(n).map((d) => ({
			cx: d * 60 + 50,
			cy: 250 + Math.sin(d * 0.5 + t) * 220
		}));
	}, 1000 / 60);
</script>

<h2 class="text-6xl font-share mb-10">Sine Circles</h2>
<svg width="960" height="500" class="bg-blue-900">
	<filter id="glow">
		<feGaussianBlur stdDeviation="3" />
	</filter>

	{#each data as { cx, cy }}
		<circle {cx} {cy} r="20" fill="beige" />
		<circle {cx} {cy} r="20" fill="beige" filter="url('#glow')" />
	{/each}
</svg>
