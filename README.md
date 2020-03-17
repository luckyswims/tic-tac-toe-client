# Lucky's Tic-Tac-toe

## Technologies Used
-HTML  
-CSS  
-JavaScript  
-jQuery  
-AJAX  

## Development
To start, I layed out each of the pieces I would need to build in order for the game to work. I then put together the following checklist to give myself a guide as I was working on the project.

-Create rough HTML template (Header, nav, main, grid, footer)  
-Build the logic for updating the game board (display an X on first click, O on second click...)  
-Build the logic for checking if the game is over  
-Build the logic for checking whether a use won or the game is a tie  
-Build the logic to prevent updates on squares that have already been updated  
-Build the logic to prevent updates after the game has ended  
-Build the ability to register  
-Build the ability to login  
-Build the ability to logout  
-Build the API call to create a new game on the server  
-Build the API calls to update the server when a player makes a move  
-Build the API call to request all games the user has played  
-Build the logic to show/hide relavent buttons based on status (logged in/out)  

I then wrote some user stories to help me organize my thoughts of how a user would interact with the application.

-As a user, I want to make moves by clicking on the square I want to mark.  
-As a recurring user, I want to login to an account to track my stats.  
-As a user, I want the site to inform me when the game is over.  
-As a user, I want the site to inform me who has won.  
-As a user, I want the site to inform me who's turn it is.  
-As a user, I want to be able to logout when I am done.  

I also drew up a couple of initial wireframes.

![alt-text][wireframe1]

I worked through the above list, and I was able to troubleshoot any bugs I came across by reviewing my code and using console logs, until I got to the API calls to update the server. Before setting up any of the API calls, I ran them as curl scripts to help me identify any issues before I started making the calls in my code. While my curl script worked fine for updating the game on the server, my AJAX call was resulting in a 400 Bad Request error. I looked through the request to see if there were any missing commas, and missing parentheses, the URL was correct, and I got to the point where I was confident that the issue was with my JSON object, but I couldn't tell what it was.

I then opened an issue request on github to let the instructors know that I was stuck, what I was stuck on, and what I had tried. One of the instructors then walked me through some additional troubleshooting steps: reviewing the error object I got back from the server, checking how the browser was representing the JSON object, and finally submitting a JavaScript object to the AJAX function instead of a JSON object. It turned out that the issue was that the AJAX function was expecting a JavaScript object, not a JSON object.

Once I got past that blocker I was able to finish writing the application. Once I felt I was done I then performed some testing to make sure it worked the way I expected: making sure each of the buttons does what it's supposed, that buttons only display when they are relavent, and trying out doing things in different orders. At this point I had a functional application.

Now that I have built the website, I have a better feel for what I should include in my wireframes, so I redid my wireframes to use for any updates or styling that I apply.

![alt-text][wireframePage1]
![alt-text][wireframePage2]
![alt-text][wireframePage3]

## To Do list
~~-Update CSS to make the site more visually appealing~~  
~~-Add more detailed statistics: completed games,  incomplete games, wins/losses/draws~~  
~~-Add How to play page which describes how you play tic-tac-toe, and explains how to use the app~~  
~~-Add about the app page~~  
~~-Add an AI opponent~~  
~~-Add difficult levels for the AI opponent~~  
-Add the ability to restart an incomplete game  
-Add the ability to play against a person over the internet

[wireframe1]: https://github.com/luckyswims/tic-tac-toe-client/blob/master/assets/images/Initial%20Wireframes.jpg
[wireframePage1]: https://github.com/luckyswims/tic-tac-toe-client/blob/master/assets/images/wireframePage1.jpg
[wireframePage2]: https://github.com/luckyswims/tic-tac-toe-client/blob/master/assets/images/wireframePage2.jpg
[wireframePage3]: https://github.com/luckyswims/tic-tac-toe-client/blob/master/assets/images/wireframePage3.jpg
