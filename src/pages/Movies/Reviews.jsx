import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = props => {
  const { movieId } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchReviews(movieId);

      const normalizedResponse =
        response.results.length === 0
          ? [{ id: 1, author: '', content: 'No reviews' }]
          : response.results;
      setResults(normalizedResponse);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {results ? (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <div>{result.content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No reviews</div>
      )}
    </>
  );
};

export default Reviews;
