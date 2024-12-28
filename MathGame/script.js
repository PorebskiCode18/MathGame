var level=0
var x
var y
var z
var type
var ans
var add1correct=0
var sub1correct=0
var mult1correct=0
var mix1correct=0
var add1Done=false
var add2Done=false
var add3Done=false
var sub1Done=false
var sub2Done=false
var sub3Done=false
var mult1Done=false
var mult2Done=false
var mult3Done=false
var mix1Done=false
var mix2Done=false
var mix3Done=false
var numWrongAdd=0
var numWrongSub=0
var numWrongMult=0
var numWrongMix=0
var sign1
var sign2
var numPlayers
var Name1
var Name2
var firstTime=false
var playerSelect
var typeSelect
var level2=1
var player1NumRight=0
var player2NumRight=0
var player1NumWrong=0
var player2NumWrong=0
var player1NumQuest=0
var player2NumQuest=0
var totalWrong=0

function SubNames(){
    Name1=document.getElementById("Name1").value
    Name2=document.getElementById("Name2").value
    document.getElementById("St").style.visibility = "visible"


}
function Player1(){
    numPlayers=1
    document.getElementById("numPlays").innerHTML="Number Of Players:1"
    document.getElementById("Name1").style.visibility = "visible"
    document.getElementById("Name2").style.visibility = "hidden"
    document.getElementById("submit").style.visibility = "visible"

}
function Player2(){
    numPlayers=2
    document.getElementById("Name1").style.visibility = "visible"
    document.getElementById("Name2").style.visibility = "visible"
    document.getElementById("numPlays").innerHTML="Number Of Players:2"
    document.getElementById("submit").style.visibility = "visible"

}
function Start(){
    if (numPlayers===1){
        document.getElementById("1Play").style.visibility = "hidden"
        document.getElementById("numPlays").style.visibility = "hidden"
        document.getElementById("2Play").style.visibility = "hidden"
        document.getElementById("Name1").style.visibility = "hidden"
        document.getElementById("Name2").style.visibility = "hidden"
        document.getElementById("submit").style.visibility = "hidden"
        document.getElementById("ez").style.visibility = "visible"
        document.getElementById("mid").style.visibility = "visible"
        document.getElementById("hrd").style.visibility = "visible"
        document.getElementById("title").style.visibility = "visible"
        document.getElementById("add").style.visibility = "visible"
        document.getElementById("sub").style.visibility = "visible"
        document.getElementById("mul").style.visibility = "visible"
        document.getElementById("CurLevel").style.visibility = "visible"
        document.getElementById("question").style.visibility = "visible"
        document.getElementById("answerToCheck").style.visibility = "visible"
        document.getElementById("Chk").style.visibility = "visible"
        document.getElementById("Correct").style.visibility = "visible"
        document.getElementById("Next").style.visibility = "visible"
        document.getElementById("Badges").style.visibility = "visible"
        document.getElementById("AddCor").style.visibility = "visible"
        document.getElementById("SubCor").style.visibility = "visible"
        document.getElementById("MulCor").style.visibility = "visible"
        document.getElementById("MixCor").style.visibility = "visible"
        document.getElementById("AddWrong").style.visibility = "visible"
        document.getElementById("SubWrong").style.visibility = "visible"
        document.getElementById("MulWrong").style.visibility = "visible"
        document.getElementById("MixWrong").style.visibility = "visible"
        document.getElementById("playTurn`").style.visibility = "hidden"
        document.getElementById("question2").style.visibility = "hidden"
        document.getElementById("answerToCheck2").style.visibility = "hidden"
        document.getElementById("highScore").style.visibility = "visible"
        document.getElementById("NameChg").style.visibility = "visible"
        if (firstTime===false){
            document.getElementById("mid").disabled = true;
            document.getElementById("hrd").disabled = true;
            firstTime=true
        }
    }else if(numPlayers===2){
        document.getElementById("1Play").style.visibility = "hidden"
        document.getElementById("numPlays").style.visibility = "hidden"
        document.getElementById("2Play").style.visibility = "hidden"
        document.getElementById("Name1").style.visibility = "hidden"
        document.getElementById("Name2").style.visibility = "hidden"
        document.getElementById("submit").style.visibility = "hidden"
        document.getElementById("playTurn").style.visibility = "visible"
        document.getElementById("question2").style.visibility = "visible"
        document.getElementById("answerToCheck2").style.visibility = "visible"
        document.getElementById("St").style.visibility = "hidden"
        document.getElementById("Next2").disabled=true
        document.getElementById("Chk2").style.visibility = "visible"
        document.getElementById("Correct2").style.visibility = "visible"
        document.getElementById("Next2").style.visibility = "visible"
        document.getElementById("Player1Cor").style.visibility = "visible"
        document.getElementById("Player2Cor").style.visibility = "visible"
        document.getElementById("Player1Wor").style.visibility = "visible"
        document.getElementById("Player2Wor").style.visibility = "visible"
        playerSelect=Math.round(Math.random()*2)
        if (playerSelect===0){
            document.getElementById("playTurn").innerHTML="Player Turn:" + Name1
        } else if(playerSelect===1){
            document.getElementById("playTurn").innerHTML="Player Turn:" + Name2
        }
        typeSelect=parseInt(Math.round(Math.random()*4))
        if (typeSelect===0){
            addition()
        }else if (typeSelect===1){
            subtraction()
        }else if (typeSelect===2){
            multiplication()
        } else if (typeSelect===3){
            mixed()
        }

    }


}
function easy(){
    level=1
    document.getElementById("CurLevel").innerHTML="Current Level:1"
}
function medium(){
    level=2
    document.getElementById("CurLevel").innerHTML="Current Level:2"
}
function hard(){
    level=3
    document.getElementById("CurLevel").innerHTML="Current Level:3"
}
function addition(){
    if (numPlayers===1){
        document.getElementById("add").disabled = true;
        document.getElementById("sub").disabled = false;
        document.getElementById("Next").disabled = true;
        document.getElementById("mul").disabled=false
        document.getElementById("mix").disabled = false;
    }

    type="add"
    if (numPlayers===1){
        if (add1Done===false){
            level=1
        }
        if (add1Done===true && add2Done===false){
            level=2
        }
        if (add2Done===true){
            level=3
        }
    }

    setNum()
    if (numPlayers===1){
        document.getElementById("question").innerHTML="Question:" + x + "+" + y
    }else if(numPlayers===2){
        document.getElementById("question2").innerHTML="Question:" + x + "+" + y
    }
    if (numPlayers===1){
        document.getElementById("ez").disabled = true;
        document.getElementById("mid").disabled=true
        document.getElementById("hrd").disabled = true;
        if (add1Done===false && add2Done===false){
            document.getElementById("ez").disabled = false;
            document.getElementById("mid").disabled=true
            document.getElementById("hrd").disabled = true;
        } else if(add1Done===true && add2Done===false){
            document.getElementById("ez").disabled = true;
            document.getElementById("mid").disabled=false
            document.getElementById("hrd").disabled = true;
        } else if(add1Done===true && add2Done===true){
            document.getElementById("ez").disabled = true;
            document.getElementById("mid").disabled=true
            document.getElementById("hrd").disabled = false;
        }
    }



}
function subtraction(){
    document.getElementById("Next").disabled = true;
    document.getElementById("sub").disabled = true;
    document.getElementById("add").disabled = false;
    document.getElementById("mul").disabled=false
    document.getElementById("mix").disabled = false;
    type="sub"
    if (sub1Done===false){
        level=1
    }
    if (sub1Done===true && add2Done===false){
        level=2
    }
    if (sub2Done===true){
        level=3
    }

    setNum()
    if (numPlayers===1) {
        document.getElementById("question").innerHTML = "Question:" + x + "-" + y
    } else if(numPlayers===2){
        document.getElementById("question2").innerHTML = "Question:" + x + "-" + y
    }
    document.getElementById("ez").disabled = true;
    document.getElementById("mid").disabled=true
    document.getElementById("hrd").disabled = true;
    if (sub1Done===false && sub2Done===false){

        document.getElementById("ez").disabled = false;
    } else if(sub1Done===true && sub2Done===false){

        document.getElementById("mid").disable=false;
    } else if(sub1Done===true && sub2Done===true){
        document.getElementById("hrd").disabled = false;
    }

}
function multiplication(){
    document.getElementById("Next").disabled = true;
    document.getElementById("sub").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("mul").disabled=true
    document.getElementById("mix").disabled = false;
    type="multi"
    if (mult1Done===false){
        level=1
    }
    if (mult2Done===true && mult2Done===false){
        level=2
    }
    if (mult2Done===true){
        level=3
    }

    setNum()
    if (numPlayers===1) {
        document.getElementById("question").innerHTML = "Question:" + x + "*" + y
    }else if(numPlayers===2){
        document.getElementById("question2").innerHTML = "Question:" + x + "*" + y
    }
    document.getElementById("ez").disabled = true;
    document.getElementById("mid").disabled=true
    document.getElementById("hrd").disabled = true;
    if (mult1Done===false && mult2Done===false){

        document.getElementById("ez").disabled = false;
    } else if(mult1Done===true && mult2Done===false){

        document.getElementById("mid").disable=false;
    } else if(mult1Done===true && mult2Done===true){
        document.getElementById("hrd").disabled = false;
    }

}
function mixed(){
    document.getElementById("Next").disabled = true;
    document.getElementById("sub").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("mix").disabled = true;
    document.getElementById("mul").disabled=false

    type="mixed"
    if (mix1Done===false){
        level=1
    }
    if (mix2Done===true && mix2Done===false){
        level=2
    }
    if (mix3Done===true){
        level=3
    }

    setNum()
    sign1=Math.round(Math.random()*3)
    sign2=Math.round(Math.random()*3)
    if (numPlayers===1) {
        if (sign1 === 0 && sign2 === 0) {
            document.getElementById("question").innerHTML = "Question:" + x + "+" + y + "+" + z
        } else if (sign1 === 1 && sign2 === 0) {
            document.getElementById("question").innerHTML = "Question:" + x + "-" + y + "+" + z
        } else if (sign1 === 2 && sign2 === 0) {
            document.getElementById("question").innerHTML = "Question:" + x + "*" + y + "+" + z
        } else if (sign1 === 0 && sign2 === 1) {
            document.getElementById("question").innerHTML = "Question:" + x + "+" + y + "-" + z
        } else if (sign1 === 1 && sign2 === 1) {
            document.getElementById("question").innerHTML = "Question:" + x + "-" + y + "-" + z
        } else if (sign1 === 2 && sign2 === 1) {
            document.getElementById("question").innerHTML = "Question:" + x + "*" + y + "-" + z
        } else if (sign1 === 0 && sign2 === 2) {
            document.getElementById("question").innerHTML = "Question:" + x + "+" + y + "*" + z
        } else if (sign1 === 1 && sign2 === 2) {
            document.getElementById("question").innerHTML = "Question:" + x + "-" + y + "*" + z
        } else if (sign1 === 2 && sign2 === 2) {
            document.getElementById("question").innerHTML = "Question:" + x + "*" + y + "*" + z
        }
    } else if(numPlayers===2){
        if (sign1 === 0 && sign2 === 0) {
            document.getElementById("question2").innerHTML = "Question:" + x + "+" + y + "+" + z
        } else if (sign1 === 1 && sign2 === 0) {
            document.getElementById("question2").innerHTML = "Question:" + x + "-" + y + "+" + z
        } else if (sign1 === 2 && sign2 === 0) {
            document.getElementById("question2").innerHTML = "Question:" + x + "*" + y + "+" + z
        } else if (sign1 === 0 && sign2 === 1) {
            document.getElementById("question2").innerHTML = "Question:" + x + "+" + y + "-" + z
        } else if (sign1 === 1 && sign2 === 1) {
            document.getElementById("question2").innerHTML = "Question:" + x + "-" + y + "-" + z
        } else if (sign1 === 2 && sign2 === 1) {
            document.getElementById("question2").innerHTML = "Question:" + x + "*" + y + "-" + z
        } else if (sign1 === 0 && sign2 === 2) {
            document.getElementById("question2").innerHTML = "Question:" + x + "+" + y + "*" + z
        } else if (sign1 === 1 && sign2 === 2) {
            document.getElementById("question2").innerHTML = "Question:" + x + "-" + y + "*" + z
        } else if (sign1 === 2 && sign2 === 2) {
            document.getElementById("question2").innerHTML = "Question:" + x + "*" + y + "*" + z
        }
    }
    document.getElementById("ez").disabled = true;
    document.getElementById("mid").disabled=true
    document.getElementById("hrd").disabled = true;
    if (mix1Done===false && mix2Done===false){

        document.getElementById("ez").disabled = false;
    } else if(mix1Done===true && mix2Done===false){
        document.getElementById("mid").disable=false;
    } else if(mix1Done===true && mix2Done===true){
        document.getElementById("hrd").disabled = false;
    }

}
function Check(){
    if (numPlayers===1){
        document.getElementById("Chk").disabled = true;
        document.getElementById("Next").disabled = false;
        ans=parseInt(document.getElementById("answerToCheck").value)
    } else if(numPlayers===2){
        document.getElementById("Chk2").disabled = true;
        document.getElementById("Next2").disabled = false;
        ans=parseInt(document.getElementById("answerToCheck2").value)
    }

    if (type!=="mixed"){
        CheckNum(x,y)
    }else{
        MixedNum(x,y,z)
    }
    if (numPlayers===1){
        if (add1correct===5){
            document.getElementById("plus1").style.visibility = "visible"
            add1Done=true
            if (type==="add"){
                level=2

                document.getElementById("mid").disabled = false;
                document.getElementById("ez").disabled = true;
            }


        }
        if (add1correct===10){
            document.getElementById("plus2").style.visibility = "visible"
            add2Done=true

            if (type==="add"){
                level=3
                document.getElementById("hrd").disabled = false;
                document.getElementById("mid").disabled = true;
            }
        }
        if (add1correct===15){
            document.getElementById("plus3").style.visibility = "visible"
            add3Done=true
            if (type==="add"){
                document.getElementById("hrd").disabled = true;
            }
            document.getElementById("add").disabled = true;
            if (numWrongAdd===0){
                document.getElementById("perfectPlus").style.visibility = "visible"
            }
            if (numWrongAdd<numWrongSub && numWrongAdd<numWrongMult && numWrongAdd<numWrongMix){
                document.getElementById("highScore").innerHTML="Lowest # Questions Wrong:" + Name1 + "(" + numWrongAdd + ")"
            }
        }
        if (sub1correct===5){
            document.getElementById("minus1").style.visibility = "visible"
            sub1Done=true
            if (type==="sub"){
                level=2
                document.getElementById("mid").disabled = false;
                document.getElementById("ez").disabled = true;
            }

        }
        if (sub1correct===10){
            document.getElementById("minus2").style.visibility = "visible"
            sub2Done=true

            if (type==="sub"){
                level=3
                document.getElementById("hrd").disabled = true;
                document.getElementById("mid").disabled = true;
            }
        }
        if (sub1correct===15){
            document.getElementById("minus3").style.visibility = "visible"
            sub3Done=true
            if (type==="sub"){
                document.getElementById("hrd").disabled = true;
            }
            document.getElementById("sub").disabled = true;
            if (numWrongSub===0){
                document.getElementById("perfectMinus").style.visibility = "visible"
            }
            if (numWrongSub<numWrongAdd && numWrongSub<numWrongMult && numWrongSub<numWrongMix){
                document.getElementById("highScore").innerHTML="Lowest # Questions Wrong:" + Name1 + "(" + numWrongSub + ")"
            }
        }
        if (mult1correct===5){
            document.getElementById("mult1").style.visibility = "visible"
            mult1Done=true
            if (type==="multi"){
                level=2
                document.getElementById("mid").disabled = false;
                document.getElementById("ez").disabled = true;
            }

        }
        if (mult1correct===10){
            document.getElementById("mult2").style.visibility = "visible"
            mult2Done=true
            if (type==="multi"){
                level=3
                document.getElementById("hrd").disabled = true;
                document.getElementById("mid").disabled = true;
            }
        }
        if (mult1correct===15){
            document.getElementById("mult3").style.visibilit13y = "visible"
            mult3Done=true
            if (type==="multi"){
                document.getElementById("hrd").disabled = true;
            }
            document.getElementById("mul").disabled = true;
            if (numWrongMult===0){
                document.getElementById("perfectMult").style.visibility = "visible"
            }
            if (numWrongMult<numWrongAdd && numWrongMult<numWrongSub && numWrongMult<numWrongMix){
                document.getElementById("highScore").innerHTML="Lowest # Questions Wrong:" + Name1 + "(" + numWrongMult + ")"
            }
        }
        if (mix1correct===5){
            document.getElementById("mix1").style.visibility = "visible"
            mix1Done=true
            if (type==="mixed"){
                level=2
                document.getElementById("mid").disabled = false;
                document.getElementById("ez").disabled = true;
            }

        }
        if (mix1correct===10){
            document.getElementById("mix2").style.visibility = "visible"
            mix2Done=true
            if (type==="mixed"){
                level=3
                document.getElementById("hrd").disabled = true;
                document.getElementById("mid").disabled = true;
            }
        }
        if (mix1correct===15){
            document.getElementById("mix3").style.visibilit13y = "visible"
            mix3Done=true
            if (type==="mixed"){
                document.getElementById("hrd").disabled = true;
            }
            document.getElementById("mix").disabled = true;
            if (numWrongMix===0){
                document.getElementById("perfectMix").style.visibility = "visible"
            }
            if (numWrongMix<numWrongAdd && numWrongMix<numWrongSub && numWrongMix<numWrongMult){
                document.getElementById("highScore").innerHTML="Lowest # Questions Wrong:" + Name1 + "(" + numWrongMix + ")"
            }
        }
        if (mix1correct===15 && add1correct===15 && sub1correct===15 && mult1correct===15){
            totalWrong=numWrongAdd+numWrongSub+numWrongMult+numWrongMix
            if (totalWrong===0){
                document.getElementById("perfectTotal").style.visibility = "visible"
            }
            if (numWrongAdd===5 && numWrongSub===2 && numWrongMult===9 && numWrongMix===4){
                document.getElementById("Secret").style.visibility = "visible"
            }

        }
    }

}

