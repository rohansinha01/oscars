 import { useEffect, useState } from 'react';
import data from '../data/movies.json'

const Ranker = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
                setItems(data)
            }, []);
 
  return (
    <div>
    {items.map((item, index) => (
                        <div key={index}>
                            <h3>{item.title}: {item.status}</h3>
                        </div>
                    ))}
                </div>
            );
        };

export default Ranker