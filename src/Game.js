const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round.js')

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.round = {};
  }

  printMessage = (deck) => { 
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`) 
};

  printQuestion = (round) => util.main(round);

  createCards = () => {
    this.cards = prototypeQuestions.map(card => (
      new Card(card.id, card.question, card.answers, card.correctAnswer))
    );
    return this.cards;
  };

  createDeck = () => {
    this.deck = new Deck(this.createCards());
    return this.deck;
  };

  newRound = () => {
    this.round = new Round(this.createDeck());
    return this.round;
  };

  startGame = () => {
    this.newRound();
    this.printMessage(this.deck);
    this.printQuestion(this.round)
  };
}

module.exports = Game;