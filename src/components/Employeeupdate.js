import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateEmployee } from '../actions/employeeAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@mui/material'

function Employeeupdate() {
    let history = useHistory()
    let { id } = useParams()
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [employeeid, setEmployeeid] = useState('')

    const Update = (e) => {
        e.preventDefault()
        dispatch(updateEmployee(id, firstname, lastname, employeeid))
        history.push('/')
    }

    return (
        <div>
            <h2>Update user</h2>
            <Link to={'/'}>Go back</Link>
            <br />
            <br />
            <form onSubmit={Update}>
                <TextField label="First name" size="small" type="text" value={firstname} required="required" onChange={(e) => setFirstname(e.target.value)} />
                <br />
                <br />
                <TextField label="Last name" size="small" type="text" value={lastname} required="required" onChange={(e) => setLastname(e.target.value)} />
                <br />
                <br />
                <TextField label="Email id" size="small" type="email" value={employeeid} required="required" onChange={(e) => setEmployeeid(e.target.value)} />
                <br />
                <br />
                <Button Button variant="contained" color="primary" type="submit">Update</Button>
            </form>
        </div>
    )
}

export default Employeeupdate
