import { CategoryId } from "./Category";

export enum MovieId {
  F001 = "F001",
  F002 = "F002",
  F003 = "F003",
}

interface MovieDetails {
  title: string;
  categoryId: CategoryId;
}

export type MovieCollection = {
  [id in MovieId]: MovieDetails;
};
