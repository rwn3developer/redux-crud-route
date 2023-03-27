import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Delete_data,Edit_data } from './action'
import Crud from './Crud'

const View = () => {

    let record = useSelector(state => state.updown.users);
    let dispatch = useDispatch();

  return (
    <>
        <table border={1}>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Action</td>
            </tr>
            {
                record.map((val) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>
                                <button onClick={ () => dispatch(Delete_data(val.id)) }>Delete</button>
                                <Link to='edit'><button onClick={ () => dispatch(Edit_data(val.id)) }>Edit</button></Link>
                            </td>
                        </tr>
                    )
                })
            }
               
        </table><br></br>
        <Link to="/">Add</Link>
    </>
  )
}


export default View