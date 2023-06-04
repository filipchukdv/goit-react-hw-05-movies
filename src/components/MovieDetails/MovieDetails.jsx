import { fetchMovie } from 'api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import moment from 'moment';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMovie(movieId);
      setResults(response);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      <Link to={location.state ?? '/'} className={css.back}>
        Go back{' '}
      </Link>

      {results && (
        <article>
          <section className={css.movieCard}>
            <img
              className={css.image}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
              alt={`${results.title} poster`}
            />
            <div>
              <h1>{`${results.title} (${moment(results.release_date).format(
                'YYYY'
              )})`}</h1>
              <span>{`User score : ${results.vote_average}`}</span>
              <h2>Overview</h2>
              <p>{results.overview}</p>
              <h3>Genres</h3>
              <span>{results.genres.map(genre => `${genre.name} `)}</span>
            </div>
          </section>
          <section className={css.section}>
            <h3>Additional information</h3>
            <Link to="cast" state={location.state} className={css.link}>
              Cast
            </Link>
            <Link to="reviews" state={location.state} className={css.link}>
              Reviews
            </Link>
          </section>
          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </section>
        </article>
      )}
    </>
  );
};

export default MovieDetails;
