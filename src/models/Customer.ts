import { MovieId } from "./Movie";

export interface Rental {
  movieId: MovieId;
  days: number;
}

export interface Customer {
  name: string;
  rentals: Rental[];
}
