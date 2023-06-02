function diceWinner(){
    var diceOne = Math.floor(Math.random() * 6);
    var diceTwo = Math.floor(Math.random() * 6);
    if (diceOne > diceTwo){
        document.querySelector("body > div  p").classList.add("player_one");
        document.querySelector("body > div  p").textContent = "Player One Wins";
    }else if(diceTwo > diceOne){
        document.querySelector("body > div  p").classList.add("player_two");
        document.querySelector("body > div  p").textContent = "Player Two Wins";
    }else{
        document.querySelector("body > div  p").textContent = "Draw";
    }
}
document.querySelector("button").onclick = function(){diceWinner()};