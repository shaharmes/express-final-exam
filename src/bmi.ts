/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */


export default function bmi(input: BmiInput): BmiOutput {
    let weight = input.weight;
    let height = input.height;

    if (input.weightUnit === WeightUnits.G) {
        weight = weight / 1000;
    } else if (input.weightUnit === WeightUnits.Pound) {
        weight = weight / 2.2046;
    }

    if (input.heightUnit === HeightUnits.M) {
        height = height * 100;
    } else if (input.heightUnit === HeightUnits.In) {
        height = height * 2.54;
    } else if (input.heightUnit === HeightUnits.Ft) {
        height = height * 30.48;
    }

    height = Math.round(height) / 100;
    weight = Math.round(weight);

    const bmi = Math.round(weight / (height * height));
    if (bmi < 18.5) {
        return {status: 0, bmi: bmi};
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return {status: 1, bmi: bmi};
    } else if (bmi >= 25 && bmi <= 29.9) {
        return {status: 2, bmi: bmi};
    } else if (bmi >= 30) {
        return {status: 3, bmi: bmi};
    }
       
    return {status: 0, bmi: 0};
}
