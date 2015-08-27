// Oberservables are just like an array - while not data is stored in memory. it's collection of data that arrives over time


var Observable = Rx.Observable;

var button = document.getElementById('button');

/*
var handler = function(e){
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');
/*
clicks.forEach(function(e){
	alert('clicked');
});
*/

// synchronously 
/*
try{
	[1,2,3].forEach(function(i){
		console.log(i);
	})

	console.log('done');
}
catch(e){
	console.log('Error!');	
}
*/

// asynchronously
var subscription =
	clicks.forEach(
		function onNext(e){
			alert('clicked');
			// to exit out of your eventListener
			subscription.dispose()
		},
		function onError(error){
			console.log('ERROR!');
		},
		function onCompleted(){
			console.log('done');
		}
	);


