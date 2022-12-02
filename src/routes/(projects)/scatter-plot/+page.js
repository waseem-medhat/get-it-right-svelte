export async function load({ fetch }) {
	const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv';

	const dataRes = await fetch(csvUrl);
	const data = await dataRes.text();
	return {
		iris: data
	};
}
