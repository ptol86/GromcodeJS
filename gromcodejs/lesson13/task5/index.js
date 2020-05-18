export function filterNames(arr, text) {
    if (!Array.isArray(arr)) return null;
    return arr.filter(name => name.includes(text) && name.length > 5);
}

export function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((sum, current) => sum + current, 0) / arr.length;
}

export const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
      country: 'Ukraine',
      company: 'NYSE'
    },
    'operation time': 1584029990001
  };
  console.log(transaction.currency);

  /* выведите в консоль значение свойства 'currency' с помощью точки */
  console.log(transaction.value);
  /* выведите в консоль значение свойства 'value' с помощью квадратных скобок */
  
  export const key = 'operation';
  /* выведите в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
  console.log(transaction[key]);
  /* выведите в консоль значение свойства 'company' используя квадратные скобки */
  console.log(transaction.agent['company']);
  /* выведите в консоль значение свойства 'country' используя точку */
  console.log(transaction.agent.country);
  console.log(transaction["operation time"]);
  /* выведите в консоль значение свойства 'operation time' используя квадратные скобки */

  export const user = {
    name: 'Tom',
    age: 17,
  };
  
  /* присвойте объекту свойство hobby со значением 'football' с помощью точки */
    user.hobby = "football";
  
  export const anotherKey = 'married';
  /* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */
    user[anotherKey] = false;
  /* присвойте объекту свойство 'favorite music' со значением 'rock' */
    user['favorite music'] = 'rock';
  /* присвойте объекту свойство 'address', которое будет пустым объкетом */
    user.address = {};
  /* присвойте объекту в 'address' свойство 'country', со значением 'Ukraine' */
    user["address"].country = 'Ukraine';
  /* присвойте объекту в 'address' свойство 'building', со значением 17 */
    user["address"]['building'] = 17;
  /* выведите в консоль объект user */
  console.log(user);
  














