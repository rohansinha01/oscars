import { useState } from 'react';
import movies from '../data/movies.json';


const Ranker = () => {
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');
  const [thirdOption, setThirdOption] = useState('');
  const [fourthOption, setFourthOption] = useState('');

  const filteredMovies = movies.filter(movie => movie.title !== firstOption);
  const secondFilteredMovies = movies.filter(movie => movie.title !== firstOption && movie.title !== secondOption);
  const thirdFilteredMovies = movies.filter(movie => movie.title !== firstOption && movie.title !== secondOption && movie.title !== thirdOption)
 

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
      <form>
        <fieldset>
          <legend>
            What is your #4 Option?
          </legend>

          <select
            value={fourthOption}
            onChange={event => {
              setFourthOption(event.target.value);
            }}
          >
            <option value="" disabled>Select an option</option>
            {thirdFilteredMovies.map((movie) => (
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