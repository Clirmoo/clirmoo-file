const board=document.getElementById('content');
const cells=document.querySelectorAll('.cell');
const startBtn=document.getElementById('start-btn');
const messageBox=document.getElementById('message');
let player1Score=0;
let player2Score=0;
let currentPlayer='X';


cells.forEach(cell=> {
    cell.addEventListener('click',handleCellClick);
});

startBtn.addEventListener('click',startGame);

function startGame(){
    board.style.display="flex";
    player1Score=0;
    player1Score=0;

    player1Scoreboard.textContent=player1Score;
    player2Scoreboard.textContent=player2Score;
    clearCells();
    removeClassCell();

    messageBox.innerHTML=" ";
    currentPlayer='X';
}

function handleCellClick(e){
    const cell=e.target;
    if (cell.textContent===''){
       cell.classList.add(currentPlayer);
       cell.textContent=currentPlayer;

       if(checkWin()){
            messageBox.innerHTML=`<span class="win-message">
            ${currentPlayer} Won!</span>`;
            currentPlayer='X';
            removeClassCell();
        }
        else if (checkEnd()){
             messageBox.innerHTML=`<span class="draw-message">
             Draw!</span>`;
             currentPlayer='X';
             clearCells();
             removeClassCell();
        }
         else {
            currentPlayer=currentPlayer==='X'?'O':'X';

         }
    }
}

function checkWin(){
    const rows=[
      [0,1,2],
      [3,4,5],  
      [6,7,8],  
      [0,3,6],  
      [1,4,7],  
      [2,5,8],  
      [0,4,8],  
      [2,4,6],  
    ];
    for(let i=0; i<rows.length;i++){
        const [a,b,c]=rows[i];
        if (cells[a].textContent&&
            cells[a].textContent===cells[b].textContent&&
            cells[a].textContent===cells[c].textContent){

            if (currentPlayer==='X'){
                player1Score++;
                player1Scoreboard.textContent=player1Score;
                clearCells();
            }
            else{
                player2Score++;
                player2Scoreboard.textContent=player2Score;
                clearCells();
            }
            return true;
        }        
    }
    return false

}

function checkEnd (){
    return Array.from(cells).every(cell=> cell.textContent);

}
function clearCells(){
    for(let i=0; i<cells.length;i++){
        cells[i].textContent='';
        
    }
    
}
function removeClassCell (){
    cells.forEach(function(element){
        element.classList.remove('X');
        element.classList.remove('O');
    })

    }
