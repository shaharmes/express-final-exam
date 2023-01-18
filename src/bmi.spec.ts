import bmi, { BmiInput, HeightUnits, WeightUnits } from './bmi';
import { expect } from 'chai';

describe('bmi', () => {
    it('should calculate BMI for metrics input', () => {
        const input: BmiInput = {
            weight: 80,
            weightUnit: WeightUnits.KG,
            height: 180,
            heightUnit: HeightUnits.CM
        };
        expect(bmi(input)).to.deep.equals({bmi: 25, status: 2});
    });

    it('should calculate BMI for imperial input', () => {
        const input: BmiInput = {
            weight: 176.37,
            weightUnit: WeightUnits.Pound,
            height: 5.9,
            heightUnit: HeightUnits.Ft
        };
        expect(bmi(input)).to.deep.equals({bmi: 25, status: 2});
    });

    it('should calculate BMI for mixed units', () => {
        const input: BmiInput = {
            weight: 80000,
            weightUnit: WeightUnits.G,
            height: 5.9,
            heightUnit: HeightUnits.Ft
        };
        expect(bmi(input)).to.deep.equals({bmi: 25, status: 2});
    });
})
