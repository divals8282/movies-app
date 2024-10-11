import { MovieI } from "../../types";

interface PropsInterface {
  movie: MovieI
}

export type ComponentT = (props: PropsInterface) => JSX.Element;