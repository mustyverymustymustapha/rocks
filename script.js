const danceButton = document.getElementById('danceButton');
const feedButton = document.getElementById('feedButton');
const petButton = document.getElementById('petButton');
const rockImage = document.getElementById('rockImage');
const rockStatus = document.getElementById('rockStatus');

let rockState = 'Content'; // Initial rock statee

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
