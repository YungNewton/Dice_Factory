function diceWinner(){
    var diceOne = Math.floor(Math.random() * 6);
    var diceTwo = Math.floor(Math.random() * 6);
    if (diceOne > diceTwo){
        document.querySelector("body > div  p").innerHTML = "<img src = 'https://cdn-icons-png.flaticon.com/512/4481/4481086.png' height = '70px'/> Hurray Player One Won.";
    }else if(diceTwo > diceOne){
        document.querySelector("body > div  p").innerHTML = "<img src = 'https://cdn-icons-png.flaticon.com/512/4481/4481086.png' height = '70px'/> Hurray Player Two Won.";
    }else{
        document.querySelector("body > div  p").textContent = "Draw";
    }
    switch(diceOne){
        case 1:
            
    }
}
document.querySelector("button").onclick = function(){diceWinner()};