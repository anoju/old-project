onmessage = function (event) {
	var i=event.data;
	for (n=1000001; i<n; i++) {
		postMessage(i);
	};
};