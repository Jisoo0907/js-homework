// /* -------------------------------------------------------------------------- */
// /*                                  Mission-0                                 */
// /* -------------------------------------------------------------------------- */

// /* 1. 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고,
// 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.  */
// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Wonderland",
// };

// function getValueAtObject(obj, key) {
//   let keyValue = Object.prototype.hasOwnProperty.call(obj, key);

//   if (keyValue) {
//     return obj[key];
//   } else {
//     throw new Error("getValueAtObject() : 해당 키가 존재하지 않습니다.");
//   }
// }

// console.log(getValueAtObject(person, "name")); // 'Alice'
// console.log(getValueAtObject(person, "age")); // 25
// console.log(getValueAtObject(person, "city")); // 'Wonderland'
// console.log(getValueAtObject(person, "country")); // Error !

// /* 2. 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에
// 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를
// 작성하세요. */
// const numbers = [10, 20, 30, 40, 50];

// function getNumberAtArray(arr, index) {
//   if (Array.isArray(arr)) {
//     // 배열 유무 검사
//     if (index >= 0 && index <= arr.length - 1) {
//       // 유효한 인덱스인지 검사
//       return arr[index];
//     } else throw new Error("getNumberAtArray() : 유효하지 않은 인덱스입니다.");
//   } else throw new Error("getNumberAtArray() : 배열이 아닙니다.");
// }

// console.log(getNumberAtArray(numbers, 2)); // 30
// console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!

// /* 추가 설명

// - 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
// - 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
// - 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다. */
