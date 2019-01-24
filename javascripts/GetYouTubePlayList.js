$(document).ready(function(){
var url='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBt-GgMdhwNNqDEn8yKJku0TFOD56-cSac&channelId=UCz22l7kbce-uFJAoaZqxD1A&part=snippet&order=date&maxResults=20';
var title
var description
$.getJSON(url,
	function(response){
		var output = '';
		//$.each(response.items.snippet, function(key,value) {
		$.each(response.snippet, function(key,value) {
			output += '<li>' + value.title + '</li>';
		});
		$('#show-data').html(output);
		
		
	/*title = response.items[0].snippet.title;
	description = response.items[0].snippet.description;
	console.log(title)
	console.log(description)*/ 
	});
});
