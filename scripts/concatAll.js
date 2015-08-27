/*
	learned: forEach,
			map,
			filter 


	concatAll method flattens nested data structures so it's easier to access the info within them
*/


// here's a nested data structure - an array of an array;

var exchanges = [
  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
  [
      { symbol: "JXJ", price: 120.22, volume: 5323 },
      { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

// run it on a nested array and creats a new array which contains the "flattened" results
Array.prototype.concatAll = function(){
	var results = [];

	this.forEach(function(subArray){
		subArray.forEach(function(item){
			results.push(item);
		});
	});	

	return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock){
	console.log(JSON.stringify(stock));
});

/*
exchanges.forEach(function(exchange){
	exchange.forEach(function(stock){
		console.log(JSON.stringify(stock));
	});
});
*/
