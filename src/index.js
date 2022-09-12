import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
      <Price />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL900_SR200,200_.jpg'
    alt=''
  />
);
const Title = () => <h3>The Wonderful Things You Will Be</h3>;
const Author = () => <h5>Emily Winfield Martin</h5>;
const Price = () => <h6>$ 5.00</h6>;

ReactDom.render(<BookList />, document.getElementById('root'));
