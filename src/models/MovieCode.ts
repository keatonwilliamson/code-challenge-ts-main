export enum CategoryId {
  F001 = "F001",
  F002 = "F002",
  F003 = "F003",
}

export enum CategoryName {
  CHILDRENS = "childrens",
  REGULAR = "regular",
  NEW = "new",
}

interface CategoryDetails {
  name: CategoryName
  costId: string;
  pointsId: string;
}

export type CategoryCollection = {
  [CategoryID in CategoryId]: CategoryDetails;
};

