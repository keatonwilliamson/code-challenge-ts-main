export enum PointsPolicyId {
    F001 = "F001",
    F002 = "F002",
}

interface PointsPolicyDetails {
    description: string;
    flatPoints: number;
    daysThreshold: number;
    pointsAfterThreshold: number;
}

export type PointsPolicyCollection = {
    [PointsPolicyID in PointsPolicyId]: PointsPolicyDetails;
};
