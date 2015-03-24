firstGraph();
secondGraph();

// --------------------------- Graph 1 ---------------------------------

function firstGraph(){
	var parseDate = d3.time.format("%Y-%m-%d").parse;

	var margin = {top: 20, right: 80, bottom: 30, left: 50},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	var x = d3.time.scale()
	.range([0, width]);

	var y = d3.scale.linear()
	.range([height, 0]);

	var color = d3.scale.ordinal()
	.range(["#1f77b4","#d62728","#aec7e8","#ff9896"]);

	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	var line = d3.svg.line()
	.interpolate("basis")
	.x(function(d) { return x(d.week); })
	.y(function(d) { return y(d.interest); });

	var svg = d3.select("#firstGraph").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.csv("catsvsbutts.csv", function(error, data) {
		color.domain(d3.keys(data[0]).filter(function(key) { return key !== "week"; }));

		data.forEach(function(d) {
			d.week = parseDate(d.week);
		});

		var trends = color.domain().map(function(name) {
			return {
				name: name,
				values: data.map(function(d) {
					return {week: d.week, interest: +d[name]};
				})
			};
		});

		x.domain(d3.extent(data, function(d) { return d.week; }));

		y.domain([ 0, d3.max(trends, function(c) { return d3.max(c.values, function(v) { return v.interest; }); }) ]);

		svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

		svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", "-3.5em")
		.attr("font-size","1.3em")
		.style("text-anchor", "end")
		.text("Relative Interest");

		var trend = svg.selectAll(".trend")
		.data(trends)
		.enter().append("g")
		.attr("class", "trend");

		trend.append("path")
		.attr("class", "line")
		.attr("d", function(d) { return line(d.values); })
		.style("stroke", function(d) { return color(d.name); });

		trend.append("text")
		.datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
		.attr("transform", function(d) { return "translate(" + x(d.value.week) + "," + y(d.value.interest) + ")"; })
		.attr("x", 10)
		.attr("dy", ".35em")
		.attr("font-size","1.3em")
		.text(function(d) { return d.name; });
	});

}

// --------------------------- Graph 2 ---------------------------------

function secondGraph(){
	var parseDate = d3.time.format("%Y-%m-%d").parse;

	var margin = {top: 20, right: 80, bottom: 30, left: 50},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	var x = d3.time.scale()
	.range([0, width]);

	var y = d3.scale.linear()
	.range([height, 0]);

	var color = d3.scale.ordinal()
	.range(["#1f77b4","#d62728","#aec7e8","#ff9896"]);

	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left");

	var line = d3.svg.line()
	.interpolate("basis")
	.x(function(d) { return x(d.week); })
	.y(function(d) { return y(d.interest); });

	var svg = d3.select("#secondGraph").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.csv("catvsbutt.csv", function(error, data) {
		color.domain(d3.keys(data[0]).filter(function(key) { return key !== "week"; }));

		data.forEach(function(d) {
			d.week = parseDate(d.week);
		});

		var trends = color.domain().map(function(name) {
			return {
				name: name,
				values: data.map(function(d) {
					return {week: d.week, interest: +d[name]};
				})
			};
		});

		x.domain(d3.extent(data, function(d) { return d.week; }));

		y.domain([ 0, d3.max(trends, function(c) { return d3.max(c.values, function(v) { return v.interest; }); }) ]);

		svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

		svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", "-3.5em")
		.attr("font-size","1.3em")
		.style("text-anchor", "end")
		.text("Relative Interest");

		var trend = svg.selectAll(".trend")
		.data(trends)
		.enter().append("g")
		.attr("class", "trend");

		trend.append("path")
		.attr("class", "line")
		.attr("d", function(d) { return line(d.values); })
		.style("stroke", function(d) { return color(d.name); });

		trend.append("text")
		.datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
		.attr("transform", function(d) { return "translate(" + x(d.value.week) + "," + y(d.value.interest) + ")"; })
		.attr("x", 10)
		.attr("dy", ".35em")
		.attr("font-size","1.3em")
		.text(function(d) { return d.name; });
	});

}

// --------------------------- Graph 3 ---------------------------------

function thirdGraph(){
	
}

