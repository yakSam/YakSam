$(document).ready(function(){
<<<<<<< HEAD
var form = $('selectChannel');

var url='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBt-GgMdhwNNqDEn8yKJku0TFOD56-cSac&channelId=UC_EUMYOQE5X76O0WghEMh4Q&part=snippet&order=date&maxResults=20';
=======
var url='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBt-GgMdhwNNqDEn8yKJku0TFOD56-cSac&channelId=UCz22l7kbce-uFJAoaZqxD1A&part=snippet&order=date&maxResults=20';
>>>>>>> parent of 083c840... Update GetYouTubePlayList.js
var title
var description
$.getJSON(url,
	function(response){
		
		$.each(response.items.snippet, function(key, value){ //first level
		
			$.each(value, function(i, j){
var title = j.title;
var description = j.title;
			});		
	//title = response.items.snippet.title;
	//description = response.items.snippet.description;
	//console.log(title)
	//console.log(description)
			});


		});
	});

