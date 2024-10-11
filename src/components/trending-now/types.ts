import { MovieI } from "../../types";

interface PropsI {
  onSelection: (movie: MovieI) => void, 
  movies: MovieI[]
}

export type ComponentT = (props: PropsI) => JSX.Element