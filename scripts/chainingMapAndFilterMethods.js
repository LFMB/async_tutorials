var stocks = [
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
];

// creates new array
/*
var filteredStockSymbols = stocks.filter(function(stock){return stock.price >= 150.00;}).map(function(stock){return stock.symbol;});
*/

// .map is a projection funtion because it tranforms value that comes in into a new value
var filteredStockSymbols = 
	stocks.
		filter(function(stock){
			return stock.price >= 150.00;
		}).
		map(function(stock){
			return stock.symbol;
		});

filteredStockSymbols.forEach(function(symbol){
	console.log(symbol);
});