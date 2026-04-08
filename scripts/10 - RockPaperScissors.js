/*
      The aim of this script is to ascertain which button was clicked and whether
      it matched with what the computer had chosen.

      --Basically,
          Rock Wins Over Scissors
          Rock Loses Over Paper
          Rock Rock is a Tie
      */

        let compRando=Math.random();
        const OneThird=(1/3);
        const TwoThirds=(2/3);
        let selectionOutCome='';

       /*The below gets values out of the localStorage*/
      let scoreObj=JSON.parse(localStorage.getItem('score'));

      if (scoreObj===null){
        scoreObj={
          Wins:0,
          Losses:0,
          Tie:0
        };//end scoreObj
      };//end if

      /*The following script will randomly select a move made by the computer*/
      function pickComputerMove(){

        let compChoice='';

        if (compRando>=0 && compRando<OneThird){
            compChoice= 'Rock';
          } else if (compRando>=OneThird && compRando<TwoThirds){
            compChoice= 'Paper';
          }if (compRando>=TwoThirds && compRando<1){
            compChoice= 'Scissors';  
          } 

        return compChoice;  

      }//end function
      
      function whichButtonClick(playerMove){
        const compPick=pickComputerMove()

        if (playerMove==='Rock'){
            if (compPick==='Rock'){
              selectionOutCome="You Tie.";
            }else if (compPick==='Paper'){
              selectionOutCome="You Loose.";
            }else if (compPick==='Scissors'){
              selectionOutCome="You Win.";
         }
        } else if (playerMove==='Paper'){
            if (compPick==='Rock'){
              selectionOutCome="You Win.";
            }else if (compPick==='Paper'){
              selectionOutCome="You Tie.";
            }else if (compPick==='Scissors'){
              selectionOutCome="You Loose.";
          }
        } else if (playerMove==='Scissors'){
            if (compPick==='Rock'){
              selectionOutCome="You Loose.";
            }else if (compPick==='Paper'){
              selectionOutCome="You Win.";
            }else if (compPick==='Scissors'){
              selectionOutCome="You Tie.";
          }
        }//end if

        if (selectionOutCome==="You Loose."){
          scoreObj.Losses +=1;
        }else if (selectionOutCome==="You Win."){
          scoreObj.Wins +=1;
        }else if (selectionOutCome==="You Tie."){
          scoreObj.Tie +=1;
        }//end if

        /*The below writes into the localStorage*/
        /*localStorage doesn't get DELETED when the page is refreshed*/
        localStorage.setItem('score', JSON.stringify(scoreObj));

        document.querySelector('.txtBxOutcome').innerHTML= `${selectionOutCome}`

        document.querySelector('.txtBxMyChoiceVsComputers').innerHTML=
        `You
          <img src="images/${playerMove}-emoji.png" class="css-move-icon"> 
          <img src="images/${compPick}-emoji.png" class="css-move-icon"> 
        Computer`

        document.querySelector('.txtBxScores').innerHTML=
        `Wins ${scoreObj.Wins}, Losses ${scoreObj.Losses}, Ties ${scoreObj.Tie}`
        
          
      }//end function
      
      function RockButtonClick(){
        whichButtonClick('Rock')
      }

      function PaperButtonClick(){
        whichButtonClick('Paper')
      }

      function ScissorsButtonClick(){
        whichButtonClick('Scissors')
      }

      function ResetScore(){
        scoreObj.Losses=0;
        scoreObj.Wins=0;
        scoreObj.Tie=0
        localStorage.removeItem('score')
        document.querySelector('.txtBxScores').innerHTML=
         `Wins ${scoreObj.Wins}, Losses ${scoreObj.Losses}, Ties ${scoreObj.Tie}`
        document.querySelector('.txtBxOutcome').innerHTML= null
        document.querySelector('.txtBxMyChoiceVsComputers').innerHTML=null
      }
