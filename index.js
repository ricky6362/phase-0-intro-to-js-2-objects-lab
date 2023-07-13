// Write your solution in this file!
const employee = {
    name: "Joel Otuko",
    streetAddress: "415 street" 
} 

// updating the items in an array non-destructively using a function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const myNewObject = {
        ...employee,
        [key]: value
    }

    return myNewObject;
}

// destructively updating an arrays content
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

// Non-destructive
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

// Destructive 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}



