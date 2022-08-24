const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCard = this.deck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
    }

    returnCurrentCard() {
        this.currentCard = this.deck[this.turns]
        return this.currentCard
    }

    takeTurn(userGuess) {
        this.turns += 1;
        let turn = new Turn(userGuess, this.currentCard)
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        } else {
            this.correctGuesses.push(this.currentCard.id)
        }           
        this.returnCurrentCard()
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        return Math.floor((this.correctGuesses.length / this.turns) * 100);
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;