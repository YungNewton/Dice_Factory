function diceWinner(){
    var diceOne = Math.floor(Math.random() * 6);
    var diceTwo = Math.floor(Math.random() * 6);
    if (diceOne > diceTwo){
        document.querySelector("body > div  p").innerHTML = "<img src = 'https://cdn-icons-png.flaticon.com/512/4481/4481086.png' height = '70px'/> Hurray Player One Wins.";
    }else if(diceTwo > diceOne){
        document.querySelector("body > div  p").innerHTML = "<img src = 'https://cdn-icons-png.flaticon.com/512/4481/4481086.png' height = '70px'/> Hurray Player Two Wins.";
    }else{
        document.querySelector("body > div  p").textContent = "Draw";
    }
    switch(3){
        case 1:
            document.querySelector(".playerOneDice").innerHTML = "<img src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABAQED09PTs7Oy5ubk7OzsjIyOTk5P8/PyXl5fx8fHl5eWrq6vp6em0tLTJycl1dXXPz88XFxdubm5/f380NDTd3d0rKyvX19eKioqnp6efn58eHh6CgoK/v79asAi8AAADTklEQVR4nO3c2XLiMBBAUQTYQMJitpCFhP//yxkqNZOUN8mWrG6Zex/zoj6ViY2B6YkZexPpAQYPYfohTD+E6Ycw/RCmH8L0Q7jIp7rLFx7C/W09SaF1tu8l3KykJ+/QatNZ+C49c+feuwkP0vP26NBBeJxLT9ur+dFZmCbwL9FVmOI/0e/q/qHWCNO7yPxUc7mpEUpP6ZWL8EN6SK8+HIQp3eirzezCk/SMnp2swkx6RM8yq3ArPaJnW6tQekLvbMKF9IDelZ8Xy8JcekDvcotwKj2gd1OE0gN6hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItSfqHC2LrJdVqxnQx4iJyzOL/9PeTkXg50jJJwtTbnlQL9JGeFTxXfvaZCzJISXpgUri8sApwkIm9eOGLMJf1x8YfUv8HfL4OdFF7YDByDGFu4sQGN2gU+MLLxYgcYEvtxEFtrWVN0L/J+r4wrr74Plwt4XowqrSyrqC/rqJqrQdh39V9DraVShIzDsIoeYwsJZGPJJI6bw7Cw8Bzw1pvDVWfga8NSIwmdnoDHP4Y6NKHzrIHwLd2xEYWXbT0sBNxtFFNpfdP8U8OV3RGHbk2+5gE/C/A75O+zQ+K+l478fjv81zQO8Lh3/s8X4nw8f4Bl//O/TjP+9tgd4v/QB3vN2eMAI/QEbnz3x+WGP2p4TQ3+0NuFzfL6L0bvRf5/mXrH/9Z2o/ei+E/Xd7JLtrrvsMtLvtcUKIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+E4xfm0gN6l1uEn9IDevdpEQZdbyBSBVT+wVZ6Qs+2VmHAbT8iVTYbVYQn6RE9O1mFZiU9o1fVVRxV4VV6SK+uDsK0r6Y1nOqPvqSn9OjLSRh0p1Hc6vY21W46SvWeWLkXNgqPc+lZezU/OguNOUhP26NDPaVpH1f4nSND17RDpXnj2CalW/+qedNP2061/W3Q5QfBmt32LQrb1rhFPtVdblu25b4XL9UQph/C9EOYfgjTD2H6IUw/hOn3B8TlR6lUjaBgAAAAAElFTkSuQmCC' width='40%'/>";
            break;
        case 2:
            document.querySelector(".playerOneDice").innerHTML = "<img src = 'https://clipart-library.com/images/qcBoGz5bi.png' width='40%'/>";
            break;
        case 3:
            document.querySelector(".playerOneDice").innerHTML = "<img class = 'diceThree' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/800px-Dice-3-b.svg.png' width='40%'/>";
            break;
        case 4:
            document.querySelector(".playerOneDice").innerHTML = "<img src = 'https://clipart-library.com/images/qcBoGz5bi.png' width='40%'/>";
            break;
        case 5:
            document.querySelector(".playerOneDice").innerHTML = "<img src = 'https://clipart-library.com/images/qcBoGz5bi.png' width='40%'/>";
            break;
        case 6:
            document.querySelector(".playerOneDice").innerHTML = "<img src = 'data:image/png;base64,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' width='40%'/>";
            break;
        default:
    }
}
document.querySelector("button").onclick = function(){diceWinner()};