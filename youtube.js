var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(xhttp.responseText);
       var videoData = response.items.map(function(item) {
	  return item.snippet;
       });

	var container = document.querySelector('#video-div');
	container.innerHTML = '';
	videoData.forEach(function(video) {
	    console.log(video);
	    var videoDiv = document.createElement('div');
	    videoDiv.classList.add('video-div');
	    videoDiv.innerHTML = `
		<img src=${video.thumbnails.high.url}>
		<h5>${video.title}</h5>
		<p>${video.channelTitle}</p>
		<p>${video.description}</p>
		<p>${new Date(video.publishTime).toLocaleDateString()}</p>
	    `;
		container.appendChild(videoDiv);
	  })
      }
  };
  var textValue = document.querySelector('#search-bar').value
  xhttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${textValue}&maxResults=18&key=AIzaSyBLhTjN646nfPpuwCekJPre8R0c-BK24Qs`, true);
  xhttp.send();

})
