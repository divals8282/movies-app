import { Container } from "./styles";

export const SideBar = () => {
  return (
    <Container>
      <div>
        <div className="account">
          <div className="avatar" />
          <p>Daniel</p>
        </div>
        <ul className="navigation">
          <li>
            <div className="icon">
              <img src="/assets/icons/search.png" alt="" />
            </div>
            <p>Search</p>
          </li>
          <li className="active">
            <div className="icon active">
              <img src="/assets/icons/home.png" alt="" />
            </div>
            <p>Home</p>
          </li>
          <li>
            <div className="icon">
              <img src="/assets/icons/tv_shows.png" alt="" />
            </div>
            <p>TV Shows</p>
          </li>
          <li>
            <div className="icon">
              <img src="/assets/icons/movies.png" alt="" />
            </div>
            <p>Movies</p>
          </li>
          <li>
            <div className="icon">
              <img src="/assets/icons/genres.png" alt="" />
            </div>
            <p>Genres</p>
          </li>
          <li>
            <div className="icon">
              <img src="/assets/icons/watch_later.png" alt="" />
            </div>
            <p>Watch Later</p>
          </li>
        </ul>
      </div>
      <ul className="actions">
        <li>LANGUAGE</li>
        <li>GET HELP</li>
        <li>EXIT</li>
      </ul>
    </Container>
  );
};
