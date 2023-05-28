import { fetchQuery } from 'api';
import { useEffect } from 'react';
import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';

const { default: Searchbar } = require('components/SearchBar/SearchBar');

const Movies = () => {
  const [query, setQuery] = useState();

  return (
    <>
      <Searchbar setQuery={setQuery} />
      {query && <Gallery fetchFunc={fetchQuery} value={query} />}
    </>
  );
};

export default Movies;
