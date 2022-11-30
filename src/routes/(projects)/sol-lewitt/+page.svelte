<script>
	import { range, symbols } from 'd3';
	import Mask from './Mask.svelte';

	const width = 980;
	const height = 140;
	const sWidth = width / symbols.length;
</script>

<h2 class="text-6xl font-share mb-10">Sol Lewitt Reproduction</h2>
<svg {width} {height}>
	<!-- Horizontal Bars -->
	<g>
		{#each range(100) as i}
			<rect y={i * 20} {width} height="10" mask="url('#bg-mask')" />
		{/each}
	</g>

	<!-- Vertical Bars -->
	<g>
		{#each range(100) as i}
			<rect x={i * 20} {height} width="10" mask="url('#fg-mask')" />
		{/each}
	</g>

	<Mask maskId="fg-mask" {height} {sWidth} />
	<Mask maskId="bg-mask" {height} {sWidth} inverted={true} />
</svg>
