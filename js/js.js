// Завдання 1 Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of




const user = {
    name: "David",
    age: 12,
    hobby: "Swimming",
    premium: true,
}

user.mood = 'happy';
user.hobby = 'FrontEnd';
user.premium = false;

console.log(user);


const perebir = Object.keys(user)
console.log(perebir);

for (const i of perebir) {
    console.log(`${i}:${user[i]}`);
}





// Завдання 2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.




// const countProps = (obj) => {
//     const result = Object.keys(obj);
//     const resultTwo = result.length;
//     return resultTwo
// }

const countProps = (obj) => Object.keys(obj).length;


console.log(countProps(user));








// Завдання 3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".





const findBestEmployee = (employes) => {
    let bestEmployee = "";
    let maxTasks = 0;

    for (const [name, tasks] of Object.entries(employes)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }

    return bestEmployee;
};

const employes = {
    ann: 56,
    david: 33,
    helen: 2,
    lorence: 98,
};

console.log(findBestEmployee(employes) ); 






// Завдання 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = (employees) => {
    let total = 0;
    for (const salary of Object.values(employees)) {
        total += salary;
    }
    return total;
};

const salaries = {
    anton: 1200,
    david: 850,
    artem: 950
};

console.log(countTotalSalary(salaries)); // 3000






// Завдання 5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.




const getAllPropValues = (arr, prop) => {
    const values =  [];
    for (const obj of  arr){
        const value = obj[prop];
        if (value !==  undefined){
            values.push(value );
        }
    }  


    return values;
}

const product = [
    {name: 'phone', price: 33000, num: 6},
    {name: 'laptop', price: 40000, num: 2},
    {name: 'headphones', price: 3000, num: 10},
    {name: 'computer', price: 50000, num: 1},
]



console.log(getAllPropValues(product, 'name'));
console.log(getAllPropValues(product, 'num '));
console.log(getAllPropValues(product, 'category'));








// Завдання 6 Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).




const calculateTotalPrice = (allProducts, productName) => {
  let total = 0
  for (const {name, price, num} of allProducts) {
    if (name === productName) {
      total += price * num;
    }


  }


  return total;

};





