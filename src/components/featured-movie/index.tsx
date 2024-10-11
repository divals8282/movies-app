import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { ComponentT } from "./types";
import moment from "moment";

export const FeaturedMovie: ComponentT = ({ movie }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playTrailer, setPlayTrailer] = useState<boolean>(false);

  const durationMoment = moment.duration(Number(movie.Duration), "seconds");
  const movieDuration = `${durationMoment.hours()}h ${durationMoment.minutes()}m`;

  const handleTrailerPlayButton = () => {
    setPlayTrailer(!playTrailer);

    if(!playTrailer) {
      videoRef.current?.play();      
    } else {
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    setPlayTrailer(false);
    videoRef.current?.pause();
  }, [movie]);

  return (
    <Container
      style={{
        backgroundImage: `url(assets/${movie.CoverImage})`,
      }}
    >
      <div className="video-info">
        <p className="category">{movie.Category}</p>
        <img className="title-img" src={`assets/${movie.TitleImage}`} alt="" />
        <div className="info">
          <div>{movie.ReleaseYear}</div>
          <div>{movie.MpaRating}</div>
          <div>{movieDuration}</div>
        </div>
        <div className="description">{movie.Description}</div>
        <div className="actions">
          <button className="play" onClick={() => handleTrailerPlayButton()}>
            {playTrailer ? "Stop" : "Play"}
          </button>
          <button className="more-info">More Info</button>
        </div>
      </div>
      <div className="video">
        <video ref={videoRef} style={{
          opacity: playTrailer ? '1' : '0'
        }} muted loop height="240">
          <source src={movie.VideoUrl} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
};
