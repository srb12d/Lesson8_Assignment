/**
* Created with LIS2360_Lesson8_jQuery.
* User: srb12d
* Date: 2015-11-10
* Time: 04:34 PM
* To change this template use Tools | Templates.
*/
//    Project Name:  Recipe Display Application
 //     Author: Shayna Billheimer
//      Date:   11/10/15

//      Filename: script.js
   
function display(event){
    
    $(event.currentTarget).next().fadeIn("slow");
    
}// end of display()

/*
$("h3").click(display);
*/

function display2(event) {
    
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}


$("h3").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});


/*
$("h3").click(display2);
*/

$("h3").hover(display2);