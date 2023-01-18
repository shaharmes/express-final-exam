// const StatusMap = ['Underweight', 'Healthy Weight', 'Overweight', 'Obesity'];
// const qs = document.querySelector.bind(document);
//
// function hideResults() {
//     qs('.results').style.display = 'none';
// }
//
// function showResults(res) {
//     qs('.results').style.display = 'block';
//     qs('.bmi').innerText = res.bmi;
//     qs('.status').innerText = StatusMap[res.status];
// }
//
// function formRequest(form) {
//     return {
//         method: 'post',
//         body: new URLSearchParams(new FormData(form)),
//         headers: {
//             source: 'x-calc-bmi-' + Math.round(Math.random() * 100)
//         }
//     };
// }
//
// function jsonRequest(form) {
//     return {
//         method: 'post',
//         body: JSON.stringify([...(new FormData(form).entries())].reduce((acc, cur) => ({...acc, [cur[0]]: cur[1]}), {})),
//         headers: {
//             source: 'x-calc-bmi-' + Math.round(Math.random() * 100),
//             'content-type': 'application/json'
//         }
//     };
// }
//
// function onSubmit(e) {
//     e.preventDefault();
//     hideResults();
//     const options = qs('.mode').value === 'form'
//         ? formRequest(e.target)
//         : jsonRequest(e.target);
//     fetch('/bmi', options).then(res => res.json()).then(showResults);
// }
//
//
// function main() {
//     hideResults();
//     const form = document.querySelector('form');
//     form.addEventListener('submit', onSubmit);
// }
//
// document.addEventListener('DOMContentLoaded', main);
