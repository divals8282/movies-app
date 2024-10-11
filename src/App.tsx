import { useLayoutEffect, useState } from "react";
import { SideBar } from "./layout/sidebar";
import { Container } from "./styles";
import data from "./data.json";
import { MovieI } from "./types";
import { FeaturedMovie } from "./components/featured-movie";
import { TrendingNow } from "./components/trending-now";

function App() {
  const [movies, setMovies] = useState<{
    Featured: MovieI;
    TrendingNow: MovieI[];
  }>(data); 

  useLayoutEffect(() => {
    const movieFromStorage = localStorage.getItem('featured-movie');
    if(movieFromStorage) {
      setMovies({
        ...movies,
        Featured: JSON.parse(movieFromStorage)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="App">
      <SideBar />
      <FeaturedMovie movie={movies.Featured} />
      <TrendingNow
        movies={movies.TrendingNow}
        onSelection={(movie) => {
          localStorage.setItem('featured-movie', JSON.stringify(movie))
          setMovies({ ...movies, Featured: movie })
        }}
      />
    </Container>
  );
}

export default App;
