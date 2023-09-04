import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import { fetchBooks } from './redux/features/booksSlice';
import Header from './components/Header';
import BooksDetails from './components/BooksDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/details/:id" element={<BooksDetails />} />
      </Routes>
    </div>
  );
}

export default App;
