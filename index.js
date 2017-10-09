
// need a var for squares per side
let boxes = 4;

//number of boxes per row === to number of rows

//while loop up to number of rows, looping to make boxes per row
function addDivs(){
let i=0;
while (i<boxes) {
  for(let j=0; j<boxes; j++){
    //makes some divs
    let test = j;
   $('ul').append($("<li></li>").text(j));
    // $("<p></p>").text("Text.");   // Create with jQuery

      // console.log('make some divs!');
  }
     $('ul').append($("<p></p>"));

  //console.log('break');
  i++;
}
}

$(document).ready(function(){
  $( "button" ).on( "click", addDivs );
});
