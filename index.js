console.log('🏊 ❤  ');
const token = 'c86b2ed';
const apiRequests = `http://www.omdbapi.com/?apikey=${token}&`;
const userInput = document.querySelector('input');
const userToken = document.querySelector('input.API');
console.log(userToken);
const btn = document.querySelector('button');
const infoToUser = document.querySelector('.data-container');

btn.addEventListener('click', () => {
  console.log('clicked 🏊 ');
  const movie = userInput.value;
  infoToUser.innerHTML = '';
  searchMovie(movie).catch((err) => alert(err));
});

async function searchMovie(movie) {
  const resp = await fetch(`${apiRequests}t=${movie}`);
  console.log(resp.ok);
  const data = await resp.json();
  if (data.Response === 'True') {
    console.log(data.Response);
    console.log('🎥 ', data);

    // ! poster
    const poster = `${data.Poster}`;
    const imgPoster = document.createElement('img');
    imgPoster.src = poster;
    infoToUser.append(imgPoster);
    // ! title ,year
    const titleMovie = document.createElement('h3');
    titleMovie.innerHTML = `${data.Title} , ${data.Year}`;
    infoToUser.append(titleMovie);
    // ! Genre
    const genreMovie = document.createElement('p');
    genreMovie.innerHTML = `${data.Genre}`;
    infoToUser.append(genreMovie);
    // ! Plot
    const plot = document.createElement('p');
    plot.innerHTML = `${data.Plot}`;
    infoToUser.append(plot);
    // ! Director & Actors
    const cast = document.createElement('p');
    cast.innerHTML = `direct by : ${data.Director} , Actors : ${data.Actors}`;
    infoToUser.append(cast);
    // ! Ratings
    const ratings = document.createElement('p');
    ratings.classList.add('rating');
    for (let i = 0; i < data.Ratings.length; i++) {
      console.log(`${data.Ratings[i].Source} : ${data.Ratings[i].Value}`);
      ratings.innerHTML += `${data.Ratings[i].Source} :<br> ${data.Ratings[i].Value}<br>`;
    }

    infoToUser.append(ratings);
  } else {
    const titleMovie = document.createElement('h3');
    titleMovie.innerHTML = 'NOT FOUND ! 🚫  ';
    infoToUser.append(titleMovie);
  }
}
