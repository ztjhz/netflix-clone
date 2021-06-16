import React, { useEffect, useState } from 'react';
// import { IoIosArrowForward } from 'react-icons/io';
import { instance } from '../../requests';
import './index.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const MovieRow = ({ fetchUrl, title, backdrop }) => {
  const [movieList, setMovieList] = useState();

  // const showArrow = (e) => {
  //   const arrowWrapper = e.target.querySelector('.scroll_arrow_wrapper');
  //   // arrowWrapper.style.backgroundColor = '#141414';
  //   if (arrowWrapper) {
  //     arrowWrapper.style.backgroundColor = 'white';
  //     arrowWrapper.style.cursor = 'pointer';
  //     arrowWrapper.style.opacity = '0.5';
  //   }
  // };

  // const hideArrow = (e) => {
  //   const arrowWrapper = e.target.querySelector('.scroll_arrow_wrapper');
  //   if (arrowWrapper) {
  //     arrowWrapper.style.backgroundColor = 'none';
  //     arrowWrapper.style.cursor = 'default';
  //     arrowWrapper.style.opacity = '0';
  //   }
  // };

  // const showMore = (e) => {
  //   e.target.style.transform = 'translateX(10rem)';
  //   e.target.parentElement.style.transform = 'translateX(-10rem)';
  // };

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
        <div
          className="posters_wrapper"
          // onMouseEnter={showArrow}
          // onMouseLeave={hideArrow}
          // onClick={showMore}
        >
          {movieList &&
            movieList.map((movie) => (
              <div className="poster_container" key={movie?.id}>
                <img
                  key={movie?.id}
                  className={`movie_poster ${backdrop && 'movie_backdrop'}`}
                  src={`${baseUrl}${
                    backdrop
                      ? movie?.backdrop_path || movie?.poster_path
                      : movie?.poster_path
                  }`}
                  alt={movie?.title}
                />
              </div>
            ))}
          {/* <div className="scroll_arrow_wrapper">
            <IoIosArrowForward className="scroll_arrow" />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default MovieRow;
