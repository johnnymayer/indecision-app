const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };



// export const fizzBuzz = (x) => {
//     for (let i = 1; i < x + 1; i++){
//         if (i % 15 === 0) {
//             console.log("fizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else {
//             console.log(i);
//         }
//     }
// };
