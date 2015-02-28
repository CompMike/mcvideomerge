$(document).ready(function(){
//open close options block
var $options = $('#options');
var $ob = $('#optionsBlock');
$options.click(function() {
	$ob.toggleClass('show');
});
var output;
var ytid;
var input;
var vmid;
var vzid;
var options = "";

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
		output = "*|YOUTUBE:[$vid="+ ytid + options + "]|*";
		$("#output").html(output);
	} else if(service === "vimeo"){
		output = "*|VIMEO:[$vid="+ vmid + "]|*";
		$("#output").html(output);
	} else if(service === "vzaar"){
		output = "*|VZAAR:[$vid="+ vzid + "]|*";
		$("#output").html(output);
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
		console.log("this is not youtube");
		findService("vimeo",input);
	}
	if (input.match(vz) != null) {
	vzid = input.match(vz)[1];
	console.log("something");
	console.log("this is not youtube");
	findService("vzaar",input);
	}
	//find service
});

//Options
var addOptions = function() {
		if($(this).val() === "Title") {
		 options = options + ", $title=N";
		}
	console.log(options);
}

$("input[type=checkbox]").on("click",addOptions);
})
