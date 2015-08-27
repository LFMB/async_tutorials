/*
By using the or combinator we combine negative and positive to get a new function called nonzero,
 which returns true if its argument is either negative or positive. 
*/

function or(p1, p2){
	return function(x){
		return p1(x) || p2(x);
	}
}

function negative(x){
	return x < 0;
}

function positive (x) {
	return x > 0;
}

var nonZero = or(negative, positive);

alert(nonZero(-5));
alert(nonZero(0));
alert(nonZero(5));


// predicate combinators: functions that build new predicates from simpler ones
// this style is sometimes called combinator pattern


// function amd and not = combinators
function and(p1, p2){
	return function(x){
		return p1(x) && p2(x);
	}
}
function not(p){
	return function(x){
		return !p(x);
	}
}

// OBJECTIVE: test if a number is within a certain range

//- create higher order functions that consumes a number
// - return a predicate that tests is anotehr number is higher or lower than original

function less(x){
	
}