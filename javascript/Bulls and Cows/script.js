let pc_array,guessCount ,userName
function resetGame(){
    userName=prompt('enter your name: ')
    pc_array=[]
    guessCount=0
    for(let i=0;i<4;i++){
        let newNumber
        do {
            newNumber = Math.floor(Math.random() * 10);
        } while (pc_array.includes(newNumber));
        pc_array.push(newNumber);
    }
    console.log(pc_array);
}

function enterDataToTable(tableId, userInput,bull,cow){
    let table = document.getElementById(tableId);
    let newRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    cell1.textContent = userInput;
    cell2.textContent =bull;
    cell3.textContent =cow
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    table.appendChild(newRow);
}


function guess(){
    const btn=document.getElementById('guessbtn')
    if(btn.innerText=='reset'){
        resetGame()
        btn.innerText='Guess'
        return
    }
    let userInputElem=document.getElementById('userGuess');
    let userInput=userInputElem.value
    let user_array=userInput.toString().split('').map(Number)
    if(user_array.length<4) return
    userInputElem.value=''
    let bull=0
    let cow=0
    for(let i=0;i<4;i++){
        let isBull=false
        let isCow=false
        for(let y=0;y<4;y++){
            if(user_array[i]==pc_array[y]){
                if(i==y) isBull=true
                else isCow=true
            }
        }
        if(isBull) bull++
        else if(isCow) cow++
    }

    enterDataToTable('guessTable',userInput,bull,cow)
    guessCount++
    if(bull==4){
        btn.innerText='reset';
        enterDataToTable('Scores',userName,guessCount,'')
    }
}