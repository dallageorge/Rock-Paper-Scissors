const arr = ["rock","paper","scissors"];
var  click = new Audio("sound/click.wav"); // buffers automatically when created

function getComputerChoice(){
    return arr[Math.floor(Math.random()*3)];
}
let cc=getComputerChoice();

function playRound(playerSelection, computerSelection) {
if(playerSelection===computerSelection){
        return("It's a draw");
    }
    else if((playerSelection==="rock" && computerSelection==="paper")||playerSelection==="paper" && computerSelection==="scissors"
    || playerSelection==="scissors" && computerSelection==="rock"){
        return("You lose");
    }
    else{
        return("You win");
    }
    

  }

let playersc=0;
let cscore=0;

function select(i){

    let inp =i;
    click.play();
    const row = document.getElementsByClassName("row")[0];
    row.style.display='none';
    const h1 = document.getElementsByClassName("text")[0];
    h1.innerHTML="Computer chose: "+cc+", "+playRound(inp,cc) +"!";
    const score = document.getElementsByClassName("score")[0];
    if(playRound(inp,cc)==="You win"){
        document.getElementById("resimgyours").style.boxShadow= "0 0 30px green";
        document.getElementById("resimgcomp").style.boxShadow= "0 0 30px red";
        playersc++;
    }
    else if(playRound(inp,cc)==="You lose"){
        document.getElementById("resimgcomp").style.boxShadow= "0 0 30px green";
        document.getElementById("resimgyours").style.boxShadow= "0 0 30px red";
        cscore++;
    }
    let textsc= `Your Score: ${playersc} / Computer Score: ${(cscore)}`;
    score.innerHTML=textsc;
    const ret = document.getElementsByClassName("ret")[0];
    ret.style.display="flex";

    let  result = document.getElementsByClassName("result")[0];
    let  yours = document.getElementById("resimgyours");
    let  computers = document.getElementById("resimgcomp");
    
    if(cc=="rock"){

        computers.src="imgs/img_rock.png";

    }
    else if(cc=="paper"){

        computers.src="imgs/img_paper.png";
    }
    else if(cc=="scissors"){

        computers.src="imgs/img_scissors.png";
    }

    if(inp=="rock"){
        yours.src="imgs/img_rock.png";

    }
    else if(inp=="paper"){
        yours.src="imgs/img_paper.png";
    }
    else if(inp=="scissors"){
    yours.src="imgs/img_scissors.png";
    }

    result.style.display="flex";    


}
function appear(){
    click.play();
    document.getElementById("resimgcomp").style.boxShadow= "none";
    document.getElementById("resimgyours").style.boxShadow= "none";
    const  result = document.getElementsByClassName("result")[0];
    result.style.display="none";   
    const row = document.getElementsByClassName("row")[0];
    row.style.display="flex";
    const ret = document.getElementsByClassName("ret")[0];
    ret.style.display="none";
    const h1 = document.getElementsByClassName("text")[0];
    h1.innerHTML="Click on one of the boxes:";
}

