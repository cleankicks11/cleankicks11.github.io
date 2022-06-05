var myHeader = document.body.getElementsByClassName('h1');

setInterval(function() {
    if (myHeader.style.color === 'blue') {
	myHeader.style.color = 'red';
    } else {
	myHeader.style.color = 'blue';
    }
}, 2000);
