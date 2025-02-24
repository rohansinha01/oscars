
import data from '../data/movies.json'

const Ranker = () => {
  return (
    <div>
    {data.map((item, index) => (
        <div key={index}>
        <h3>{item.title}: {item.status} <input /></h3>
        </div>
        )
    )
}
    </div>
            );
        };

export default Ranker