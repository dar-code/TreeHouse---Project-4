# TH Project 4 - OOP GameShow App - "Phrase Hunter"

This is a word guessing game created using JavaScript and object-oriented programming OOP to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.


Game Rules

* The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
* The player clicks an onscreen keyboard to guess letters in the phrase.
* The letter is disabled on the onscreen keyboard and a player can't select that letter again.
* If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
* If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
* The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.