$(document).ready(function(){
var url='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBt-GgMdhwNNqDEn8yKJku0TFOD56-cSac&channelId=UCz22l7kbce-uFJAoaZqxD1A&part=snippet&order=date&maxResults=20';
var title
var description
$.getJSON(url,
	function(response){
		//var output = '';
		//$.each(response.items.snippet, function(key,value) {
		//$.each(response.snippet, function(key,value) {
		//	output += '<li>' + value.title + '</li>';
		//});
		//$('#show-data').html(output);
		
		$.each(response.items, function(key, value){ //first level
		
		var test = value.snippet;
		
			$.each(test.title, function(i, j){
				
				console.log(j);
//var title = j.title;
//var description = j.title;
			});		
			});
		});
	});
