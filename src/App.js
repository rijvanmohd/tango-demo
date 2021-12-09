// import logo from './logo.svg';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import StreamPage from "./pages/StreamPage";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {StreamProvider} from './context/streamContext'
import { useState } from 'react';

function App() {
  const [url,setUrl] = useState(null)
  console.log(url)
  return (
    <div className="App">
      {/* <HomePage/> */}
      <StreamProvider value={{url,setUrl}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/stream" element={<StreamPage />}/>
        </Routes>
      </Router>
      </StreamProvider>
    </div>
  );
}

export default App;
