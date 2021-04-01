/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//Creating the empty "game" variable and putting the Start button in the "startButton" variable

let game;

const startButton = document.getElementById('btn__reset');

//Adding the click event listener to the Start button

startButton.addEventListener('click', e => {

//Instantiating the a new Game object and calling the startGame() method

    game = new Game();
    game.startGame();

});

//Creating the "keyboard" which captures all of the keys on the onscreen keyboard

const keyboard = document.getElementById("qwerty");

//Adding a click event listener which gives an output only when a respective button tag is interacted with on the onscreen keyboard

keyboard.addEventListener("click", (key) => {
    const buttonClicked = key.target;
    if (buttonClicked.tagName === 'BUTTON') {
    game.handleInteraction(key.target)
    }
})

//TESTING

//Testing the classes added in otehr JS files:
//const phrase = new Phrase();
//const game = new Game();


//Testing the constructor method
//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);

//Testing added phrases
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);