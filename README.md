# rock-paper-scissors

This project is about the lovely "Rock Paper Scissors" game.<br>
In this version of the game, there are two players, 
one of which is the computer. The game is played in infinite rounds. 
In each round, the computer randomly chooses one of the "Rock", 
"Paper" and "Scissors" options, and the other player must enter one of the 
three options too. In each round, being winner or loser of each player 
is displayed, as well as each player's current score. The game continues 
until one of the two players reaches five points first. Then the game 
ends and the final result (being winner or loser) is displayed 
along with the score of both players.<br>
The initial version was based on displaying the results on the console, 
but the current version has a user interface and displays the results on the screen.<br>
For me, the most challenging part was when I first wanted to display 
something on the page using JavaScript, and that was displaying 
the results of each round. To show the results, you must first 
select the section in which the results are to be displayed. For this, 
you should use "getElementBy*" or "querySelector*" commands. 
These commands return an array-like of selected element(s). So like an array, 
the results must be stored in indices to be visible on the page. 
It took me an hour or two to figure this out and solve it. 
There were other challenges, but none more time-consuming than the one mentioned.