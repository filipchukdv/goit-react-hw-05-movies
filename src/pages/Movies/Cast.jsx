import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
const { fetchCredits } = require('api');

const Cast = props => {
  const { movieId } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchCredits(movieId);
      setResults(response);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      {results && (
        <ul>
          {results.cast.map(result => (
            <li key={result.id}>
              <img
                className={css.image}
                loading="lazy"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.profile_path}`}
                srcSet={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.profile_path} 1x, /t/p/w1280${results.poster_path} 2x`}
                alt={`${results.name}`}
              />
              <div>{`Name: ${result.name}`}</div>
              <div>{`Character: ${result.character}`}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
