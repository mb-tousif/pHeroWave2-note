// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// Answer:
const compareArrays = (arr1: number[], arr2: number[]): number[] => {
    const result = arr1.filter((num) => arr2.includes(num));
    return result;
}

console.log(compareArrays([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])); // [2, 4]

// // You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
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

// Write a TypeScript function that takes in an array of Products and a criterion string as parameters. The function should return a new array containing only the Products that match the provided criterion.

