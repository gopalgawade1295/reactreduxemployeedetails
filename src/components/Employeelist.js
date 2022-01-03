import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteEmployee } from '../actions/employeeAction'
import { Link, useHistory } from 'react-router-dom'
import { Button, TextField, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

function Employeelist() {
    let history = useHistory()
    const list = useSelector((state) => state.employeeReducer.list)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const Add = () => {
        history.push('/add')
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Employee details</h2>
            <form>
                <div style={{ textAlign: 'center' }}>
                    <TextField size="small" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />&emsp;
                    <Button variant="contained" color="primary" onClick={Add}>Add</Button>
                    <hr />
                </div>
            </form>
            <div>
                <Table>
                    <TableHead style={{ backgroundColor: 'black' }}>
                        <TableRow>
                            <TableCell align="left" style={{ color: 'white' }}>First name</TableCell>
                            <TableCell align="left" style={{ color: 'white' }}>Last name</TableCell>
                            <TableCell align="left" style={{ color: 'white' }}>Email id</TableCell>
                            <TableCell align="left" style={{ color: 'white' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.filter((employee) => {
                            if (search == '') {
                                console.log(employee.firstname)
                                return employee
                            }
                            else if (employee.firstname.toLowerCase().includes(search.toLowerCase())) {
                                return employee
                            }
                        }).map((employee) => {
                            return (
                                <TableRow key={employee.id}>
                                    <TableCell align="left">{employee.firstname}</TableCell>
                                    <TableCell align="left">{employee.lastname}</TableCell>
                                    <TableCell align="left">{employee.employeeid}</TableCell>
                                    <TableCell align="left"><Button variant="contained" color="primary"><Link to={`/update/${employee.id}`} style={{ color: 'white' }}>Edit</Link></Button>&nbsp;&nbsp;<Button variant="contained" color="secondary" onClick={() => dispatch(deleteEmployee(employee.id))}>Delete</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Employeelist
