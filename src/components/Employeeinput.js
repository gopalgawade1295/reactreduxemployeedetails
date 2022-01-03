import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../actions/employeeAction'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@mui/material'

function Employeeinput() {
    let history = useHistory()
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [employeeid, setEmployeeid] = useState('')

    const Submit = (e) => {
        e.preventDefault()
        dispatch(addEmployee(firstname, lastname, employeeid))
        setFirstname('')
        setEmployeeid('')
        setLastname('')
        history.push('/')
    }

    return (
        <div>
            <h2>Add user</h2>
            <Link to={'/'}>Go back</Link>
            <br />
            <br />
            <form onSubmit={Submit}>
                <TextField label="First name" size="small" type="text" value={firstname} required="required" onChange={(e) => setFirstname(e.target.value)} />
                <br />
                <br />
                <TextField label="Last name" size="small" type="text" value={lastname} required="required" onChange={(e) => setLastname(e.target.value)} />
                <br />
                <br />
                <TextField label="Email id" size="small" type="email" value={employeeid} required="required" onChange={(e) => setEmployeeid(e.target.value)} />
                <br />
                <br />
                <Button variant="contained" color="primary" type="submit">Add user</Button>
            </form>
        </div>
    )
}

export default Employeeinput
