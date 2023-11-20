// function isEnoughCapacity(products, containerSize) {
//   const arrOfValues = Object.values(products);
//   let totalCapacity = 0;
//   for (const value of arrOfValues) {
//     totalCapacity += value;
//   }
//   if (totalCapacity > containerSize) {
//     return false;
//   }
//   return true;
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function getTotalPrice(el, i) {
//     totalPrice += el;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers
// і повертає новий масив, у якому будуть тільки ті елементи оригінального масиву,
//   які більші за значення другого параметра числа value.Якщо таких значень не буде
// знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for,
//   вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const newArr = [];
//   numbers.forEach(function getNumber(el) {
//     if (el > value) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4], 2));
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((el) => el.title);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));
console.log(names);
