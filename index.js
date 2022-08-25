const Game = require('./src/Game.js')

console.log('Your project is running...'); 

const game = new Game();
game.startGame()

console.time('Game run time: ')