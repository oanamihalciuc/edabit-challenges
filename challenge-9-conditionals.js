/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */
//lessThan100(22, 15) ➞ true; 22 + 15 = 37
//lessThan100(83, 34) ➞ false; 83 + 34 = 117

function lessThan100(a, b) {
	if(a + b < 100) {
        return true 
    } else {
        return false
    }
}

/* Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false. */
//profitableGamble(0.2, 50, 9) -> true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay && pay > 0) {
        return true
    } else {
        return false
    }
}

/* Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string. */
// comp("AB", "CD") ➞ true
//comp("ABC", "DE") ➞ false

function comp(str1, str2) {
	if (str1.length == str2.length) {
        return true
    } else {
        return false
    }
}