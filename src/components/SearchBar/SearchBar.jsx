import css from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const Searchbar = ({ setQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = useRef();
  const queryValue = searchParams.get('query') ?? '';

  useEffect(() => {
    input.current.value = queryValue;
    setQuery(queryValue);
  }, [queryValue, setQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const queryNolmalized = query === '' ? {} : { query };
    setSearchParams(queryNolmalized);
    setQuery(queryValue);
  };
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}></button>

      <input
        className={css.SearchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        ref={input}
      />
    </form>
  );
};

export default Searchbar;
