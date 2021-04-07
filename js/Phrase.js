/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//added the Phrase class with the constructor method which has a phrase property

class Phrase{

    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }
        
//added the addPhraseToDisplay method which adds empty fields in on the screen. The number of empty fields is dependent on the selected phrase.

    addPhraseToDisplay() {
        const ulPhrase = document.querySelector('#phrase ul');
        let splitPhrase = this.phrase.split('');
            

        splitPhrase.forEach(selected => {
            let liPhrase = document.createElement('li');
            ulPhrase.appendChild(liPhrase);
            liPhrase.innerHTML = selected;
            
            if (selected === ' ') {
            liPhrase.classList.add("space");
            } else {
            liPhrase.classList.add("letter");
            liPhrase.classList.add("hide");
            }
        });
    }   

//added checkLetter method which checks if selected letter is in the phrase. 

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
        return true;
        } else {
        return false;
        }
    };

//added showMatchedLetter method which reveals the selected letter to te player.  

    showMatchedLetter(letter) {
        const showLetter = document.querySelectorAll('.phrase, li');
        for (let i = 0; i < showLetter.length; i ++) {
        if (showLetter[i].innerHTML === letter) {
        showLetter[i].className = 'show'
        }
    };
};

}