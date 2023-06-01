import css from './GalleryItem.module.css';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

const GalleryItem = ({ title, src, id, date }) => {
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} state={location}>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${src}`}
          alt={`${title} poster`}
          className={css.image}
        ></img>
        <p className={css.title}>{`${title} (${moment(date).format(
          'YYYY'
        )})`}</p>
      </Link>
    </li>
  );
};

export default GalleryItem;
