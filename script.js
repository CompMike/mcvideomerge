$(document).ready(function(){
//open close options block
var $options = $('#options');
var $ob = $('#optionsBlock');
$options.click(function() {
	$ob.toggleClass('show');
});
var output;

//grab the link from the input field and stop default action
var input;
// console.log(input);
// var yt = "/(youtube)/g";
// var output = "";
// $('#input').focus(function() {
// 	var input = $('#input').val();
// 	$('#output').append(input);
// });
	var findService = function(service,url) {
		if (service === "youtube") {
			output = "*|YOUTUBE:[$vid=]|*";
			$("#output").append(output);
		} else {
			output = "unsupported service";
			$("#output").append(output);
		}
	}
$('#submit').on("click", function(){
	input = $('#input').val();
	var yt = /^https?:\/\/(?:www\.)?youtube.com\/watch\?v=\w+(&\S*)?$/;
	if (input.match(yt) != null) {
		console.log("this is youtube");
		findService("youtube",input);
	} else {
		console.log("not youtube");
	}

	//find service
});

//determine what service the link uses

//parse youtube

//parse bliptv

//parse vimeo

//parse vzaar

//parse wistia


//output onto page
// var output = "*|" + service + ":[$vid=" + id + "]|*";

// outputwithoptions
// //copy to clipboard
// function copy2clipboard() {

// }


  // $(".button").click(function(){

  //   /*convert away*/
  //   if($('#on').is(':checked')) {
  //     $('#theResult').val(converter($('textarea#theText').val(), 'ascii'));
  //   }
  //   else {
  //     $('#theResult').val(converter($('textarea#theText').val(), 'binary'));
  //   }

  //   /* bring her down*/
  //   $("#panel").slideDown("slow");
  // });

  // /*tidy on change*/
  // $("#theText,:radio").click(function(){
  //    /* send her up*/
  //   $("#panel").slideUp("slow");
  //   this.value = '';
  // });

});
