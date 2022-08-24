const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round.js')

describe('Round', () => {
    let cards;
    let deck;
    let round;

    beforeEach( () => {
       cards = [
        new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'),
        new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array'),
        new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
       ];
       deck = new Deck(cards);
       round = new Round(deck)
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be a new instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round)
    });

    it('should be able to store a deck of cards', () => {
        expect(round.deck).to.equal(deck.cards)
        expect(round.deck.length).to.equal(3)
    });

    it('should have the current card in play be the first card in the deck', () => {
        expect(round.currentCard).to.equal(deck.cards[0])
    });

    it('should start with 0 turns being taken', () => {
        expect(round.turns).to.equal(0)
    });

    it('should start with an empty array of incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([])
    });

    it('should start with an empty array of correct guesses', () => {
        expect(round.correctGuesses).to.deep.equal([])
    });

    it('should update the current card in play with each turn taken', () => {
        expect(round.returnCurrentCard()).to.equal(round.currentCard)
    });

    it('should increment the turn count after each turn is taken', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('iteration method')
        expect(round.turns).to.equal(3);
    });

    it('should give user feedback on their guess after a turn is taken',() => {
        expect(round.takeTurn('function')).to.equal('Incorrect!')
        expect(round.takeTurn('array')).to.equal('Correct!')
    })

    it('should add any incorrect guesses into the the incorrect guesses array', () => {
        round.takeTurn('function')
        round.takeTurn('object')
        round.takeTurn('iteration method')
        expect(round.incorrectGuesses.length).to.equal(3)
    });

    it('should add any correct guesses into the the correct guesses array', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')
        expect(round.correctGuesses.length).to.equal(3)
    });

    it('should be able to calculate the percent of correct answers', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('iteration method')
        expect(round.calculatePercentCorrect()).to.equal(66)
    });

    it('should tell the user what precent of their guesses were correct', () => {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('iteration method')
        expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
    })
});