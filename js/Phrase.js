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
                

                if (selected === ' ') {
                    liPhrase.classList = 'space';

                } else if (selected === splitPhrase) {
                    liPhrase.classList = 'hide letter';
                }

            });
        }   










    }