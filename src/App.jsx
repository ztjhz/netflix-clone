import React from 'react';
import './App.css';
import requests from './requests';
import MovieRow from './Components/Row';
import Hero from './Components/Hero';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

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
      <MovieRow fetchUrl={requests.topRated} title="Top Rated" backdrop lazy />
      <MovieRow
        fetchUrl={requests.actionMovies}
        title="Action Movies"
        backdrop
        lazy
      />
      <MovieRow
        fetchUrl={requests.comedyMovies}
        title="Comedy Movies"
        backdrop
        lazy
      />
      <MovieRow
        fetchUrl={requests.horrorMovies}
        title="Horror Movies"
        backdrop
        lazy
      />
      <MovieRow
        fetchUrl={requests.romanceMovies}
        title="Romance Movies"
        backdrop
        lazy
      />
      <MovieRow
        fetchUrl={requests.documentaries}
        title="Documentaries"
        backdrop
        lazy
      />
      <Footer />
    </>
  );
}

export default App;
