import React from 'react';

const books = (props) => {
  const { img, title, author } = props;
  const clickHandler = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(author);
  };

  const moreComplex = (title) => {
    console.log(title);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      {/* Below onClick is inline function */}
      <h2 onClick={() => alert(title)}>{title}</h2>
      <h4>{author}</h4>
      {/* Below onClick is reference Type */}
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      {/* Below is inline call for a handler when you want to 
      pass an argument as well*/}
      <button type='button' onClick={() => moreComplex(title)}>
        Complex Example
      </button>
    </article>
  );
};

export default books;
