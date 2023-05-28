import { useEffect, useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import css from './Gallery.module.css';

const Gallery = ({ fetchFunc, value }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchFunc(value || '');
      console.log('fetch');
      setResults(response.results);
    }
    fetchData();
  }, [fetchFunc, value]);
  return (
    <section>
      <ul className={css.list}>
        {results.map(({ id, title, poster_path, release_date }) => (
          <GalleryItem
            key={id}
            title={title}
            src={poster_path}
            id={id}
            date={release_date}
          />
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
