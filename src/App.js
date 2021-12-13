import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from 'history';

import SearchApp from './components/SearchApp';
import Selected from './components/Selected';
import Tv from './pages/Tv';
import Movie from './pages/Movie';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="App-header">
        <img src="https://icon-library.com/images/movie-app-icon/movie-app-icon-27.jpg" className="App-logo" alt="logo" />
        
      </header>
      <Router  history={history}>
      <Navbar />
      <div className='content-holder'>
      <Routes >
            <Route exact path="/details/movie/:id" element={<div className='selected-holder'><Selected/></div>} />
            <Route exact path="/details/tv/:id" element={<div className='selected-holder'><Selected/></div>} />
      <Route exact path="/" element={<Navigate to ="/tv/popular" />}/>
        <Route path="/tv/popular" exact element={<div className='content-holder'><SearchApp/><Tv/></div>} />
        <Route exact path="/movie/popular" element={<div className='content-holder'><SearchApp/><Movie/></div>} />
      </Routes >
      </div>
    </Router>

    </div>
    
  );
}

export default App;


