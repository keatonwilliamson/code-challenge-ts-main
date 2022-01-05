export interface Rental {
  movieId: string;
  days: number;
}

export interface Customer {
  name: string;
  rentals: Rental[];
}
