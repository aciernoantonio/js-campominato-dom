//Genera una griglia di gioco in base alla difficoltà

let playElement = document.getElementById("play");

playElement.addEventListener("click", difficultLevel);


/* 
    FUNCTION SECTION
*/

function difficultLevel(){
    let valore = document.getElementById("level").value;
    
    if (valore == "easy") {
        gridLevel(100);

    } else if (valore == "medium") {
        gridLevel(81);

    } else if (valore == "hard") {
        gridLevel(49);
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

        cellElement.addEventListener("click", function() {
            cellElement.style.backgroundColor = "cornflowerblue";
        })
    }

}






