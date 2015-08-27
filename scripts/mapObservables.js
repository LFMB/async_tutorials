var Observable = Rx.Observable;

var clicks = Observable.fromEvent(button, 'click');

var points = 
	clicks.map(function(e){
		return {x: e.clientX, y: e.clientY};
	});

// asynchronously
var subscription =
	points.forEach(
		function onNext(point){
			alert('clicked:' + JSON.stringify(point));
			subscription.dispose()
		},
		function onError(error){
			console.log('ERROR!');
		},
		function onCompleted(){
			console.log('done');
		}
	);


