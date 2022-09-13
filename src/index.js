import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL900_SR200,200_.jpg',
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin',
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51HZN1uIVqL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Great Stories for Children',
    author: 'Ruskin Bond',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71F8bbjOSNL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Dot To Dot: First Fun Activity Books for Kids',
    author: 'Wonder House Books',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
