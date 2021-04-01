/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Added the Phrase class with the constructor method which has a phrase property

 class Phrase{

    constructor (phrase) {

        this.phrase = phrase.toLowerCase();

    }
        
//added the addPhraseToDisplay method

        addPhraseToDisplay() {

//selected the UL

            const ulPhrase = document.querySelector('#phrase ul');
            let splitPhrase = this.phrase.split('');
            

            splitPhrase.forEach(selected => {

                let liPhrase = document.createElement('li');
                ulPhrase.appendChild(liPhrase);
                liPhrase.innerHTML = selected;
                

                if (selected !== ' ') {
                    liPhrase.className = `hide letter ${selected}`;

                } else {
                    liPhrase.classList.add(' ');
                }

                // if (selected === splitPhrase.indexOf(selected))

            });
        }   

//This methods checks if selected letter is in the phrase. 

        checkLetter(letter) {
            if (this.phrase.includes(letter)) {
             return true;
            } else {
             return false;
                }
        };

//This method reveals the selected letter to te player.  

        showMatchedLetter(letter) {
            const showLetter = document.querySelectorAll('.phrase, li');
            for (let i = 0; i < showLetter.length; i ++) {
              if (showLetter[i].innerHTML === letter) {
                showLetter[i].className = 'show'
            }

        };

    }


    }