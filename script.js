var clickCount = 0;
var firstColor = "";
var secondColor = "";


$(document).ready(function() {
  
  $(".picture-box").click(function() { 
    turnSquare( $(this) );
    
  });
  
  
});


function turnSquare(squareObject)
{
 
  clickCount = clickCount + 1;

   
  $("#clickCount").html(clickCount);
  
  var secretSquareColor = squareObject.data("color");
  squareObject.css("background-color", secretSquareColor);  
 
  if ( clickCount == 1) {
    firstColor = secretSquareColor;
  }
  if (clickCount == 2){
    secondColor = secretSquareColor;
    checkMatches();
  }
}



function checkMatches(){

  if(firstColor==secondColor) {
    alert("You Won!");
  }
  else { 
    alert(":)) too bad!");
  }

  
  resetSquares();

}


function resetSquares()
{

  
  clickCount = 0;
  
  $("#clickCount").html(clickCount);
  
  $(".picture-box").css("background-color", "#cccccc");
  
    

}