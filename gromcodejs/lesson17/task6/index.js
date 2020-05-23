/* ===> 1 <=== */
export const student = {
   name: 'Tom',
};

export function sayName() {
   console.log(this.name);
}

/*
* создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
* используйте .bind и ф-цию sayName
*/

export default sayStudentName = sayName.bind(student);

sayStudentName();

/*
* создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
* используйте ф-цию sayName и .bind с нужным объектом
*/

export default sayBruceName = sayName.bind({name: "Bruce"});

sayBruceName();

/* ===> 2 <=== */
export const company = {
   companyName: 'Microsoft'
};

export function greeting(firstName, lastName) {
   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

/*
* создайте ф-цию specialGreeting которая будет выводить в консоль
* 'Hello, Bob Marley. Welcome to the Microsoft`
* используйте ф-цию greeting и .bind с нужным объектом и аргументами
* specialGreeting не должна принимать ни одного аргумента
*/

export default specialGreeting = greeting.bind(company, company.firstName, company.lastName);

specialGreeting();

/* ===> 3 <=== */
export const country = {
   countryName: 'Ukraine',
   capital: 'Kyiv',
   population: 43000,
};

export function getPopulation(population) {
   return `Population in ${this.countryName} is ${population}`;
}

/*
* создайте ф-цию getUkrainePopulation которая будет возвращать строку
* 'Population in Ukraine is 43000`
* 43000 передавайте в виде числа
* используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
* getUkrainePopulation не должна принимать ни одного аргумента
*/

export default getUkrainePopulation = getPopulation.bind(country, country.population);

console.log(getUkrainePopulation());

/* ===> 4 <=== */
export const transaction = {
   amount: 1200,
   operation: 'sell',
   currency: 'USD',
   exchange: 'NYSE',
   printTransaction() {
       console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
   }
}

export const anotherTransaction = {
   amount: 400,
   operation: 'buy',
   currency: 'USD',
   exchange: 'NASDAQ',
};

/*
* создайте ф-цию printSpecialTransaction которая будет выводить в консоль
* '400 USD - buy on NASDAQ`
* используйте метод transaction.printTransaction и .bind с нужным объектом
* printSpecialTransaction не должна принимать ни одного аргумента
*/

export default printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);

printSpecialTransaction();