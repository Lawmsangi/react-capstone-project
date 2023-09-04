import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import { fetchBooks } from './redux/features/booksSlice';
import Header from './components/Header';
import BooksDetails from './components/BooksDetails';

function App() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Books searchQuery={searchQuery} />} />
        <Route path="/details/:id" element={<BooksDetails />} />
      </Routes>
    </div>
  );
}

export default App;
