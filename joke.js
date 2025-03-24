//Basic Joke
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);

    NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
    JokeTitle.textContent = "Joke of the Day😹";
});

//programming Joke 
document.getElementById("programming").addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.joke);
        JokeTitle.textContent = "A Random Programming Joke"
        NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
 
    });
    });


//Miscellaneous Joke
document.getElementById("miscellaneous").addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.joke);
        JokeTitle.textContent = "A Random Miscellaneous Joke"
        NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
     
    });
    });

//Pun joke
document.getElementById("pun").addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.joke);
        JokeTitle.textContent = "A Random Pun"
        NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
     
    });
    });

//Spooky Joke
document.getElementById("spooky").addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.joke);
        JokeTitle.textContent = "A Random Spooky Joke"
        NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
     
    });
    });

//Christmas Joke
document.getElementById("christmas").addEventListener('click', function(){
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.joke);
        JokeTitle.textContent = "A Random Christmas Joke"
        NewJoke.textContent = data.joke || data.setup+ '...'+ data.delivery;
     
    });
    });