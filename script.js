//array for  gameBoard;
const gameBoard =[
  ['','',''],
  ['','',''],
  ['','','']
];
const gridCell = document.querySelectorAll(".grid");
const playerPic = document.getElementById("selectX");
const computerPic = document.getElementById("selectO");
const results = document.getElementById("Results");
const player = document.getElementById("playerName").value;
const playerName = document.querySelector(".playerName")

//lets have a function to update  the gameBoard
function updateGameBoard(row,col,value){
gameBoard[row][col] = value;
};


//lets add an event listener to the gridCell
const play =()=>{
  gridCell.forEach(cell=>{
    cell.addEventListener("click",()=>{
     
      //lets take player mark
      const compMark = computerPic.textContent;
      const mark = playerPic.textContent;
      cell.textContent = mark

     //lets get the datasets
     const row = parseInt(cell.dataset.row);
     const col = parseInt(cell.dataset.col);

     //lets check if the cell is empty
     if(gameBoard[row][col] === ""){
        updateGameBoard(row,col,mark);
      
        //logic of computer printing a random mark in the array gameBoard
        let emptyCell = []
        gameBoard.forEach((rowArray,rowIndex)=>{
          rowArray.forEach((cellValue,colIndex)=>{
            if(cellValue ===''){
              emptyCell.push({row:rowIndex,col:colIndex})
            }
          });
         
        });

        //lets check if the emptyCell is empty
        if(emptyCell.length >= 0){
          const randomComputerPic = emptyCell[Math.floor(Math.random()*emptyCell.length)]

          //we should now update the gameBoard with computers random number
          updateGameBoard(randomComputerPic.row , randomComputerPic.col,compMark)
          gridCell[randomComputerPic.row*3 + randomComputerPic.col].textContent = compMark;
        }
        checkWinner(gameBoard);
     }
     if(player === null){
      playerName.textContent = player;
     
     }
    

  });
  });
 
}
play();

   //function reset button to start a fresh the game
   document.querySelector(".restart").addEventListener("click",()=>{

    //here you must point each gameBoards rowIndex,and col index
    gameBoard.forEach((rowArray,rowIndex)=>{
      rowArray.forEach((cellValue,colIndex)=>{
        gameBoard[rowIndex][colIndex] = ""
      })
    })
    //set the grid textContent to empty
       gridCell.forEach(cell =>{
        cell.textContent = ""
        results.textContent = ""
     
       })    
   });


   //lets have a red flag to tell the game over
   let isGameOver = false;

//check if the player wins or computerWins
//lets try to loop around the rows and columns
function checkWinner(gameBoard){
  for(let i = 0; i<3;i++){
    //lets loop around the row and check if they match
    if(isGameOver && gameBoard[i][0]!== null && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1]===
      gameBoard[i][2]){
      results.textContent = `player  marker ${gameBoard[i][0]} WON`;
      isGameOver = true;
    }
        //lets check on the columns 
     else if(isGameOver && gameBoard[0][i]!== null && gameBoard[0][i]===gameBoard[1][i]&& gameBoard[1][i]===
          gameBoard[2][i]){ 
              results.textContent = `player marker ${gameBoard[0][i]} WON`;
              isGameOver = true

          }

          //lets loop around the diagonal
         else if(isGameOver && gameBoard[2][0]!== null && gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1]===
            gameBoard[2][0]){
             
                  results.textContent = `player ${gameBoard[2][0]} is the winner`
                  isGameOver = true
            }

         //loop the other diagonal
        else if(isGameOver && gameBoard[0][0]!== null && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1]===
          gameBoard[2][2]){
            
                results.textContent = `player ${gameBoard[0][0]} is the winner`
                isGameOver = true
          }else{
            results.textContent = `Its a TIE between you and ARTIFICIAL INTELLIGENCE`
            isGameOver = true
          }
      }  
     
      
      
  }














