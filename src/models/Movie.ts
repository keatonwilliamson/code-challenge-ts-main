export enum MovieId {
  F001 = "F001",
  F002 = "F002",
}

interface MovieDetails {
  title: string;
  movieCodeID: string;
}

export type MovieCollection = {
  [MovieID in MovieId]: MovieDetails;
};
