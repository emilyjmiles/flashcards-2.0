class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.card = currentCard;
    };

    returnGuess = () => { return this.guess };

    returnCard = () => { return this.card };

    evaluateGuess = () => {
        if (this.card.correctAnswer !== this.guess) {
            return false
        } else {
            return true
        };
    };

    giveFeedback = () => {
        if (this.evaluateGuess() === false) {
            return 'Incorrect!'
        } else {
            return 'Correct!'
        };
    };
};

module.exports = Turn;