/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{

    constructor (phrase) {

        this.phrase = phrase.toLowerCase();

    }
/**
* Display phrase on game board
*/
        // addPhraseToDisplay() {

        //     const ulPhrase = document.querySelector('#phrase ul');
        //     let splitPhrase = this.phrase.split('');
            
        //     for(let i = 0; i < this.phrase.length; i++){
        //         let liPhrase = document.createElement('LI');
        //         liPhrase.innerHTML = splitPhrase[i];
        //         ulPhrase.appendChild(liPhrase);

        //         if (this.phrase[i] === ' ') {
        //             liPhrase.classList = 'space';

        //         } else if (this.phrase[i] === splitPhrase) {
        //             liPhrase.classList = 'hide letter';
        //         }

        //     }
        // }   
        
        addPhraseToDisplay() {

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