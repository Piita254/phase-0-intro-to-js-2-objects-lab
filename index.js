// Write your solution in this file!
// Initialize employee object
var employee = {
    name: 'John Doe',
    streetAddress: '123 Main Street'
};

// Function to update employee with key and value (non-destructively)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee with key and value (destructively)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete property from employee object (non-destructively)
function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete property from employee object (destructively)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
