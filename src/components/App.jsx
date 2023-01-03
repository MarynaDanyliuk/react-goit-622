// import Painting from './Painting';

import PaintingList from './PaintingList';

// import paintings from './paintings.json';

import paintings from '../paintings.json';

export const App = () => {
  return (
    <div
      className="App"
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      {/* {paintings.map(painting => (
        <Painting
          key={painting.id}
          url={painting.url}
          title={painting.title}
          author={painting.author.tag}
          price={painting.price}
        />
      ))} */}
      <PaintingList items={paintings} />
      React homework template
    </div>
  );
};

/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        price={paintings[0].price}
      /> */

/* <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        price={paintings[1].price}
      />
      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.tag}
        price={paintings[2].price}
      /> */
