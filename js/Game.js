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
        overlayDiv.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

//checks if there are any hidden letters left. If none are left, the player won.   

    checkForWin() {
        let hiddenLetter = document.getElementsByClassName("hide");

       if(hiddenLetter.length === 0) {
           return true;
       } else {
           return false;
       }
    };

 

//added removeLife method which removes life by replacing the liveHeart image with lostHeart image.

    removeLife() {
            this.missed += 1;
            const hearts = document.querySelector("img[src='images/liveHeart.png']");
            hearts.setAttribute("src", "images/lostHeart.png");
            if(this.missed === 5) {
                this.gameOver();
                this.resetGame();
            };
    };

//added gameOver method which shows either "winning" or "losing" message respective of the outcome

    gameOver(gameWon) {
        const startScreen = document.getElementById("overlay");
        const endMessage = document.getElementById("game-over-message");
        startScreen.style.display = "";

        if(gameWon) {
            endMessage.textContent = "Congratulations! You know these songs really well!";
            startScreen.className = "win";
            startBttn.textContent = "Try again";
            this.resetGame();
        } else {
            endMessage.textContent = "Sorry, better luck next time!";
            startScreen.className = "lose";
            startBttn.textContent = "Try again";
            this.resetGame();
       };
    };


//added handleInteraction method which handles what happens when the right letter is guessed vs. when wrong letter is guessed

    handleInteraction(button) {
        let key = this.activePhrase.checkLetter(button.textContent);
                
        if (key) {
            this.activePhrase.showMatchedLetter(button.textContent);
            button.classList = "chosen"

        if (this.checkForWin()) {
            this.gameOver(true);
            this.resetGame();
        }
        } else {
     
        button.classList = "wrong"
            this.removeLife();
            this.resetGame();
        };
 
        button.disabled = true
    };

    
    resetGame() {
        let gameReset = document.getElementById("qwerty");
        gameReset.forEach(songName => {
            songName.remove()
        });

        let buttonReset = document.getElementById("qwerty");
        buttonReset.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen');
            button.classList.remove('wrong');
        });

        let heartReset = document.document.getElementById("scoreboard");
        heartReset.forEach(reset => {
            reset.src = 'images/liveHeart.png'
        });
    };

}