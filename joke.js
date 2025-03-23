fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);

    joke.textContent = data.joke;
    BasicJoke.textContent = "Joke of the Day😹"
});

document.getElementById("programming").addEventListener("click", myFunction()){
fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.programming);

    
});

