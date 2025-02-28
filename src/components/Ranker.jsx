import { useState } from 'react';


const movies = [
  {
      "index": 1,
      "title": "Nomadland",
      "status": "Winner"
  },
  {
      "index": 2,
      "title": "The Father",
      "status": "Nominee"
  },
  {
      "index": 3,
      "title": "Judas and the Black Messiah",
      "status": "Nominee"
  },
  {
      "index": 4,
      "title": "Mank",
      "status": "Nominee"
  },
  {
      "index": 5,
      "title": "Minari",
      "status": "Nominee"
  },
  {
      "index": 6,
      "title": "Promising Young Woman",
      "status": "Nominee"
  },
  {
      "index": 7,
      "title": "Sound of Metal",
      "status": "Nominee"
  },
  {
      "index": 8,
      "title": "The Trial of the Chicago 7",
      "status": "Nominee"
  }
]

const Ranker = () => {
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');
  const [thirdOption, setThirdOption] = useState('');

  const filteredMovies = movies.filter(movie => movie.title !== firstOption);
  const secondFilteredMovies = movies.filter(movie => movie.title !== firstOption && movie.title !== secondOption);
 

  return (
    <>
      <form>
        <fieldset>
          <legend>
            What is your #1 Option?
          </legend>

          <select
            value={firstOption}
            onChange={event => {
              setFirstOption(event.target.value);
            }}
          >
            <option value="" disabled>Select an option</option>
            {movies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
      
      <form>
        <fieldset>
          <legend>
            What is your #2 Option?
          </legend>

          <select
            value={secondOption}
            onChange={event => {
              setSecondOption(event.target.value);
            }}
          >
            <option value="" disabled>Select an option</option>
            {filteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>
            What is your #3 Option?
          </legend>

          <select
            value={thirdOption}
            onChange={event => {
              setThirdOption(event.target.value);
            }}
          >
            <option value="" disabled>Select an option</option>
            {secondFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
    </>
  );
};

export default Ranker;