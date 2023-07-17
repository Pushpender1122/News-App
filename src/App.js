// import logo from './logo.svg';
// import './App.css';

import Navbar from "./component/navbar";
import News from "./component/news";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="all" country="in" category="" page={10} />} />
          <Route path="/business" element={<News key="business" country="in" category="business" page={10} />} />
          <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" page={10} />} />
          <Route path="/general" element={<News key="general" country="in" category="general" page={10} />} />
          <Route path="/health" element={<News key="health" country="in" category="health" page={10} />} />
          <Route path="/science" element={<News key="science" country="in" category="science" page={10} />} />
          <Route path="/sports" element={<News key="sports" country="in" category="sports" page={10} />} />
          <Route path="/technology" element={<News key="technology" country="in" category="technology" page={10} />} />

        </Routes>

      </Router>

    </div>

  );
}

export default App;
