// Iteration 1: All directors? - Get the array of all directors.

ffunction getAllDirectors(movies) {
  return movies.map(function (movie) {
      return movie.director;
  }).filter(function (director, index, directors) {
      return directors.indexOf(director) === index;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const filteredMovies = movies.filter(function (movie) {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return filteredMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  const avgRate = movies.reduce(function (acc, val) {
      // if (!val.rate) val.rate = 0;
      return acc + (val.rate || 0);
  }, 0) / movies.length;
  return +(avgRate.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  
  let dramaMovies = movies.filter(function(movie){
    return movie.genre == "Drama";});

  let dramaMoviesLength = dramaMovies.length;

  if(dramaMoviesLength == 0)
return 0;
    
  else {
         let ratesDramaSum = dramaMovies.reduce(function (acc, value){
              return acc + value.rate;
               },0);

    let avgDramaRate = (ratesDramaSum/dramaMovies.length).toFixed(2);
    let avgDramaRateNumber = Number (avgDramaRate);
    return avgDramaRateNumber;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const sortedArray = array.slice().sort(function (a, b) {
      if (a.year !== b.year) {
          return a.year - b.year;
      } else {
          return a.title.localeCompare(b.title);
      }
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies.map(function (movie) {
      return movie.title;
  }).sort(function (a, b) {
      return a.localeCompare(b)
  }).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// easier solution
// function convertHours(duration) {
//   let totalTime = 0;
//   let hours = 0;
//   let minutes = 0;

//   const time = duration.split(" ");

//   if (time.length >= 2) {
//     hours = parseInt(time[0]);
//     minutes = parseInt(time[1]);
//   } else {
//     // if (time[0].indexOf("min") !== -1) {
//     if (time[0].includes("min")) {
//       minutes = parseInt(time[0]);
//       // } else if (time[0].indexOf("h") !== -1) {
//     } else if (time[0].includes("h")) {
//       hours = parseInt(time[0]);
//     }
//   }

//   totalTime = hours * 60 + minutes;
//   return totalTime;
// }

// function turnHoursToMinutes(movies) {
//   const newMovies = movies.map(function(movie) {
//     const newMovie = { ...movie };

//     newMovie.duration = convertHours(movie.duration);

//     return newMovie;
//   });

//   return newMovies;
// }

//Another solution:
function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
      let convertedDuration = 0;
      if (movie.duration.includes('h')) {
          convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
      }
      if (movie.duration.includes('min')) {
          convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
      }
      return { ...movie, duration: convertedDuration };
  });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = function (movies) {
    if (!movies.length) return null;
    const best = movies.reduce((best, movie) => {
        const average = ratesAverage(movies.filter(m => m.year === movie.year));
        if (average > best.rate || (average === best.rate && movie.year < best.year)) {
            best.year = movie.year;
            best.rate = average;
        }
        return best;
    }, {
        year: null,
        rate: null
    });

    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}
