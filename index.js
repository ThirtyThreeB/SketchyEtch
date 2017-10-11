$(document).ready(function(){
  $( "button" ).on( "click", addLis );//adds all the <li>s to the DOM

  // $( "button .reset" ).on( "click", promptFn );//adds all the <li>s to the DOM

  // $("li").hover(function(){
  //        $(this).addClass('hovered');
  //        }, function(){
  //   $(this).removeClass('hovered');
  });


//while loop up to number of rows, looping to make boxes per row
function addLis(){
  console.log("$boxes=", $("#boxesPerSide").val());

let boxes = $("#boxesPerSide").val();
console.log('boxes=', boxes);

let sideLength = 500 / boxes;
console.log("sideLength=", sideLength);

let i=0;
while (i<boxes) {
  for(let j=0; j<boxes; j++){
   $('ul').append($("<li></li>").css({"height": sideLength + "px", "width": sideLength + "px"}));
   }//add .text(j) after .append() to have numbers appear in the boxes
    // $('ul').append($("<p></p>"));
  i++;
}
}

// function promptFn(){
//   let boxNumber = prompt("enter number of boxes per side", "16");
//   addLis(boxNumber);
// }

//having trouble getting boxes to fadeout on mouseleave.
//using :hover worked well but was just on/off
//if I had a fade delay I could have a nice mouse tail effect
//maybe will focus on some other stuff first and return

//to do:
//x//make button and grid
//X//hover effect
//try addClass() instead of :hover
//make change to box permanent

//prompt??
//reset button
//add random color
//add 10% black
