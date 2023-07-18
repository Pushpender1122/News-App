// import logo from './logo.svg';
// import './App.css';

import Navbar from "./component/navbar";
import News from "./component/news";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let api_key = process.env.REACT_APP_API_KEY
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="all" api_key={api_key} country="in" category="" page={10} />} />
          <Route path="/business" element={<News key="business" api_key={api_key} country="in" category="business" page={10} />} />
          <Route path="/entertainment" element={<News key="entertainment" api_key={api_key} country="in" category="entertainment" page={10} />} />
          <Route path="/general" element={<News key="general" api_key={api_key} country="in" category="general" page={10} />} />
          <Route path="/health" element={<News key="health" api_key={api_key} country="in" category="health" page={10} />} />
          <Route path="/science" element={<News key="science" api_key={api_key} country="in" category="science" page={10} />} />
          <Route path="/sports" element={<News key="sports" api_key={api_key} country="in" category="sports" page={10} />} />
          <Route path="/technology" element={<News key="technology" api_key={api_key} country="in" category="technology" page={10} />} />

        </Routes>

      </Router>

    </div>

  );
}

export default App;
