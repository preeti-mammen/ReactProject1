import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './bookdata';
import Book from './books';

// New code for React 18. Replaced ReactDom.render function
const container = document.getElementById('root');
const root = createRoot(container);

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

root.render(<BookList />);
