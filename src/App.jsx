import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';
import Week3 from './pages/Week3';
import Week4 from './pages/Week4';
import Week5 from './pages/Week5';
import Week6 from './pages/Week6';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Dashboard</Link>
        {' | '}

        <Link to="/week-1">Week 1</Link>
        {' | '}

        <Link to="/week-2">Week 2</Link>
        {' | '}

        <Link to="/week-3">Week 3</Link>
        {' | '}

        <Link to="/week-4">Week 4</Link>
        {' | '}

        <Link to="/week-5">Week 5</Link>
        {' | '}

        <Link to="/week-6">Week 6</Link>
        {' | '}
      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/week-1"
          element={<Week1 />}
        />

        <Route
          path="/week-2"
          element={<Week2 />}
        />

        <Route
          path="/week-3"
          element={<Week3 />}
        />

        <Route
          path="/week-4"
          element={<Week4 />}
        />

        <Route
          path="/week-5/*"
          element={<Week5 />}
        />

        <Route
          path="/week-6"
          element={<Week6 />}
        />

        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;