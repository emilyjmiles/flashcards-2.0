const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
    let cards;
    let deck;

    beforeEach( () => {
       cards = [
        new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'),
        new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array'),
        new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
       ];
       deck = new Deck(cards);
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be a new instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck)
    });

    it('should be able to store an array of Card instances', () => {
        expect(deck.cards).to.deep.equal(cards);
        expect(deck.cards[0]).to.be.an.instanceof(Card)
        expect(deck.cards[1]).to.be.an.instanceof(Card)
        expect(deck.cards[2]).to.be.an.instanceof(Card)
    });

    it('should be able to count cards in a deck', () => {
        expect(deck.cards.length).to.equal(3)
        expect(deck.countCards()).to.equal(deck.cards.length)
    });
});