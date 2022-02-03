// Mike Ramsey Week 5 Coding Assignment

class Aquarium {
    constructor(tankName, tankGal) {
        this.tankName = tankName;
        this.tankGal = tankGal;
        this.tankFish = [];
    }
}

class Fish {
    constructor(fishSpecies, fishQuantity) {
        this.fishSpecies = fishSpecies;
        this.fishQuantity = fishQuantity;
    }
}

class Menu {
    constructor() {
        this.tanks = [];
        this.fishList = [];
        this.selectedTank = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTank();
                    break;
                case '2':
                    this.viewTanks();
                    break;
                case '3':
                    this.modifyTanks();
                    break;
                default:
                    selection = 0;    
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye');
    }

    showMainMenuOptions() {
        return prompt(`
        0) Back
        1) Add an Aquarium
        2) View Aquariums
        3) Modify Aquariums`);
    }

    showTankMenuOptions(tankDescription) {
        return prompt(`
        0) Back
        1) Add fish to aquarium
        2) Remove fish from aquarium
        3) Delete aquarium
        ----------------------
        ${tankDescription}`);
    }

    createTank() {
        let name = prompt('Enter name for this aquarium:');
        let size = prompt('How many gallons?');
        this.tanks.push(new Aquarium(name, size));
    }

    viewTanks() {
        let tankString = '';
        this.tanks.forEach((tank, index) => {
            tankString += index + ') ' + tank.tankName + ' - ' + tank.tankGal + ' gallons\n' +
            '------------\n';
        }
        )

      alert(tankString);
    }
    
    modifyTanks() {
        let index = prompt('Enter the number of the tank you wish to modify:');
        if (index > -1 && index < this.tanks.length) {
            this.selectedTank = this.tanks[index];
            let description = 'Aquarium: ' + this.selectedTank.tankName + '\n';

            for (let i = 0; i < this.selectedTank.tankFish.length; i++) {
                description += i + ' - ' + this.selectedTank.tankFish[i].fishSpecies + ' (' 
                + this.selectedTank.tankFish[i].fishQuantity + ')\n'
            }
            let selection = this.showTankMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addFish();
                    break;
                case '2':
                    this.deleteFish();
                    break;
                case '3':
                    this.deleteTank();
                    break;
            }
        }
    }

    addFish() {
        let name = prompt('Enter species of fish');
        let quantity = prompt('How many are you adding?');
        this.selectedTank.tankFish.push(new Fish(name, quantity));
    }

    deleteTank() {
        let index = prompt('Enter the number of the aquarium you wish to delete:');
        if (index > -1 && index < this.tanks.length) {
            this.tanks.splice(index, 1);
        }
    }

    deleteFish() {
        let index = prompt('Enter the number of the fish you wish to remove:');
        if (index > -1 && index < this.selectedTank.tankFish.length) {
            this.selectedTank.tankFish.splice(index, 1);
        }
    }

}

let menu = new Menu();
menu.start();

