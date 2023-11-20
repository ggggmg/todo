// const collection = [
//   { title: "hello", status: false },
//   { title: "hell", status: true },
//   { title: "hel", status: true },
//   { title: "he", status: false },
//   { title: "h", status: false },
// ];

// const newCollection = collection.filter((el) => el.status);
// const stringCollection = collection.filter((el) => el.title.length > 3);
// console.log(stringCollection);

// const numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
// const newNumber = numbers.filter((el) => el > 0);
// console.log(newNumber);

// const collection = [true, false, 1, "hello", "str", 2, 3, {}, undefined, null];
// const positive = collection.filter((el) => el);
// const numbers = collection.filter((el) => typeof el === "number");
// const strings = collection.filter((el) => typeof el === "string");
// const stringsAndNumbers = collection.filter(
//   (el) => typeof el === "string" || typeof el === "number"
// );
// console.log(stringsAndNumbers);

// console.log(undefined || null || "" || 3 || 5 || 10);
// console.log(undefined && null && "" && 3 && 5 && 10);

// console.log((10 && 1) || (null && true));

// || ищет красавчика
// && ищет гниду

// const func = () => {
//   const number = 10;
//   newFunc(number);
// };

// const newFunc = (number) => {
//   console.log(number);
// };

// func();

// const collection = [
//   { title: "hello", status: false },
//   { title: "hell", status: true },
//   { title: "hel", status: true },
//   { title: "he", status: false },
//   { title: "h", status: false },
// ];

// const newArray = collection.map((el) => {
//   return { ...el, status: "completed" };
// });
// console.log(newArray);
