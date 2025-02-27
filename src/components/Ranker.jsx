import data from "../data/movies.json";

const Ranker = () => {
  
  return (
    <div>
      <ul>
        {data.map(({ index, title, status }) => (
          <div key={index}>
            {title}: {status} <input />
          </div>
        ))}
      </ul>
      <button>Submit</button>
    </div>
  );
  
};

export default Ranker;
