import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Books.css';
import { useNavigate } from 'react-router-dom';

function Books() {
  const { books, searchQuery } = useSelector((store) => store.books);
  const navigate = useNavigate();

  const filteredBooks = books.filter(
    (book) => book.title.toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const handleButtonClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="books">
      {filteredBooks.map((book, id) => (
        <button
          type="button"
          data-testid="clickBook"
          key={book.id}
          onClick={() => handleButtonClick(book.id)}
          className={`book.id ${id % 2 === 0 ? 'even-item' : 'odd-item'}`}
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.999,1.993c-5.514,0.001-10,4.487-10,10.001s4.486,10,10.001,10c5.513,0,9.999-4.486,10-10 C22,6.48,17.514,1.994,11.999,1.993z M12,19.994c-4.412,0-8.001-3.589-8.001-8s3.589-8,8-8.001C16.411,3.994,20,7.583,20,11.994 C19.999,16.405,16.41,19.994,12,19.994z" />
            <path d="M12 10.994L8 10.994 8 12.994 12 12.994 12 16 16.005 11.995 12 7.991z" />
          </svg>
          <h2>
            {book.title}
          </h2>
        </button>
      ))}
    </div>
  );
}

export default Books;
