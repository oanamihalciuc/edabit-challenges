/* Write a function that takes the base and height of a triangle and return its area. */

function triArea(base, height) {
	return (base * height) / 2;
}

triArea(3, 2);
triArea(4, 7);

/* Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers. */

function nextEdge(side1, side2) {
	if (Number.isInteger(side1) && Number.isInteger(side2)) {
		return (side1 + side2) -1;
	} else {
		console.log(`The numbers are not integers.`)
	}
}

nextEdge(8, 10);
nextEdge(1, 5.5);