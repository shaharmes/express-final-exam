/**
 * BMI Calculator
 */

export enum BmiStatus {
    Underweight,
    HealthyWeight,
    Overweight,
    Obesity
}

export enum WeightUnits {
    KG,     // kilograms
    G,      // grams
    Pound,  // lbs
}

export enum HeightUnits {
    CM,     // centimeter
    M,      // meter
    In,     // inch
    Ft,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: WeightUnits;
    height: number;
    heightUnit: HeightUnits;
}

export interface BmiOutput {
    bmi: number;
    status: BmiStatus;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    return {status: 0, bmi: 0};
}
