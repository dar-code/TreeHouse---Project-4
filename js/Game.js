/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor () {

        this.missed = 0;
        this.phrases = [
            new Phrase ('alaska'),
            new Phrase ('earth'),
            new Phrase ('wanderer'),
            new Phrase ('bird'),
            new Phrase ('road holes')];
        this.activePhrase = null;
    }
    
    getRandomPhrase() {
        const randomPhrasePick = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrasePick;
    }

    startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.hidden;

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }
    

}