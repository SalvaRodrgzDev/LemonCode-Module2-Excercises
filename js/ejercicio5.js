class  SlotMachine {

    constructor() {
        this.coins = 0;
    }

    getBool = () => Math.random() >= 0.5;

    getResult = () => [ this.getBool() , this.getBool() , this.getBool() ].some(x => x === false);

    checkResult = (result) => {

        console.log("Play slot machine");

        if (result) {

            console.log("Good luck next time!! 💸💸💸");

        }else {
            
            console.log(`Congratulations!!!. You won ${this.coins} coins!! 💰💰💰`);

            this.coins = 0;
        }
    }

    play = () => {
        this.coins += 1;

        this.checkResult(this.getResult());

    }
}

const slot = new SlotMachine();

console.log(`


EJERCICIO 5: `);
slot.play();
console.log(`Coins: ${slot.coins}`);
slot.play();
console.log(`Coins: ${slot.coins}`);
slot.play();
console.log(`Coins: ${slot.coins}`);
slot.play();
console.log(`Coins: ${slot.coins}`);
slot.play();
console.log(`Coins: ${slot.coins}`);
