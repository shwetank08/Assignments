let square = document.getElementsById('squarebox');

square.addEventListener("click",function() { 
    square.classList.remove("square");
    square.classList.add("squareAfter");
});