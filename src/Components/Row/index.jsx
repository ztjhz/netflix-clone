/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { instance } from '../../requests';
import './index.css';
import Modal from '../Modal/Modal';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const MovieRow = ({ fetchUrl, title, backdrop, lazy }) => {
  const [movieList, setMovieList] = useState('');
  const [trailer, setTrailer] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  const openTrailer = (trailerTitle) => {
    movieTrailer(trailerTitle, { id: true })
      .then((response) => {
        if (trailer === response) {
          setTrailer('');
        } else if (response === null) {
          setTrailer('null');
        } else {
          setTrailer(response);
        }
      })
      .catch((e) => console.log(e));
  };

  const scrollRight = (e) => {
    e.currentTarget.parentNode.querySelector(
      '.posters_wrapper'
    ).scrollLeft += 500;
  };

  const scrollLeft = (e) => {
    e.currentTarget.parentNode.querySelector(
      '.posters_wrapper'
    ).scrollLeft -= 500;
  };

  useEffect(() => {
    const getMovies = async (url) => {
      const response = await instance.get(url);
      const data = response.data.results;
      setMovieList(data);
    };
    getMovies(fetchUrl);
  }, [fetchUrl]);

  return (
    <>
      <div className="row_wrapper">
        <h2 className="row_title">{title}</h2>
        <div className="posters_container">
          <div className="posters_wrapper">
            {movieList &&
              movieList.map((movie, index) => (
                <div className="poster_container" key={movie?.id}>
                  <img
                    key={movie?.id}
                    className={`movie_poster ${backdrop && 'movie_backdrop'}`}
                    src={`${baseUrl}${
                      backdrop
                        ? movie?.backdrop_path || movie?.poster_path
                        : movie?.poster_path
                    }`}
                    alt={movie?.title || movie?.name}
                    onClick={() => {
                      setMovieTitle(movie?.title || movie?.name);
                      openTrailer(movie?.title || movie?.name);
                    }}
                    lazy={index > 7 || lazy ? 'lazy' : ''}
                  />
                </div>
              ))}
          </div>
          <div className="row_right_wrapper" onClick={scrollRight}>
            <BsChevronRight className="row_right" />
          </div>

          <div className="row_left_wrapper" onClick={scrollLeft}>
            <BsChevronLeft className="row_left" />
          </div>
        </div>
      </div>
      {trailer === '' ? null : (
        <Modal
          trailer={trailer}
          movieTitle={movieTitle}
          setTrailer={setTrailer}
        />
      )}
    </>
  );
};
export default MovieRow;
