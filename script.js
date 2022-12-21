const jokeText = document.getElementById('joke-text');
const nextBtn = document.getElementById('btn')
const loader = document.getElementById('loader');

// show loading graphic
function showLoading() {
    loader.hidden = false;
    jokeText.hidden = true;
}

// hide loading graphic
function hideLoading() {
    loader.hidden = true;
    jokeText.hidden = false;
}


// jokes from API

async function getJoke() {
    showLoading();
    const apiUrl = 'https://icanhazdadjoke.com/';
    const response = await fetch(apiUrl, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = response.json();
      return data;
  }


// show new joke, isolating the joke from 'id' and 'status' that we dont need

async function newJoke() {
    showLoading();
    const {joke} = await getJoke();
    // set joke, hide loader
    jokeText.textContent = joke;
    hideLoading();
  }



// on page load
newJoke();


// event listener
nextBtn.addEventListener('click', newJoke);
