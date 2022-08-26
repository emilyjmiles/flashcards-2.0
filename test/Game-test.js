const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round.js')
const Game = require('../src/Game.js')

describe('Game', () => {
    let cards;
    let deck;
    let round;
    let game;

    beforeEach( () => {
        cards = [
            new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'),
        ];
        deck = new Deck(cards);
        round = new Round(deck)
        game = new Game()
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function')
    });

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game)
    });

    it('should start with no cards', () => {
        expect(game.cards).to.deep.equal([]);
    });

    it('should start with an empty deck', () => {
        expect(game.deck).to.deep.equal({});
    });

    it('should start with no rounds being played', () => {
        expect(game.round).to.deep.equal({});
    });

    it('should be able to create cards', () => {
        expect(game.createCards()).to.deep.equal(game.cards)
        expect(game.cards[10]).to.be.an.instanceOf(Card)
        expect(game.cards[20]).to.be.an.instanceOf(Card)
    });
    
    it('should be able to store created cards in a deck', () => {
        expect(game.createDeck()).to.deep.equal(game.deck)
        expect(game.deck).to.be.an.instanceOf(Deck)
    });
    
    it('should be able to start a round using deck that is created', () => {
        expect(game.newRound()).to.deep.equal(game.round)  
        expect(game.round).to.be.an.instanceOf(Round)      
    });
});