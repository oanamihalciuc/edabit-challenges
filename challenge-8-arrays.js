/* Create a function that takes an array of numbers or letters and returns a string. */
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef" 

function arrayToString(arr) {
    let x = arr.join('');
    return x;
   }


/* Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes. */
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

function getVoteCount(votes) {
	let voteCount = votes.upvotes - votes.downvotes;
	return voteCount
}


/* Create a function to concatenate two integer arrays. */
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

function concat(arr1, arr2) {
	return arr1.concat(arr2);
}


/* Write a function to reverse an array. */
//reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
//reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

function reverse(arr) {
	return arr.reverse();
}


/* Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

wins get 3 points
draws get 1 point
losses get 0 points */

// footballPoints(3, 4, 2) ➞ 13

function footballPoints(wins, draws, losses) {
    let totalPoints = (wins * 3) + (draws * 1) + (losses * 0);
    return totalPoints;
}



