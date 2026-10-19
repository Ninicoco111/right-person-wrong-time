// Boolean variables remember the selected story and the interpretation state.
let tooLate = true;
let readingVisible = false;

const firstImage = document.getElementById('image-one');
const lastImage = document.getElementById('image-three');
const lateButton = document.getElementById('late-button');
const timeButton = document.getElementById('time-button');
const readingButton = document.getElementById('reading-button');
const reading = document.getElementById('reading');

// The middle image stays the same. The first and last images switch places.
function showSequence() {
  if (tooLate === true) {
    firstImage.src = 'images/coffee.jpg';
    firstImage.alt = 'Two cups of coffee sitting on a cafe table';
    lastImage.src = 'images/station.jpg';
    lastImage.alt = 'An empty subway platform with no passengers';
    document.getElementById('title-one').textContent = 'The Date';
    document.getElementById('title-three').textContent = 'The Station';
    document.getElementById('letter-one').textContent = 'A';
    document.getElementById('letter-three').textContent = 'C';
    document.getElementById('story-title').textContent = 'Too Late';
    document.getElementById('sequence-label').textContent = 'SEQUENCE A → B → C';
    document.getElementById('reading-title').textContent = 'A missed connection.';
    document.getElementById('reading-text').textContent = 'Two coffees suggest that a meeting was planned. The watch turns that plan into a wait. Ending at an empty station makes the story feel like a missed connection: the right person, but the wrong time.';
  } else {
    firstImage.src = 'images/station.jpg';
    firstImage.alt = 'An empty subway platform with no passengers';
    lastImage.src = 'images/coffee.jpg';
    lastImage.alt = 'Two cups of coffee sitting on a cafe table';
    document.getElementById('title-one').textContent = 'The Station';
    document.getElementById('title-three').textContent = 'The Date';
    document.getElementById('letter-one').textContent = 'C';
    document.getElementById('letter-three').textContent = 'A';
    document.getElementById('story-title').textContent = 'Just in Time';
    document.getElementById('sequence-label').textContent = 'SEQUENCE C → B → A';
    document.getElementById('reading-title').textContent = 'A chance to meet.';
    document.getElementById('reading-text').textContent = 'An empty station first suggests an arrival or a journey. The watch now feels like anticipation. Ending with two coffees turns the same wait into a hopeful meeting: the right person, just in time.';
  }

  firstImage.classList.toggle('coffee-photo', tooLate);
  lastImage.classList.toggle('coffee-photo', !tooLate);
  lateButton.classList.toggle('active', tooLate);
  timeButton.classList.toggle('active', !tooLate);
  lateButton.setAttribute('aria-pressed', tooLate);
  timeButton.setAttribute('aria-pressed', !tooLate);
  readingVisible = false;
  reading.hidden = true;
  readingButton.textContent = 'Show the interpretation +';
  readingButton.setAttribute('aria-expanded', 'false');
  document.getElementById('status').textContent = 'Now showing ' + document.getElementById('story-title').textContent + '. Read the three images from beginning to end.';
}

function toggleReading() {
  readingVisible = !readingVisible;
  reading.hidden = !readingVisible;
  readingButton.setAttribute('aria-expanded', readingVisible);
  if (readingVisible === true) {
    readingButton.textContent = 'Hide the interpretation −';
  } else {
    readingButton.textContent = 'Show the interpretation +';
  }
}

// Click events also work with keyboard activation of the buttons.
lateButton.addEventListener('click', function () {
  tooLate = true;
  showSequence();
});
timeButton.addEventListener('click', function () {
  tooLate = false;
  showSequence();
});
readingButton.addEventListener('click', toggleReading);
document.getElementById('reset-button').addEventListener('click', function () {
  tooLate = true;
  showSequence();
});
showSequence();
