# Express-Exam

* [Exam](#exam)
    * [Instructions](#instructions)
    * [Task](#task)
    * [Inputs](#inputs)
        * [Query String](#query-string)
        * [JSON & Forms](#json--forms)
    * [Validation](#validation)
    * [Tests](#tests)
* [BMI Calculations](#bmi-calculations)
    * [BMI Formula](#bmi-formula)
    * [BMI States](#bmi-states)
    * [Units](#units)

---

## Exam

### Instructions

* Read the following document carefully
* Your code should not contain unused or commented code
* Your implementation should come only when you see "TODO" statement
* Do not create new files
* Do not install new packages
* PLACE_HOLDER how to submit the results
* PLACE_HOLDER how many times you have

---

### Task

Your task is to implement a BMI calculator server.

You have to write an endpoint that accept weight and height with their units and response with the BMI value and its
state. The endpoint should support query string, forms submission and JSON requests.

For example:

Input of `80Kg weight` and `180cm height` should output `bmi: 25, state: 2`

[More details about the BMI calculations](#bmi-calculations)

    Note: The BMI results are rounded!

---

### Implementation

Your code should split between the following files:

* [app.ts](./src/app.ts) endpoint/s
* [bmi.ts](./src/bmi.ts) BMI calculator
* [validator.ts](./src/validator.ts) middleware

---

### Inputs

The calculator input contain 4 arguments:

* `wight` a number, can be float or integer
* `height` a number, can be float or integer
* `weightUnit` integer number 0 - 2
* `heightUnit` integer number 0 - 3

Interfaces and Enums for those types are [implemented here](./src/bmi.ts).

---

#### Query String

The endpoint should support parameters from the query string.

An example for data from query string:

    http://localhost:3001/bmi?height=1.1&weight=45&weightUnit=...

---

#### JSON & Forms

The endpoint should support responding form submissions or `application/json` request with the data are in the message
body.

An example for data from form submission:

```
POST /bmi HTTP/1.1
host: localhost:3001
content-type: application/x-www-form-urlencoded
...

height=1.1&weight=45&weightUnit=...
```

An example for data from JSON request:

```
POST /bmi HTTP/1.1
host: localhost:3001
content-type: application/json
...

{"height":"1.1","weight":"45","weightUnit":...
```

---

### Validation

The endpoint should be guard by a middleware that check the input and make sure its valid.

For invalid input, you have to notify the client with a proper error code and a relevant message.

---

### Tests

The project contain several tests to help you reach the target. You are not require to write any test.

    NOTE: the tests are not cover all the requirements!

---

## BMI Calculations

### BMI Formula

$W = weight (Kg)$

$H = height (m)\newline$

$BMI = \frac{W}{H^2}$

### BMI States

| BMI            | Weight Status  | Formal                  |
|----------------|----------------|-------------------------|
| Below 18.5     | Underweight    | `bmi < 18.5`            |
| 18.5 – 24.9	   | Healthy Weight | `bmi >= 18.5, bmi < 25` |
| 25.0 – 29.9	   | Overweight     | `bmi >= 25, bmi < 30`   |
| 30.0 and Above | 	Obesity       | `bmi > 30`              |

[BMI Reference](https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html)

### Units

Some units conversions for your convince:

$1 Inch = 2.54 cm$

$1 Feet = 30.48 cm$

$1 Pound (lbs) = 0.45359237 Kg$



---

    Good Luck!
    © Ziv Perry 2023
