export enum PointsPolicyId {
    F001 = "F001",
    F002 = "F002",
}

export interface PointsPolicyDetails {
    description: string;
    flatPoints: number;
    daysThreshold: number;
    pointsAfterThreshold: number;
}

export type PointsPolicyCollection = {
    [id in PointsPolicyId]: PointsPolicyDetails;
};
