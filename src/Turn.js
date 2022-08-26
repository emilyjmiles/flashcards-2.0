class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.card = currentCard;
    };

    returnGuess = () => this.guess;

    returnCard = () => this.card;

    evaluateGuess = () => {
        if (this.card.correctAnswer === this.guess) {
            return true
        }
        return false
    };

    giveFeedback = () => {
        if (this.evaluateGuess()) {
            return 'Correct!'
        }
        return 'Incorrect!'
    };
};

module.exports = Turn;