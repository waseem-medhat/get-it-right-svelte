<script>
	import { axisBottom, axisLeft, csv, csvParse, extent, format, scaleLinear, select } from 'd3';
	export let data;

	const width = 960;
	const height = 300;

	const m = { top: 30, right: 20, bottom: 50, left: 50 };

	const xAcc = (d) => d.sepal_length;
	const yAcc = (d) => d.petal_length;

	const parseRow = (d) => {
		d.sepal_length = +d.sepal_length;
		d.sepal_width = +d.sepal_width;
		d.petal_length = +d.petal_length;
		d.petal_width = +d.petal_width;
		return d;
	};

	$: vizData = csvParse(data.iris).map(parseRow);

	$: xSc = scaleLinear()
		.domain(extent(vizData, xAcc))
		.range([m.left, width - m.right]);

	let xAxisG;
	$: if (xAxisG) select(xAxisG).call(axisBottom(xSc));

	$: ySc = scaleLinear()
		.domain(extent(vizData, yAcc))
		.range([height - m.bottom, m.top]);

	let yAxisG;
	$: if (yAxisG) select(yAxisG).call(axisLeft(ySc).ticks(5).tickFormat(format(',.1f')));

	$: coords = vizData.map((d) => ({ cx: xSc(xAcc(d)), cy: ySc(yAcc(d)) }));
</script>

<h2 class="text-6xl font-share mb-10">Scatter Plot</h2>
<svg {width} {height}>
	<g class="axis" bind:this={xAxisG} transform={`translate(0, ${height - m.bottom})`} />
	<g class="axis" bind:this={yAxisG} transform={`translate(${m.left}, 0)`} />
	{#each coords as { cx, cy }}
		<circle {cx} {cy} r="3" />
	{/each}
</svg>
