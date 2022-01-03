import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../constants/employeeTypes'

export const addEmployee = (firstname, lastname, employeeid) => {
    return {
        type: ADD_EMPLOYEE,
        payload: {
            id: Math.random(),
            firstname: firstname,
            lastname: lastname,
            employeeid: employeeid
        }
    }
}

export const deleteEmployee = (id) => {
    return {
        type: DELETE_EMPLOYEE,
        id
    }
}

export const updateEmployee = (id, firstname, lastname, employeeid) => {
    return {
        type: UPDATE_EMPLOYEE,
        payload: {
            id: id,
            firstname: firstname,
            lastname: lastname,
            employeeid: employeeid
        }
    }
}
