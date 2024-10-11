import { Container } from "./styles"
import { ComponentT } from "./types"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const TrendingNow: ComponentT = ({
  movies,
  onSelection
}) => {

  return (
    <Container>
      <p className="title">Trending Now</p>
      <Carousel arrows={false} showDots={false} infinite responsive={responsive}>
        {movies.map(movie => (
          <img className="movie" src={`assets/${movie.CoverImage}`} alt="" onClick={() => onSelection(movie)} />
        ))}
      </Carousel>
    </Container>
  )
}