/*
Pseudo code:

Main goals:
1. Create a canvas and a black background.

2. Create a ship at the bottom of the screen.

3. Allow that ship to move to the left or right when the user clicks on the approprate keyboard button.

4. When the user clicks on the space bar, allow for a projectile to shoot from the ship upward.

5. Create an enemy that can be destroyed when the projectile hits it.

6. Display a win screen if enemy has been destroyed.

Extra credit:
1. Allow the enemy to move in a pattern similar to traditional space invaders.
2. Allow the enemy to be able to hurt the player when touched (one hit kills are ok)
3. Create a way to reset the board
4. Track the users score
  - Number of hits
  - Number of ships remaining
5. Randomize enemy speed.

*/
var shipImage;
function preload() {
  shipImage = loadImage('images/spaceship.png');

}
var shipX;

function setup() {
  createCanvas(500, 500);
  shipX = width / 2 - 25;
}

function draw() {
  background("black");
  //rect(shipX, height - 100, 50, 100);
  image(shipImage, shipX, height - 100)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    shipX -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    shipX += 20;
  }
}