const resetButton = document.querySelector('.reset');





function gridSize(input){
    return (input*input) 

}


function makeGrid(size){
    const tempSize = gridSize(size);
    //loop to make 16x16 grid of square divs (256)
    for(i = 1; i<=tempSize; i++){
        console.log("First grid")
        const newDiv = document.createElement('div');
        newDiv.classList.add(`col${i}`)
        newDiv.classList.add(`cell`)
        newDiv.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.backgroundColor = "orange";
        })
      //  newDiv.onmouseover.classList.add('hover')
      //  newDiv.textContent = `${i}`;
       document.querySelector('.squareGrid').appendChild(newDiv)     
       

      // for(i = 1; i<=16; i++){
       //  const newRow = document.createElement('div');
      // newRow.classList.add('row');
      // newRow.textContent = ' ';
       
       //document.querySelector(`.col${i}`).appendChild(newRow);
     //  }
     //is there a way to get this const to iterate through these and let me put a loop using the other stuff?
    } 
}




cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', (e)=>{
        cell.classList.add('active');
    })
    
});

function hover(){
    //make hover state that changes color of the div it is in
    object.addEventListener("mouseover", myScript);
}

function clearGrid(){

   const cells = document.querySelectorAll('.cell');
   for(i = 0; i < cells.length; i++){
       cells[i].remove();
       console.log('clear')
   }
}


function resetGrid(){
   const size = prompt(['What sized grid for you now me lord? Must be less than 100 '] , 16);
   if(size > 100){
       alert("number must be less than 100")
   }
   const intSize = parseInt(size) 
   const gridSize = intSize * intSize
   console.log('grid = ',gridSize, " cells, making a ", size, ' by ', size, ' grid!')
   document.querySelector('.squareGrid').style.gridTemplateColumns = `repeat(${intSize}, auto)`;
   document.querySelector('.squareGrid').style.gridTemplateRows = `repeat(${intSize}, auto`;
   
   const cells = document.querySelectorAll('.cell');
   for(i = 0; i < cells.length; i++){
       cells[i].remove();
       console.log('clear')
   }

//clearing old divs from container




    //loop to make 16x16 grid of square divs (256)
    for(i = 1; i<=gridSize; i++){
        console.log("reset")
        const newDiv = document.createElement('div');
        newDiv.classList.add(`col${i}`)
        newDiv.classList.add(`cell`)
        newDiv.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.backgroundColor = "orange";
        })
      

       document.querySelector('.squareGrid').appendChild(newDiv)  
    }   
       for(i = 0; i < cells.length; i++){
       cells[i].style.backgroundColor = "wheat";
   }

     



}

makeGrid(16);