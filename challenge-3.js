/* Write a function that takes an integer 'minutes' and converts it to seconds. */

function convert(minutes) {
    var seconds = minutes * 60;
    return seconds;
}

convert(30);


/* Write a function that converts hours into seconds. */

function howManySeconds(hours) {
	return hours * 60 * 60;
}

howManySeconds(2);
howManySeconds(10);