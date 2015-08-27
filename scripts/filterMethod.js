//filter through an array to find a certain propeerty
function getStocksOver(stocks, minPrice){
	/*
	var results = [];
	
	stocks.forEach(function(stock){
		if (stock.price >= minPrice){
			results.push(stock);
		}	
	});

	return results;
	*/
	return stocks.filter(function(stock){
		return stock.price >= minPrice;
	});
}

// predicates is a function that takes one item as input and returns either true or false based on if the 
// item satisfies a certain condition
/*
Array.prototype.filter = function(predicate){
	var return = [];

	this.forEach(function(item){
		if (predicate(item)){
			results.push(item);
		}
	});

	return results;
};
*/
var expensiveStocks = getStocksOver(
	[
	{ symbol: "XFX", price: 240.22, volume: 23432 },
	{ symbol: "TNZ", price: 332.19, volume: 234 },
	{ symbol: "JXJ", price: 120.22, volume: 5323 },
	],
	150.00);

console.log(JSON.stringify(expensiveStocks));