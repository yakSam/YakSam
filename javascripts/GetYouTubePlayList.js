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
			$('#show-data').append('<h3>' + value.snippet.title + '</h3>');	
			$('#show-data').append('<p>' + value.snippet.description + '</p>');	
			$('#show-data').append('<iframe type="text/html" src="https://www.youtube.com/embed' + value.id.videoId + '?autoplay=0"></iframe>');
			});
		});
	});

