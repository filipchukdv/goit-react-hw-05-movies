import { fetchTrending } from 'api';
import Gallery from 'components/Gallery/Gallery';

const Trending = () => (
  <>
    <h1>Trending today</h1>
    <Gallery fetchFunc={fetchTrending} />
  </>
);

export default Trending;
