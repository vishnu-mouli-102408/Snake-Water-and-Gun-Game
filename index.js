let player = prompt("Choose Snake, Water or Gun")
let compbrain = Math.floor(Math.random()*3)
let computer = ["S","W","G"][compbrain]
const battle = (player, computer) =>{
 if(player === computer){
   return "Nobody!"
 }
  else if(player === "S" && computer=== "W"){
    return "Player"
  }
  else if(player === "W" && computer=== "G"){
    return "Player"
  }
  else if(player === "S" && computer=== "G"){
    return "Computer"
  }
  else if(player === "W" && computer=== "S"){
    return "Computer"
  }
  else if(player === "G" && computer=== "W"){
    return "Computer"
  }
  else if(player === "G" && computer=== "S"){
    return "Player"
  }
}
let result = battle(player, computer)
document.write(`Computer was ${computer}. <br> The Player was ${player}.<br> The winner is ${result.toUpperCase()}`)









