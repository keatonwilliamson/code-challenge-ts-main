import { CostPolicyId } from "./CostPolicy";
import { PointsPolicyId } from "./PointsPolicy";

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
  costPolicyId: CostPolicyId;
  pointsPolicyId: PointsPolicyId;
}

export type CategoryCollection = {
  [id in CategoryId]: CategoryDetails;
};

