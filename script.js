const grid = document.querySelector('.squareGrid')


function makeGrid(){
    //loop to make 16x16 grid of square divs (256)
    for(i = 1; i<=16; i++){
        console.log("test")
        const newDiv = document.createElement('div');
        newDiv.classList.add(`col${i}`)
        newDiv.textContent = `${i}`;
       document.querySelector('.squareGrid').appendChild(newDiv)     
       

      // for(i = 1; i<=16; i++){
         const newRow = document.createElement('div');
       newRow.classList.add('row');
       newRow.textContent = ' ';
       
       document.querySelector(`.col${i}`).appendChild(newRow);
     //  }
     //is there a way to get this const to iterate through these and let me put a loop using the other stuff?
    } 


}
makeGrid();