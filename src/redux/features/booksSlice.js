import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
  searchQuery: '',
};

export const fetchBooks = createAsyncThunk(
  'features/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://gutendex.com/books/');
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('error fetching');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload.results;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default booksSlice.reducer;
export const { setQuery } = booksSlice.actions;
