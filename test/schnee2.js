const snowflakeHeight = 10; // Height of each snowflake (in pixels)
const snowflakeWidth = 10; // Width of each snowflake (in pixels)
const snowflakeCreationInterval = 4000; // Interval in milliseconds to create new snowflakes
const initialVerticalPosition = 5; // Starting vertical position of snowflakes
const snowflakeFallSpeed = 50; // Speed at which snowflakes fall (in milliseconds)
const maxSnowflakes = 100; // Maximum number of snowflakes on screen
const snowflakeMovementRandomness = Array(maxSnowflakes).fill().map(() => Math.random() * 3); // Randomness for snowflake movement

const screenWidth = screen.width; // Width of the screen
const screenHeight = screen.height; // Height of the screen

let snowflakes = []; // Array to store snowflake elements

setInterval(createSnowflake, snowflakeCreationInterval); // Create new snowflakes at a set interval
setInterval(moveSnowflakes, snowflakeFallSpeed); // Animate falling snowflakes at a set interval

// Function to create new snowflakes
function createSnowflake() {
  if (snowflakes.length < maxSnowflakes) {
    // Create a new snowflake only if we haven't reached the limit
    let snowflake = document.createElement("img");
    snowflake.src = "/resources/Schneeflocke.png";
    snowflake.alt = "snowflake";
    snowflake.classList.add('snowflake');
    snowflake.style.position = "fixed";
    snowflake.style.top = initialVerticalPosition + "px"; // Start at a fixed vertical position
    snowflake.style.width = snowflakeHeight + "px"; // Set width of snowflake
    snowflake.style.height = snowflakeWidth + "px"; // Set height of snowflake
    snowflake.style.left = Math.round(Math.random() * (screenWidth - snowflakeHeight)) + 'px'; // Random horizontal position
    
    // Add the snowflake to the body and store it in the array
    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);
  }
}

// Function to move snowflakes
function moveSnowflakes() {
  // Loop through all snowflakes and update their positions
  snowflakes.forEach((snowflake, index) => {
    // Random horizontal direction based on the randomness value
    let horizontalDirection = snowflakeMovementRandomness[index] > 2 ? 1 : -1; 
    let fallSpeedAdjustment = Math.abs(snowflakeMovementRandomness[index]) - 1; // Adjust fall speed

    // Update horizontal position with boundaries
    let newLeftPosition = snowflake.offsetLeft + horizontalDirection * fallSpeedAdjustment;
    if (newLeftPosition < 0 || newLeftPosition > screenWidth) {
      newLeftPosition = (newLeftPosition < 0 ? screenWidth : 0); // If snowflake moves off screen, reset to the other side
    }

    // Update snowflake's horizontal position
    snowflake.style.left = newLeftPosition + "px";
    
    // Check if the snowflake has reached the bottom of the screen
    if (snowflake.offsetTop > screenHeight - 50) {
      snowflake.style.top = initialVerticalPosition + "px"; // Reset position to the top
    } else {
      snowflake.style.top = snowflake.offsetTop + 2 + "px"; // Move snowflake down by 2px
    }
  });
}
