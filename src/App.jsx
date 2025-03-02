import Ranker from './components/Ranker'
import data from '../src/data/movies.json'
import './App.css'

function App() {
  return (
    <>
      <Ranker movies={data} />
    </>
  )
}

export default App