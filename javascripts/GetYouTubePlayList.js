$(document).ready(function(){
var url='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBt-GgMdhwNNqDEn8yKJku0TFOD56-cSac&channelId=UCz22l7kbce-uFJAoaZqxD1A&part=snippet&order=date&maxResults=20';
var title
var description
$.getJSON(url,
	function(response){
		
		$.each(response.items, function(key, value){ //first level
			
			console.log(value.snippet.title);
			//var title = jQuery.toArray(value.snippet.title);
			//$('#show-data p').text(value.snippet.title);

			});
		});
	});
