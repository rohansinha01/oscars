import data from "../data/movies.json";
import { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState('')
  return (

    <form>
      <fieldset>
        <legend>
          What is your #1 Option?
        </legend>

        <select
          value={selectedOption}
          onChange={event => {
            setSelectedOption(event.target.value)
          }}>
          
          {movies.map((movie) => (
            <option key={movie.index} value={movie.title}>
              {movie.title}
            </option>
          ))}

        </select>
      
       
  
      </fieldset>
      </form>
  
    

  );
  
};

export default Ranker;
