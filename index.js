$(document).ready(function(){
  $("#boxMaker").on("click", addLis);//adds all the <li>s to the DOM

  $("#reset").on("click", promptFn);//adds all the <li>s to the DOM


 // $(".box").click(function(event) {
 //    changeBox();  
 //  });
  //not sure why this isn't working

  // $("li").hover(function(){
  //        $(this).addClass('hovered');
  //        }, function(){
  //   $(this).removeClass('hovered');
  


//while loop up to number of rows, looping to make boxes per row
function addLis(input){
  // console.log("$boxes=", $("#boxesPerSide").val());
let boxes = input;
// let boxes = $("#boxesPerSide").val();
console.log('boxes=', boxes);

let sideLength = 500 / boxes;
console.log("sideLength=", sideLength);

let i=0;
while (i<boxes) {
  for(let j=0; j<boxes; j++){
   $('ul').append($("<li></li>").css({"height": sideLength + "px", "width": sideLength + "px"}));
   }//add .text(j) after .append() to have numbers appear in the boxes
  i++;
}

  $("li").on('mouseover', function() {//turns out his had to be inside this fn block
    $(event.target).addClass("hovered");
  });    
}


function promptFn(){
  reset();
  let boxNumber = prompt("enter number of boxes per side", "16");
  // let boxes = boxNumber;
  console.log("boxNumber=", boxNumber);
  addLis(boxNumber);
}

function changeBox() {
  $(event.target).css("background-color", "rgba(0, 170, 255, 0.9)");
  console.log('changeBox works');
}

function reset() {
  $("li").remove();
  console.log('reset');
}



});
//having trouble getting boxes to fadeout on mouseleave.
//using :hover worked well but was just on/off
//if I had a fade delay I could have a nice mouse tail effect
//maybe will focus on some other stuff first and return

//to do:
//x//make button and grid
//X//hover effect
//try addClass() instead of :hover// no luck at all
//make change to box permanent

//x//prompt
//x//reset button
//add random color
//add 10% black
