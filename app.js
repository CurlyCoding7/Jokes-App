//import axios from 'axios';

const jokeButton = document.querySelector('#jokeButton');
const jokeDisplay = document.querySelector('.joke');

  const getDadJoke = async () => {
      try {
        const config = {headers: {Accept: 'application/json'}} 
        const response = await axios.get(
            'https://icanhazdadjoke.com/',config);
        const jokeData = response.data.joke;
        return jokeData;
      } catch (error) {
        console.error(error);
        return "NO JOKES AVAILABLE! SORRY :("
      }  
    }


const dispalyJoke = async () => {
    jokeDisplay.innerHTML = "Loading...";
    const joke = await getDadJoke();
    jokeDisplay.innerHTML = joke;
}


jokeButton.addEventListener('click', dispalyJoke);


