import data from "../data/movies.json";

const Ranker = () => {
  return (
    <ul>
      {data.map(({ index, title, status }) => (
        <div key={index}>
          {title}: {status}
        </div>
      ))}
    </ul>
  );
};

export default Ranker;
