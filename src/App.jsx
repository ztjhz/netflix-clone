import React from 'react';
import './App.css';
import requests from './requests';
import MovieRow from './Components/Row';
import Hero from './Components/Hero';
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <MovieRow fetchUrl={requests.trending} title="Trending" />
      <MovieRow
        fetchUrl={requests.netflixOriginals}
        title="Netflix Originals"
        backdrop
      />
      <MovieRow fetchUrl={requests.topRated} title="Top Rated" backdrop />
      <MovieRow
        fetchUrl={requests.actionMovies}
        title="Action Movies"
        backdrop
      />
      <MovieRow
        fetchUrl={requests.comedyMovies}
        title="Comedy Movies"
        backdrop
      />
      <MovieRow
        fetchUrl={requests.horrorMovies}
        title="Horror Movies"
        backdrop
      />
      <MovieRow
        fetchUrl={requests.romanceMovies}
        title="Romance Movies"
        backdrop
      />
      <MovieRow
        fetchUrl={requests.documentaries}
        title="Documentaries"
        backdrop
      />
    </>
  );
}

export default App;