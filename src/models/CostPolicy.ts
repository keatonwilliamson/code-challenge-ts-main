export enum CostPolicyId {
    F001 = "F001",
    F002 = "F002",
    F003 = "F003",
}

export interface CostPolicyDetails {
    description: string;
    flatFee: number;
    daysThreshold: number;
    dailyCostAfterThreshold: number;
}

export type CostPolicyCollection = {
    [CostPolicyID in CostPolicyId]: CostPolicyDetails;
};
