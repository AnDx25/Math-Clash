# Math-Clash Game
It is a board game in which player has to select random numbers coming up to add up to the target value coming as soon as we get the previous round correctly.
Score is calculated on the basis of amount of random numbers we select to make a target sum. More the number of selections more will be the score.
As soon as a target sum is obtained the selected numbers will get disappear thus making space for new numbers.
Game ends as soon as the random numbers coming up touches the bottom of the board.
Live URL : https://andx25.github.io/Math-Clash/
## Table of Contents
* [Points for board games](#points-for-board-games)
* [Technologies used](#technologies-used)
* [Setup](#setup)
* [Features still need work](#features-still-need-work)

## Points for board games 
### General Approach
* Do not rush for functionality, just design the layout first
* Choose the datastructure or representation to hold the data of your game
* Map the datastructure to the DOM of the game
* Adding events(Here comes the functionality part to worry about)
* Calling render to update the DOM

### For making the game completely object oriented
For object oriented also above steps will be same as always but some more points need to be taken care of such as :
* Identify the objects (An object is one that is having some common properties or methods inside the game)
 Here : Cell(consist of numbers and selected property), board (consist of various cells and the current sum ), game object (consist of target sum, score, cell, board)
* Move the related properties and methods in common objects
* If an object requires to communicate with other object that is not accessible, move that method to upper object

## Technologies used
* HTML5
* CSS
* Javascript

## Setup
* Clone the repository
* Run the index.html file inside the folder

## Features still need work
* A visible timer on screen is not working
* Disappeard blocks doesn't get filled up by lower blocks.



