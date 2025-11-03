import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SearchBar from './components/SearchBar';
import './App.css';

// Lazy load the RecipeDetail component
const RecipeDetail = lazy(() => import('./components/RecipeDetail'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <SearchBar />
          </header>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/recipe/:id" element={<RecipeDetail />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
