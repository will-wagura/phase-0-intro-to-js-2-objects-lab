const employee = {
    name: "Sam"
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }});

function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
    return {...employee, [streetAddress]: "11 Broadway"};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value){
    employee[streetAddress] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}