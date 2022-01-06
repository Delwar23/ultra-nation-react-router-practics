import './App.css';
import Home from './component/Home/Home';
import ShowDetails from './component/ShowDetails/ShowDetails';

import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ShowDetails/:properties" element={<ShowDetails />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
