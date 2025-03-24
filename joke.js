fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);

    NewJoke.textContent = data.joke;
    JokeTitle.textContent = "Joke of the Day😹";
});

//programming Joke 
document.getElementById("programming").addEventListener('click', function(){
fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    JokeTitle.textContent = "Programming Joke"
    NewJoke.textContent = data.joke || data.setup+ "..."+ data.delivery;
 
});
});


//Miscellaneous Joke


//Pun joke


//Spooky Joke


//Christmas Joke
