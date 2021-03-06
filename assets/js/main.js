//Genera una griglia di gioco in base alla difficoltÃ 

let playElement = document.getElementById("play");

playElement.addEventListener("click", difficultLevel);

let bombList = [];

/* 
    FUNCTION SECTION
*/

let maxTry;

function difficultLevel(){
    let valore = document.getElementById("level").value;
    
    if (valore == "easy") {
        gridLevel(100);
        maxTry = 100;

    } else if (valore == "medium") {
        gridLevel(81);
        maxTry = 81;

    } else if (valore == "hard") {
        gridLevel(49);
        maxTry = 49;
    }
}


//genera una griglia di gioco quadrata

//seleziono il container dove andranno le celle
const containerElement = document.querySelector(".cells");

//creo elemento da inserire 100 volte
function gridLevel (limit){

    containerElement.innerHTML = "";

    for (let i = 1; i <= limit; i++){
    
        let cellElement = document.createElement("div");
        cellElement.textContent = i;
        //aggiungo una classe all'elemento appena creato
        cellElement.classList.add("single_cell");
    
        //appendo l'elemento al suo container
        containerElement.append(cellElement);

        cellElement.addEventListener("click", cellClick);

        cellElement.addEventListener("click", bombClick);

    }

}


//crea 16 numeri casuali per le bombe

let goodClick = [];


function generateBomb(min, max){

    for (let j = 1; j <= 16; j++){
    
        let bombGen = Math.floor(Math.random() * (max - min)) + min;

        if (bombList.includes(bombGen)) {
            let newNumber = Math.floor(Math.random() * (max - min)) + min;
            bombList.push(newNumber)
        } else {

            bombList.push(bombGen);
        }
 
    }
    
/*     console.log(bombList);   */      

}

generateBomb(1, 100);   

let contatore = 0;

function cellClick(){
    this.classList.add("blue");

}

function bombClick(){
    const cellElement = parseInt(this.textContent);
/*     console.log(`cella ${cellElement}`); */

    if(bombList.includes(cellElement)){
        this.classList.add("red");
        alert("Bomba, hai perso!");
        alert(`Hai totalizzato ${contatore} punti!`)

    } else {
        this.classList.add("blue")
        contatore++;
        goodClick.push(contatore)

        if (goodClick == maxTry - 16){
            alert("Hai vinto!");
        }
    }
}






