class Elevator {
    // constructeur de la class Elevator
    constructor(minFloor, maxFloor) {
        (this.currentFloor = 0),
            (this.minFloor = minFloor),
            (this.maxFloor = maxFloor);
    }

    // fonction qui permet à mon ascenseur de me monter
    goUp() {
        // je verifie si l'ascenseur n'est pas deja au dernier étage
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor += 1;
        } else {
            alert("Vous ne pouvez pas monter plus haut");
        }
    }

    // fonction qui permet à mon ascenseur de me descendre
    goDown() {
        // je verifie si l'ascenseur n'est pas deja au plus bas etage
        if (this.currentFloor > this.minFloor) {
            this.currentFloor -= 1;
        } else {
            alert("Vous ne pouvez pas descendre plus bas");
        }
    }
}
// initalisation
(function() {
    // je crée mon instance
    let myElevator = new Elevator(-1, 10);

    myElevator.goUp();
    myElevator.goDown();
    // j'affiche l'etat de l'ascenseur
    console.log(myElevator);
})();
