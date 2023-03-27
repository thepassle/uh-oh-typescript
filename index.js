/**
 * @typedef {import('./types.js').User} User
 */

/**
 * @param {User} user
 */
export const greetUser = (user) =>
  `Hello ${user.name}, you are ${user.age} years old!`;

/**
 * @param {number} a
 * @param {number} b
 */
export const add = (a, b) => a + b;

add("a", 2);

/**
 * @template T
 * @param {T} a
 */
function foo(a) {
  return a;
}

/** @type {User} */
const user = {
  name: "John",
  age: 30,
};

const result = foo(user);
