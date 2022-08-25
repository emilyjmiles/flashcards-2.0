const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCard = this.deck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
    };

    returnCurrentCard = () => this.currentCard = this.deck[this.turns];

    takeTurn = (userGuess) => {
        const turn = new Turn(userGuess, this.currentCard);
        this.turns += 1;
        turn.evaluateGuess()
            ? this.correctGuesses.push(this.currentCard.id) 
            : this.incorrectGuesses.push(this.currentCard.id);          
        this.returnCurrentCard();
        return turn.giveFeedback();
    };

    calculatePercentCorrect = () => Math.floor((this.correctGuesses.length / this.turns) * 100);

    endRound = () => {
        const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        console.log(endMessage)
        console.timeLog('Game run time: ')
        return endMessage
    };
};

module.exports = Round;