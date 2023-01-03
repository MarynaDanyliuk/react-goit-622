// import PropTypes from 'prop-types';
import Painting from './Painting';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            // key={item.id}
            url={item.url}
            title={item.title}
            author={item.author.tag}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line react/no-typos
// PaintingList.propTypes = {
// //   url: PropTypes.string,
// //   title: PropTypes.string,
// //   author: PropTypes.string,
// //   price: PropTypes.number,
// };

export default PaintingList;
