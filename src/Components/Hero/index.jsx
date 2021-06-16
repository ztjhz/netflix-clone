import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import requests, { instance } from '../../requests';
import './index.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const Hero = () => {
  const [heroMovie, setHeroMovie] = useState();

  const limitCharacters = (string, count) => {
    if (string.length <= count) {
      return string;
    }
    return `${string.substring(0, count)}...`;
  };
  useEffect(() => {
    const getHeroMovie = async () => {
      const randInt = Math.floor(Math.random() * 15);
      const response = await instance.get(requests.trending);
      const movie = response.data.results[randInt];
      setHeroMovie(movie);
    };
    getHeroMovie();
  }, []);

  return (
    <>
      <header
        className="hero_container"
        style={{
          backgroundImage: `url(${baseUrl}${heroMovie?.backdrop_path})`,
        }}
      >
        <div className="hero_contents">
          <div className="hero_title">
            {heroMovie?.title || heroMovie?.name}
          </div>
          <div className="button_container">
            <button type="button" className="hero_button play">
              <FaPlay style={{ fill: 'black', marginRight: '10px' }} />
              Play
            </button>
            <button type="button" className="hero_button info">
              <BiInfoCircle
                style={{
                  fill: 'white',
                  marginRight: '10px',
                }}
              />
              More Info
            </button>
          </div>
          <div className="hero_description">
            {heroMovie?.overview && limitCharacters(heroMovie?.overview, 150)}
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
