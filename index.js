// Write your solution in this file!
//#1
const employee = {
    name: 'Ammar',
    streetAddress: 'Al-Amir Muhammed'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj;

}
const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Bashir');
console.log(newEmployee);
newEmployee.name;
employee.name;

/*---------------------------------------------------------------------------------------------------------------------*/

//##2

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

let newEmployee0 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'City Center');

console.log(newEmployee0);
//employee.streetAddress = 'City Center';
//employee['name'] = 'Bashir';

/*----------------------------------------------------------------------------------------------------------------------*/

//###3
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    newObj[key];
    delete newObj[key];
    return newObj;
}
let newstEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');

console.log(newstEmployee);

//console.log(employee);

/*---------------------------------------------------------------------------------------------------------------------*/

//####4

function destructivelyDeleteFromEmployeeByKey(obj, key) {

    obj[key];
    delete obj[key];
    return obj;

}

destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employee);
