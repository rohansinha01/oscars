import data from "../data/movies.json";
import Button from "./Button";
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
      <Button />
    </div>
  );
  
};

export default Ranker;
