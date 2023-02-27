'use strict';

// const now = new Date();

// console.log(now);

// const now = new Date('2023-02-24');

// console.log(now);

// const now = new Date(2023, 2, 24, 20);

// console.log(now);

// const now = new Date(0);

// console.log(now);

// const now = new Date(-9999999999999);

// console.log(now);

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.setHours(40));
// console.log(now);

// const now = new Date('2023-02-24');
// new Date.parse('2023-02-24');

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date ();

console.log(`Цикл отработал за ${end - start} миллисекунд`);