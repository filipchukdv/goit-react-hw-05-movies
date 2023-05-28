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
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${src}`}
          srcSet={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${src} 1x, /t/p/w1280${src} 2x`}
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
