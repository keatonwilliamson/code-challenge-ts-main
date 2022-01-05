import { CostPolicyDetails } from "./models/CostPolicy";
import { PointsPolicyDetails } from "./models/PointsPolicy";

export const getCost = (policy: CostPolicyDetails, days: number): number => {
    const { flatFee, daysThreshold, dailyCostAfterThreshold } = policy
    const dailyFee = (days > daysThreshold) ? (days - daysThreshold) * dailyCostAfterThreshold : 0;
    return flatFee + dailyFee;
}

export const getPoints = (policy: PointsPolicyDetails, days: number): number => {
    const { flatPoints, daysThreshold, pointsAfterThreshold } = policy
    const additionalPoints = (days > daysThreshold) ? pointsAfterThreshold : 0;
    return flatPoints + additionalPoints;
}

export const sum = (arr: number[]): number => arr.reduce((prev, curr) => prev + curr);