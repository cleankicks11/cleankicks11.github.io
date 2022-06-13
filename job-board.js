/*
API communications AJAX request
1. sEdn AJAX request ot API URL
2. Test request to make it works
3. Use the data to creat html

*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var data = JSON.parse(xhttp.responseText);
       var container = document.getElementById('container');
	console.log(data);
//forEach method with function to create dynamic elements and organize the JSON response data
       data.slice(1).forEach(function(row, i) {
	     var rowDiv = document.createElement('div');
	     rowDiv.classList.add('row');
	     rowDiv.innerHTML = `
	      <div class="left-section">
		<h5 class="company">${row.company}</h5>
		<h3 class="position">${row.position}</h3>
		<p class="location">${row.location}</p>
	      </div>
	      <div class="mid-section">
		<p class="tag">${row.tags}</p>
	      </div>
	      <div class="mid-right-section">
		${new Date(row.date).toLocaleString()}
	      </div>
	      <div class="right-section">
		<a href=${row.url}>
		<button class="apply">Apply</button>
		</a>
	      </div>
	    `;
	    container.appendChild(rowDiv);
		console.log(row.tags);
	});
    }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();
