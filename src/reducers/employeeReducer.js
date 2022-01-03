import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../constants/employeeTypes";

const initialState = {
    list: []
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            const { id, firstname, lastname, employeeid } = action.payload
            return {
                ...state, list: [...state.list, {
                    id: id, firstname: firstname, lastname: lastname, employeeid: employeeid
                }]
            }

        case DELETE_EMPLOYEE:
            const listA = state.list.filter((employee) => employee.id !== action.id)
            return {
                ...state, list: listA
            }

        case UPDATE_EMPLOYEE:
            const listB = state.list.map((employee) => employee.id == action.payload.id ? action.payload : employee)
            return {
                ...state, list: listB
            }

        default: return state
    }
}

export default employeeReducer
