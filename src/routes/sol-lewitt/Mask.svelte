<script>
	import { range, symbol, symbols } from 'd3';

	export let maskId = '';
	export let inverted = false;
	export let height, sWidth;

	const c1 = inverted ? 'white' : 'black';
	const c2 = inverted ? 'black' : 'white';
</script>

<mask id={maskId}>
	{#each range(symbols.length) as i}
		<rect x={i * sWidth} width={sWidth} {height} fill={i % 2 ? c1 : c2} />
	{/each}

	{#each range(symbols.length) as i}
		<g transform={`translate(${(i + 0.5) * sWidth}, ${0.5 * height})`}>
			<path d={symbol(symbols[i], 5000)()} fill={i % 2 ? c2 : c1} />
		</g>
	{/each}
</mask>
