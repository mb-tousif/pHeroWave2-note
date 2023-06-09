// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// Answer:
const compareArrays = (arr1: number[], arr2: number[]): number[] => {
    const result = arr1.filter((num) => arr2.includes(num));
    return result;
}

console.log(compareArrays([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])); // [2, 4]

// // You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
// Write a TypeScript function that takes in an array of Products and a criterion string as parameters. The function should return a new array containing only the Products that match the provided criterion.
// Answer:
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, name: "A", price: 5, category: "Category 1" },
    { id: 2, name: "B", price: 10, category: "Category 2" },
    { id: 3, name: "C", price: 15, category: "Category 3" },
    { id: 4, name: "D", price: 20, category: "Category 4" },
    { id: 5, name: "E", price: 25, category: "Category 5" },
    { id: 6, name: "F", price: 30, category: "Category 6" },
    { id: 7, name: "G", price: 35, category: "Category 7" },
];

const filterProducts = (products: Product[], criterion: string): Product[] => {
    const result = products.filter((product) => product.category === criterion);
    return result;
}

console.log(filterProducts(products, "Category 4")); // [{ id: 4, name: "D", price: 20, category: "Category 4" }]


// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
// Answer:
type ProductTuple = [name: string, price: number, quantity: number];

const productsTpl: ProductTuple[] = [
    ["A", 5, 10],
    ["B", 10, 15],
    ["C", 15, 20],
    ["D", 20, 25],
];

// normal type
const calculateTotal = (products: ProductTuple[]): number => {
    const result = products.reduce((acc, curr) => acc + curr[1] * curr[2], 0);
    return result;
}

// generic type
function calculateTotalCost<T extends ProductTuple>(products: T[]): number {
    let totalCost = 0;
    for (const [name, price, quantity] of products) {
      const productCost = price * quantity;
      totalCost += productCost;
    }
    return totalCost;
  }

console.log(calculateTotal(productsTpl)); // 950
console.log(calculateTotalCost(productsTpl)); // 950

// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
// Answer:

// type MangoPriceType = number
// const mangoPrices: MangoPriceType[] = [ 80, 90, 101, 120, 75]
const mangoPrices: number[] = [ 80, 90, 101, 120, 75]
const sumEvenNumbers = (prices: number[]): number => {
    const result = prices.filter((price) => price % 2 === 0).reduce((acc, curr) => acc + curr, 0);
    return result;
}

console.log(sumEvenNumbers(mangoPrices)); // 290

// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
// Answer:

interface Person {
    name: string;
    age: number;
    email: string;
}

const people: Person[] = [
    { name: "A", age: 20, email: "a2023@example.com" },
    { name: "B", age: 25, email: "b2023@example.com" },
    { name: "C", age: 30, email: "c2023@example.com" }
];

const findPersonByEmail = (people: Person[], email: string): Person | null => {
    const result = people.find((person) => person.email === email);
    return result || null;
}

console.log(findPersonByEmail(people, "d2023@example.com"));
console.log(findPersonByEmail(people, "b2023@example.com"));

// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
// Answer:
const numbers: number[]= [1, 2, 7, 3, 4, 5];

const findMinMax = (num: number[]): [string, string] => {
    const min = Math.min(...num);
    const max = Math.max(...num);
    return [`minValue ${min}`, `maxValue ${max}`];
}
console.log(findMinMax(numbers));

// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
// Answer:
type Color = "red" | "green" | "blue";
const logColor = (color: Color, isUpperCase?: boolean): void => {
    if (isUpperCase) {
        console.log(color.toUpperCase());
    } else {
        console.log(color.toLowerCase());
    }
}

logColor("red", true); // RED
logColor("blue"); // blue
