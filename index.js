$(document).ready(function() {
  // Instructions in README.MD
});

 	$(".question").click(function(){  
   		$(this).next().slideToggle();  // next () = the next item/piece of information/"div" in your html
   		$(this).children().toggleClass(".collapse");  // toggle can only switch between 2 states; inherently.  Try to use actionable verbs.  We targeted "collapse" (if we have this class, turn off, if we have this class, turn on, etc. etc.) / if we'd used "arrow", we would be targeting both classes ('arrow up' and 'arrow collapse'), so turning BOTH on and off.  
   		// $(".arrow").toggleClass();
    });


// $(".collapse").slideToggle(this);
// var - in quotes? 