function CheckNum(b,c){
    if (type==="add"){
        if (ans===b+c) {
            if (numPlayers === 1) {
                document.getElementById("Correct").innerHTML = "Are you correct: Yes"
                add1correct = add1correct + 1
                document.getElementById("AddCor").innerHTML = "You got " + add1correct + " addition questions correct"
                document.getElementById("Chk").disabled = true;
            } else if (numPlayers === 2){
                document.getElementById("Correct2").innerHTML = "Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect==1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }

            }
        }else{
            if (numPlayers===1){
                numWrongAdd=numWrongAdd+1
                document.getElementById("AddWrong").innerHTML="You got " + numWrongAdd + " addition questions wrong"
                document.getElementById("Correct").innerHTML="Are you correct: No"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }

        }
        if (numPlayers===2){
            if (playerSelect===0){
                player1NumQuest=player1NumQuest+1
            }else if (playerSelect===1){
                player2NumQuest=player2NumQuest+1
            }
        }
    }
    if (type==="sub"){

        if (ans===b-c){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                sub1correct=sub1correct+1
                document.getElementById("SubCor").innerHTML="You got " + sub1correct + " subtraction questions correct"
                document.getElementById("Chk").disabled = true;
            } else if (numPlayers === 2){
                document.getElementById("Correct2").innerHTML = "Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongSub=numWrongSub+1
                document.getElementById("SubWrong").innerHTML="You got " + numWrongSub + " subtraction questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }

        }
        if (numPlayers===2){
            if (playerSelect===0){
                player1NumQuest=player1NumQuest+1
            }else if (playerSelect===1){
                player2NumQuest=player2NumQuest+1
            }
        }
    }
    if (type==="multi"){
        if (ans===b*c){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mult1correct=mult1correct+1
                document.getElementById("MulCor").innerHTML="You got " + mult1correct + " multiplication questions correct"
                document.getElementById("Chk").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML = "Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
            }

        }else{
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMult=numWrongMult+1
                document.getElementById("MulWrong").innerHTML="You got " + numWrongMult + " multiplication questions wrong"
            }else if (numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }

        }
        if (numPlayers===2){
            if (playerSelect===0){
                player1NumQuest=player1NumQuest+1
            }else if (playerSelect===1){
                player2NumQuest=player2NumQuest+1
            }
        }
    }
}
function MixedNum(b,c,d){
    if (sign1===0 && sign2===0){
        if (ans===b+c+d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }

        }

    } else if (sign1===1 && sign2===0){
        if (ans===b-c+d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    }else if (sign1===2 && sign2===0){
        if (ans===b*c+d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight + 1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }

            }
        }
    } else if (sign1===0 && sign2===1){
        if (ans===b+c-d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    } else if (sign1===1 && sign2===1){
        if (ans===b-c-d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    }else if (sign1===2 && sign2===1){
        if (ans===b*c-d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    }else if (sign1===0 && sign2===2){
        if (ans===b+c*d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    } else if (sign1===1 && sign2===2){
        if (ans===b-c*d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }
    }else if (sign1===2 && sign2===2){
        if (ans===b*c*d){
            if (numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: Yes"
                mix1correct=mix1correct+1
                document.getElementById("MixCor").innerHTML="You got " + mix1correct + " mixed questions correct"
                document.getElementById("Chk").disabled = true;
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: Yes"
                document.getElementById("Chk2").disabled = true;
                if (playerSelect===0){
                    player1NumRight=player1NumRight+1
                    document.getElementById("Player1Cor").innerHTML = "Player 1 # right:" + player1NumRight
                }else if (playerSelect===1){
                    player2NumRight=player2NumRight+1
                    document.getElementById("Player2Cor").innerHTML = "Player 2 # right:" + player2NumRight
                }
            }
        }else{
            if(numPlayers===1){
                document.getElementById("Correct").innerHTML="Are you correct: No"
                numWrongMix=numWrongMix+1
                document.getElementById("MixWrong").innerHTML="You got " + numWrongMix + " mixed questions wrong"
            }else if(numPlayers===2){
                document.getElementById("Correct2").innerHTML="Are you correct: No"
                if (playerSelect===0){
                    player1NumWrong=player1NumWrong+1
                    document.getElementById("Player1Wor").innerHTML = "Player 1 # wrong:" + player1NumWrong
                }else if (playerSelect===1){
                    player2NumWrong=player2NumWrong+1
                    document.getElementById("Player2Wor").innerHTML = "Player 2 # wrong:" + player2NumWrong
                }
            }
        }

    }
    if (numPlayers===2){
        if (playerSelect===0){
            player1NumQuest=player1NumQuest+1
        }else if (playerSelect===1){
            player2NumQuest=player2NumQuest+1
        }
    }
}
function setNum(){

    if (level===1){
        x=Math.round(Math.random()*9+1)
        y=Math.round(Math.random()*9+1)
        z=Math.round(Math.random()*9+1)
    }
    if (level===2){
        x=Math.round(Math.random()*90+10)
        y=Math.round(Math.random()*90+10)
        z=Math.round(Math.random()*90+10)
    }
    if (level===3){
        x=Math.round(Math.random()*900+100)
        y=Math.round(Math.random()*900+100)
        z=Math.round(Math.random()*900+100)
    }
    if (level2===1){
        x=Math.round(Math.random()*9+1)
        y=Math.round(Math.random()*9+1)
        z=Math.round(Math.random()*9+1)
    }
    if (level2===2){
        x=Math.round(Math.random()*90+10)
        y=Math.round(Math.random()*90+10)
        z=Math.round(Math.random()*90+10)
    }
    if (level2===3){
        x=Math.round(Math.random()*900+100)
        y=Math.round(Math.random()*900+100)
        z=Math.round(Math.random()*900+100)
    }
}
function NameChange(){
    document.getElementById("NewName").style.visibility = "visible"
    document.getElementById("NewSubmit").style.visibility = "visible"
    document.getElementById("NewName").value=Name1
}
function SubNewName(){
    Name1=document.getElementById("NewName").value
    document.getElementById("NewName").style.visibility = "hidden"
    document.getElementById("NewSubmit").style.visibility = "hidden"
}
function Next(){
    if (numPlayers===1){
        document.getElementById("Next").disabled = true;
        if (type==="add"){
            addition()
        }
        if (type==="sub"){
            subtraction()
        }
        if (type==="multi"){
            multiplication()
        }
        if (type==="mixed"){
            mixed()
        }
        document.getElementById("Correct").innerHTML="Are you correct:"
        document.getElementById("Chk").disabled = false;
        document.getElementById("answerToCheck").value = "";
        document.getElementById("CurLevel").innerHTML="Current Level:"+level
    }else if(numPlayers===2){
        if (playerSelect===0){
            playerSelect=1
        }else if (playerSelect===1){
            playerSelect=0
        }
        if (playerSelect===0){
            document.getElementById("playTurn").innerHTML="Player Turn:" + Name1
        }else if(playerSelect===1){
            document.getElementById("playTurn").innerHTML="Player Turn:" + Name2
        }
        document.getElementById("Next2").disabled = true;
        document.getElementById("Correct2").innerHTML="Are you correct:"
        document.getElementById("Chk2").disabled = false;
        document.getElementById("answerToCheck2").value = "";
        typeSelect=parseInt(Math.round(Math.random()*4))
        if(typeSelect===0){
            addition()
        }else if(typeSelect===1){
            subtraction()
        }else if(typeSelect===2){
            multiplication()
        }else if(typeSelect===3){
            mixed()
        }
        if (player1NumQuest===3 && player2NumQuest===3){
            if (player1NumRight>player2NumRight){
                document.getElementById("playTurn").style.visibility = "hidden"
                document.getElementById("question2").style.visibility = "hidden"
                document.getElementById("answerToCheck2").style.visibility = "hidden"
                document.getElementById("Chk2").style.visibility = "hidden"
                document.getElementById("Correct2").style.visibility = "hidden"
                document.getElementById("Next2").style.visibility = "hidden"
                document.getElementById("Player1Cor").style.visibility = "hidden"
                document.getElementById("Player2Cor").style.visibility = "hidden"
                document.getElementById("Player1Wor").style.visibility = "hidden"
                document.getElementById("Player2Wor").style.visibility = "hidden"
                document.getElementById("winner").style.visibility = "visible"
                document.getElementById("winner").innerHTML = "Winner:Player1"
            }else if (player2NumRight>player1NumRight){
                document.getElementById("playTurn").style.visibility = "hidden"
                document.getElementById("question2").style.visibility = "hidden"
                document.getElementById("answerToCheck2").style.visibility = "hidden"
                document.getElementById("Chk2").style.visibility = "hidden"
                document.getElementById("Correct2").style.visibility = "hidden"
                document.getElementById("Next2").style.visibility = "hidden"
                document.getElementById("Player1Cor").style.visibility = "hidden"
                document.getElementById("Player2Cor").style.visibility = "hidden"
                document.getElementById("Player1Wor").style.visibility = "hidden"
                document.getElementById("Player2Wor").style.visibility = "hidden"
                document.getElementById("winner").style.visibility = "visible"
                document.getElementById("winner").innerHTML = "Winner:Player2"
            }
        }
        if (player1NumQuest===player2NumQuest && player1NumQuest>3){
            if (player1NumRight>player2NumRight){
                document.getElementById("playTurn").style.visibility = "hidden"
                document.getElementById("question2").style.visibility = "hidden"
                document.getElementById("answerToCheck2").style.visibility = "hidden"
                document.getElementById("Chk2").style.visibility = "hidden"
                document.getElementById("Correct2").style.visibility = "hidden"
                document.getElementById("Next2").style.visibility = "hidden"
                document.getElementById("Player1Cor").style.visibility = "hidden"
                document.getElementById("Player2Cor").style.visibility = "hidden"
                document.getElementById("Player1Wor").style.visibility = "hidden"
                document.getElementById("Player2Wor").style.visibility = "hidden"
                document.getElementById("winner").style.visibility = "visible"
                document.getElementById("winner").innerHTML = "Winner:Player1"
            }else if (player2NumRight>player1NumRight){
                document.getElementById("playTurn").style.visibility = "hidden"
                document.getElementById("question2").style.visibility = "hidden"
                document.getElementById("answerToCheck2").style.visibility = "hidden"
                document.getElementById("Chk2").style.visibility = "hidden"
                document.getElementById("Correct2").style.visibility = "hidden"
                document.getElementById("Next2").style.visibility = "hidden"
                document.getElementById("Player1Cor").style.visibility = "hidden"
                document.getElementById("Player2Cor").style.visibility = "hidden"
                document.getElementById("Player1Wor").style.visibility = "hidden"
                document.getElementById("Player2Wor").style.visibility = "hidden"
                document.getElementById("winner").style.visibility = "visible"
                document.getElementById("winner").innerHTML = "Winner:Player2"
            }
        }

    }
}
