// check off item by clicking
// when an li is clicked inside of a ul
$("ul").on("click", "li", function(){
	// toggle the completed class
	$(this).toggleClass("completed");
});

// this, rather than $("li").click(function(){....})
// because the clicked on element has to exist when the page first loads
// and the ul always exists, but lis get added dynamically
// and on.("click", "li") works on lis that may or may not exist yet

// delete item by clicking on x
$("ul").on("click", "span", function(){
	// fade out the span an it's parent, the li...
	$(this).parent().fadeOut(500, function(){
		// ... and when that is done, remove it entirely
		$(this).remove();
	});
	// and prevent it from firing the click-on-li function above
	event.stopPropagation();
});

// handle the input
// when the keypress occurs, listen for an event
$("input[type='text']").keypress(function(event){
	// that event being hitting the enter key
	if(event.which === 13){
		// save the input value into a variable
		var todoText = $(this).val();
		// and then clear the input field
		$(this).val("");
		// create a new li and add to ul
		// append() takes its content and renders it as html
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
