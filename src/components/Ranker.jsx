import { useState } from 'react';
import data from '../data/movies.json'

const Ranker = () => {
const [movieVotes, setMovieVotes] = useState('')
  return (
    <div>
    {data.map((item, index) => (
        <div key={index}>
        <h3>{item.title}: {item.status} <input type='number' value={movieVotes}
        onChange={(e) => setMovieVotes(e.target.value)}/></h3>
        </div>
        )
    )
}
    </div>
            );
        };

export default Ranker