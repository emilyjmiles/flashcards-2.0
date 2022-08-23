const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card;
    let turn1;
    let turn2;

    beforeEach(() => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn1 = new Turn('array', card);
        turn2 = new Turn('object', card);
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', () => {
        expect(turn1).to.be.an.instanceOf(Turn)
        expect(turn2).to.be.an.instanceOf(Turn)
    })
   
    it('should return a user\'s guess', () => {
        expect(turn1.returnGuess()).to.equal('array');
        expect(turn2.returnGuess()).to.equal('object');
    })

    it('should return the current instance of Card in play', () => {
        expect(turn1.returnCard()).to.be.an.instanceOf(Card);
        expect(turn2.returnCard()).to.be.an.instanceOf(Card);
    })

    it('should evaluate the user\'s guess', () => {
        expect(turn1.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(true);
    })

    it('should be give user feedback on their guess', () => {
        expect(turn1.giveFeedback()).to.equal('Incorrect!');
        expect(turn2.giveFeedback()).to.equal('Correct!');
    }) 
});