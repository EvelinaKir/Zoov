export type TDetailedFoodInfo = {
    for: string;
    type: string;
    description: string;
    weight: string;
    image: string;
    additionalList?: Array<any> | null
    counter?: null | number
    price?: number;
    consistence?: string;
}