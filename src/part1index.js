//This file contains the basics of React app

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL900_SR200,200_.jpg',
  title: 'The Wonderful Things You Will Be',
  author: 'Emily Winfield Martin',
  price: '$ 5.00',
};

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51HZN1uIVqL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Great Stories for Children',
  author: 'Ruskin Bond',
  price: '$ 6.00',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        price={firstBook.price}
      >
        {/* This is a children prop. Content is placed between opening 
        and closing tags.
        */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
          sunt animi alias nobis, esse, est corrupti fugiat, ullam debitis fuga.
          Provident, deleniti! Eligendi enim, veniam sapiente velit molestias
          consequuntur.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        price={secondBook.price}
      />
    </section>
  );
}

const Book = (props) => {
  // the children prop is destructured with the name "children"
  const { children } = props;
  const { img, title, author, price } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h6>{price}</h6>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
