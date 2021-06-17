import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { instance } from '../../requests';
import './index.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const MovieRow = ({ fetchUrl, title, backdrop }) => {
  const [movieList, setMovieList] = useState();
  const [trailer, setTrailer] = useState();

  const openTrailer = (title) => {
    movieTrailer(title, { id: true })
      .then((response) => {
        if (trailer === response) {
          setTrailer('');
        } else {
          setTrailer(response);
        }
      })
      .catch((e) => console.log(e));
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
        <div className="posters_wrapper">
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
                  alt={movie?.title || movie?.name}
                  onClick={() => {
                    openTrailer(movie?.title || movie?.name);
                  }}
                />
              </div>
            ))}
        </div>
        {trailer && (
          <YouTube
            videoId={trailer}
            opts={{
              height: '400',
              width: '640',
              playerVars: {
                autoplay: 1,
              },
            }}
            className="trailer_player"
          />
        )}
      </div>
    </>
  );
};
export default MovieRow;
