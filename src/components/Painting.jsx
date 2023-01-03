// import defaultImage from `./default.jpg`;

import PropTypes from 'prop-types';

export default function Painting({
  url,
  title,
  price,
  author = `не известно`,
  id,
}) {
  return (
    <div>
      {id}
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      {/* <p>
        Автор: <a href="">{author}</a>
      </p> */}
      <p>Цена: {price}</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
};
