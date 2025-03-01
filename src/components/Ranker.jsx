import { useState } from "react";
import movies from "../data/movies.json";

const Ranker = () => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [thirdOption, setThirdOption] = useState("");
  const [fourthOption, setFourthOption] = useState("");
  const [fifthOption, setFifthOption] = useState("");
  const [sixthOption, setSixthOption] = useState("");
  const [seventhOption, setSeventhOption] = useState("");
  const [eighthOption, setEighthOption] = useState("");
  const [ninthOption, setNinthOption] = useState("");
  const [tenthOption, setTenthOption] = useState("");

  const filteredMovies = movies.filter((movie) => movie.title !== firstOption);
  const secondFilteredMovies = movies.filter(
    (movie) => movie.title !== firstOption && movie.title !== secondOption
  );
  const thirdFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption
  );
  const fourthFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption
  );
  const fifthFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption &&
      movie.title !== fifthOption
  );
  const sixthFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption &&
      movie.title !== fifthOption &&
      movie.title !== sixthOption
  );
  const seventhFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption &&
      movie.title !== fifthOption &&
      movie.title !== sixthOption &&
      movie.title !== seventhOption
  );

  const eighthFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption &&
      movie.title !== fifthOption &&
      movie.title !== sixthOption &&
      movie.title !== seventhOption &&
      movie.title !== eighthOption
  );

  const ninthFilteredMovies = movies.filter(
    (movie) =>
      movie.title !== firstOption &&
      movie.title !== secondOption &&
      movie.title !== thirdOption &&
      movie.title !== fourthOption &&
      movie.title !== fifthOption &&
      movie.title !== sixthOption &&
      movie.title !== seventhOption &&
      movie.title !== eighthOption &&
      movie.title !== ninthOption
  );

  return (
    <>
      <form>
        <fieldset>
          <legend>What is your #1 Option?</legend>

          <select
            value={firstOption}
            onChange={(event) => {
              setFirstOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
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
          <legend>What is your #2 Option?</legend>

          <select
            value={secondOption}
            onChange={(event) => {
              setSecondOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
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
          <legend>What is your #3 Option?</legend>

          <select
            value={thirdOption}
            onChange={(event) => {
              setThirdOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
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
          <legend>What is your #4 Option?</legend>

          <select
            value={fourthOption}
            onChange={(event) => {
              setFourthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {thirdFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #5 Option?</legend>

          <select
            value={fifthOption}
            onChange={(event) => {
              setFifthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {fourthFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #6 Option?</legend>

          <select
            value={sixthOption}
            onChange={(event) => {
              setSixthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {fifthFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #7 Option?</legend>

          <select
            value={seventhOption}
            onChange={(event) => {
              setSeventhOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {sixthFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #8 Option?</legend>

          <select
            value={eighthOption}
            onChange={(event) => {
              setEighthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {seventhFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #9 Option?</legend>

          <select
            value={ninthOption}
            onChange={(event) => {
              setNinthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {eighthFilteredMovies.map((movie) => (
              <option key={movie.index} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <form>
        <fieldset>
          <legend>What is your #10 Option?</legend>

          <select
            value={tenthOption}
            onChange={(event) => {
              setTenthOption(event.target.value);
            }}
          >
            <option value="" disabled>
              Select an option
            </option>
            {ninthFilteredMovies.map((movie) => (
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
