export class Fund {
    name: string;
    isin: string;
    sectors: {sector: string, percentage: number}[];
    regions: {sector: string, percentage: number}[];
}
