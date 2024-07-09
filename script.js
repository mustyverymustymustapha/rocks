const danceButton = document.getElementById('danceButton');
const feedButton = document.getElementById('feedButton');
const petButton = document.getElementById('petButton');
const rockImage = document.getElementById('rockImage');
const rockStatus = document.getElementById('rockStatus');

let rockState = 'Content'; // Initial rock state

function updateRockStatus(newState) {
  rockState = newState;
  rockStatus.textContent = newState;
  if (newState === 'Tired') {
    rockImage.src = 'tired_rock.jpg';
  } else if (newState === 'Sad') {
    rockImage.src = 'sad_rock.jpg';
  } else {
    rockImage.src = 'mr_rock.jpg'; // Default image
  }
}

danceButton.addEventListener('click', () => {
  rockImage.src = 'dance_rock.jpg'; // Change the image source

  setTimeout(() => {
    rockImage.src = 'mr_rock.jpg'; // Change back after 5 seconds
    if (rockState === 'Tired') {
      updateRockStatus('Content'); // Rock is no longer tired
    }
  }, 5000); 
});

feedButton.addEventListener('click', () => {
  if (rockState === 'Tired') {
    updateRockStatus('Content'); // Rock is no longer tired
  }
});

petButton.addEventListener('click', () => {
  if (rockState === 'Sad') {
    updateRockStatus('Content'); 
  }
});

// Function to change the rock state randomly every 20 seconds
function changeRockState() {
  const possibleStates = ['Content', 'Tired', 'Sad'];
  const randomIndex = Math.floor(Math.random() * possibleStates.length);
  updateRockStatus(possibleStates[randomIndex]);

  // Schefule the next state change
  setTimeout(changeRockState, 20000); // 20 seconds
}

updateRockStatus(rockState);
changeRockState(); // Start the random state changes