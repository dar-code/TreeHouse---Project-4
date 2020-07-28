/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Crated the Game class

 class Game {

//added a contructor to the game class and defining the following properties: 'missed', 'phrases', and 'activePhrase'

    constructor () {

        this.missed = 0;
        this.phrases = [
            
//added Mogli's songs in the phrases property

            new Phrase ('alaska'),
            new Phrase ('earth'),
            new Phrase ('wanderer'),
            new Phrase ('bird'),
            new Phrase ('road holes')];
        this.activePhrase = null;
    }

//added the getRandomPhrase method which will return a random property from the phrases property array

    getRandomPhrase() {
        const randomPhrasePick = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrasePick;
    }

//added the startGame method which will, when called, hide the intro page and show the random page picked by the getRandomPhrase method

    startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.hidden;

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    

}