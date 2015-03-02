$(document).ready(function(){
//open close options block
var $options = $('#options');
var $ob = $('#optionsBlock');
$options.click(function() {
	$ob.toggleClass('show');
});
var output = "...";
var ytid;
var input;
var vmid;
var vzid;

//Youtube Regex
//http://www.rubular.com/r/j5oqOj62df
var yt = /^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*([\w-]{11})/;

//Vimeo Regex will match urls of the type below
//http://www.rubular.com/r/cWKFAxHM30
//Needs to support these formats:
//https://vimeo.com/*
//https://vimeo.com/channels/*/*
//https://vimeo.com/groups/*/videos/*
var vm = /vimeo.com\/(\d+)($|\/)/;

//http://view.vzaar.com/344767.flashplayer
//http://www.rubular.com/r/CkKZyVnBOi
var vz = /vzaar.com\/(\d+)/;

//grab the link from the input field and stop default action
var findService = function(service,url) {
	if (service === "youtube") {
		output = "*|YOUTUBE:[$vid="+ ytid;
		$("#output").html(output  + "]|*");
	} else if(service === "vimeo"){
		output = "*|VIMEO:[$vid="+ vmid;
		$("#output").html(output + "]|*");
	} else if(service === "vzaar"){
		output = "*|VZAAR:[$vid=";
		$("#output").html(output+ vzid + "]|*");
	}
}
$('#submit').on("click", function(){
	input = $('#input').val();
	if (input.match(yt) != null) {
		ytid = input.match(yt)[4];
		console.log("this is youtube");
		findService("youtube",input);
	}
	if (input.match(vm) != null) {
		vmid = input.match(vm)[1];
		console.log("something");
		console.log("this is vimeo");
		findService("vimeo",input);
	}
	if (input.match(vz) != null) {
	vzid = input.match(vz)[1];
	console.log("something");
	console.log("this is vzaar");
	findService("vzaar",input);
	}
	//find service
});

//Options
var addOptions = function() {
		var options = "";
		var endMergeTag = "";
		if(document.getElementById("width").checked) {
			// var width = prompt("Enter a width, 450 is the max.");
		 	options += ", $max_width=450"
		}
		if(document.getElementById("title").checked) {
		 options += ", $title=Y";
		}
		if(document.getElementById("border").checked) {
		 options += ", $border=Y";
		}
		if(document.getElementById("trim_border").checked) {
		 options += ", $trim_border=Y";
		}
		if(document.getElementById("ratings").checked) {
		 options += ", $ratings=Y";
		}
		if(document.getElementById("views").checked) {
		 options += ", $views=Y";
		}
		if(document.getElementById("watch_url").checked) {
		 options += ", $watch_URL=Y";
		}
		var endMergeTag = "]|*";
	  var completeMergeTag = output + options  + endMergeTag;
	  document.getElementById('output').innerHTML = completeMergeTag;
	console.log("options = " + options);
}
$("#form").on('change', addOptions);
//run once at startup

})
