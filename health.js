var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var chars = JSON.parse(xhttp.responseText);
       var charData = chars.map(function(char){
	return char
       });

	var container = document.querySelector('#char-div');
	charData.forEach(function(per) {
	    console.log(per);
	    var charDiv = document.createElement('div');
	    charDiv.classList.add('char-div');
	    charDiv.innerHTML = `
		<img height=200 src=${per.image}>
		<p>${per.name}</p>
		<p>${per.actor}</p>
		<p>${per.house}</p>
	   `;
	    container.appendChild(charDiv);
	})
    }
};
xhttp.open("GET", "https://hp-api.herokuapp.com/api/characters", true);
xhttp.send();
