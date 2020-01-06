import * as d3 from 'd3';

const data = [20, 12, 14, 13, 1];

const ChartWrapper = (props) => {
	// select must begin with a letter value, wont work with int.
	const svg = d3.select(`.${props.pinID}`)
		.append("svg")
			.attr("width", 500)
			.attr("height", 500);

		const rects = svg.selectAll("rect")
			.data(props.pinData);
		
		rects.enter()
			.append("rect")
			.attr("x", (d, i) => i * 100)
			.attr("y", 50)
			.attr("width", 50)
			.attr("height", d => d)
			.attr("fill", d => {
				if (d > 13) {
					return "red"
				}
				return "green"
			});
};

export default ChartWrapper;