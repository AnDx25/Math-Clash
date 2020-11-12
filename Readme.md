A general approach to follow while building a board game
    1. Design the Layout
    2. Choose the datastructure or representation to hold the data of your game
    3. Map the DS to the DOM of our game
    4. Adding events
    5. Calling render to update the DOM
Object Oriented Programming
    1.Identify the objects (An object is one that is having some common properties or methods inside the game)
        Here : Cell(consist of numbers and selected prop), board (consist of various cells and the current sum ), game object (consist of target sum, score, cell, board)

Precautions to be considered :

    1. We have to mark the selected cells to green but it is necessary that those cells consist of numbers so only those cells needs to be green which have number and then get selected so instead of passing the number to the DS pass an object which will consist of the number and the state telling if that particular position is selected or not.