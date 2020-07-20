const game = ()=>{
  let pscore=0;
  let cscore=0;

  const startgame = () =>{
    const playbtn=document.querySelector('.intro button');
    const intro = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playbtn.addEventListener("click",()=>{

      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

const playmatch=()=>{
  const options= document.querySelectorAll('.option button');
  const playerhand = document.querySelector('.playerhand');
  const computerhand = document.querySelector('.computerhand');
  const hands = document.querySelectorAll('.hand img');
  hands.forEach(hand=>{
    hand.addEventListener('animationend',function(){
      this.style.animation="";
    })
  })

  const computeroption=["rock","paper","scissors"];

  options.forEach(option=>{
    option.addEventListener("click",function(){

const computernumber =Math.floor( Math.random()*3);
const comchoice=computeroption[computernumber];

setTimeout(()=>{

comparehand(this.textContent,comchoice);



 playerhand.src = `./assets/${this.textContent}.png`;
          computerhand.src = `./assets/${comchoice}.png`;
        },2000);

          playerhand.style.animation="shakeplayer 2s ease";
           computerhand.style.animation="shakecom 2s ease";
    });
  });
  

};
const updatescore=()=>{
  const playerscore = document.querySelector('.playerscore p');
  const comscore = document.querySelector('.computerscore p');
  playerscore.textContent=pscore;
  comscore.textContent=cscore;
}

const comparehand= (playerchoice,comchoice)=>{

const winner= document.querySelector('.winner');
  if(playerchoice === comchoice){
winner.textContent='IT IS A TIE';
return;
  }
  if(playerchoice==='rock'){
    if(comchoice==='scissors'){
      winner.textContent='Player Wins';
      pscore++;
       updatescore();
      return;
    }else{
      winner.textContent='Computer Wins';
      cscore++;
       updatescore();
      return;
    }
  }

  if(playerchoice==='paper'){
    if(comchoice==='scissors'){
      winner.textContent='Computer Wins';
      cscore++;
       updatescore();
      return;
    }else{
      winner.textContent='Player Wins';
       pscore++;
        updatescore();
      return;
    }
  }

  if(playerchoice==='scissors'){
    if(comchoice==='rock'){
      winner.textContent='Computer Wins';
      cscore++;
       updatescore();
      return;
    }else{
      winner.textContent='Player Wins';
       pscore++;
        updatescore();
      return;
    }
  }
}





startgame();
playmatch();



};

game();