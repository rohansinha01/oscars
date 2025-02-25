import { useState } from 'react';
import data from '../data/movies.json';

const Ranker = () => {
    const [movieVotes, setMovieVotes] = useState({});
    const [usedRanks, setUsedRanks] = useState(new Set());
    const [sortedMovies, setSortedMovies] = useState(data);

    function handleChange(e, index) {
        const { value } = e.target;
        const rank = parseInt(value, 10);

        if (usedRanks.has(rank)) {
            alert('This rank is already taken. Please choose another rank.');
            return;
        }

        setMovieVotes((prevVotes) => {
            const newVotes = { ...prevVotes, [index]: rank };
            const newUsedRanks = new Set(Object.values(newVotes));
            setUsedRanks(newUsedRanks);
            return newVotes;
        });
    }

    function handleClick() {
        const sorted = [...data].sort((a, b) => {
            const rankA = movieVotes[data.indexOf(a)] || Infinity;
            const rankB = movieVotes[data.indexOf(b)] || Infinity;
            return rankA - rankB;
        });
        setSortedMovies(sorted);
    }

    return (
        <div>
            {sortedMovies.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}: {item.status}</h3>
                    <input
                        type='number'
                        name='rank'
                        value={movieVotes[data.indexOf(item)] || ''}
                        onChange={(e) => handleChange(e, data.indexOf(item))}
                    />
                </div>
            ))}
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Ranker;
