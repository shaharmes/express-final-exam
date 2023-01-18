import app from './app';
import request from 'supertest';

const ValidRequestPayload = {
    height: '180',
    heightUnit: '0',
    weight: '80',
    weightUnit: '0'
};

const FormPayload = new URLSearchParams(ValidRequestPayload).toString();

describe('E2E (endpoints testing)', () => {

    describe('POST', () => {
        it('should response to FORM data', () => {
            console.log(FormPayload);
            return request(app)
                .post('/bmi')
                .send(FormPayload)
                // .set('source', 'x-calc-bmi-55')
                .expect(500);
        });

        it.skip('should response to JSON data', () => {
            return request(app)
                .post('/bmi')
                .set('content-type', 'application/json')
                .set('source', 'x-calc-bmi-12')
                .send(ValidRequestPayload)
                .expect(200);
        });
    });
});
