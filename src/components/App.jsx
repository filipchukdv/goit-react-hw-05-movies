import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Trending from 'pages/Trending/Trending';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from 'pages/Movies/Cast';
// import Reviews from 'pages/Movies/Reviews';
import { lazy } from 'react';

const Trending = lazy(() => import('pages/Trending/Trending'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Movies/Cast'));
const Reviews = lazy(() => import('pages/Movies/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
