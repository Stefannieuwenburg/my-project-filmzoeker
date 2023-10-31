//  De ul waar alle movies aan worden geplakt:
const movieList = document.getElementById("imdbMovies");

// Functie om films toe te voegen aan de DOM:
function addMoviesToDom(movies) {
  //lijst leeg maken:
  movieList.innerHTML = " ";

  //  Door alle movies zoeken en Li's maken met .forEach:
  movies.forEach((movie) => {
    const listItem = document.createElement("li");
    const newImage = document.createElement("img");
    newImage.src = movie.Poster;
    const newLink = document.createElement("a");
    newLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    newLink.target = "_blank";

    // Elementen met elkaar verbinden:
    listItem.appendChild(newLink);
    newLink.appendChild(newImage);
    movieList.appendChild(listItem);
  });
}

addMoviesToDom(movies);

// Functie radionbuttons met event:
function addEventListeners() {
  const radioButtons = document.getElementsByName("filmFilter");
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleOnChangeEvent);
  });
}

// Functie DOM: 
document.addEventListener("DOMContentLoaded", (event) => {
  addEventListeners();
});

// Functie switch-statement:
function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "princess":
      filterMovies("Princess");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    default:
      "latest";
      filterLatestMovies();
      break;
  }
}

// Functie voor het filteren van de films:
function filterMovies(wordInMovieTitle) {
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.includes(wordInMovieTitle);
  });
  addMoviesToDom(filteredMovies);
}

// Functie voor de nieuwste films:
function filterLatestMovies() {
  const latestMovie = movies.filter((movie) => {
    return movie.Year >= 2014;
  });
  addMoviesToDom(latestMovie);
}
