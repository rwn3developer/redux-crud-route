import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Update_data } from './action';
import { Link } from 'react-router-dom';

const Edit = () => {

    let record = useSelector(state => state.updown.user);
        const [isEdit,setEdit] = useState(record.id);
    
   const dispatch = useDispatch();
   const [update,setUpdate] = useState(record)
    const handleClick = (e) => {
        let name = e.target.name;
       let value = e.target.value;
       setUpdate(
           { ...update,[name] : value}
       )
    }

    const save = () => {
        let obj = {
            id : isEdit,
            name : update.name,
            email : update.email,
            password : update.password
        }
        dispatch(Update_data(obj));
    }

  return (


        <>
        <h1>Edit user</h1>
           <table border={1}>
                <tr>
                    <td>Name :- </td>
                    <td><input type="text" value={update.name} onChange={ (e) => handleClick(e) } name='name'/></td>
                </tr>
                <tr>
                    <td>Email :- </td>
                    <td><input type="text" value={update.email} onChange={ (e) => handleClick(e) } name='email'/></td>
                </tr>
                <tr>
                    <td>Password :- </td>
                    <td><input type="text" value={update.password} onChange={ (e) => handleClick(e) } name='password'/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="button" onClick={ () => save() } value="submit"/></td>
                </tr>
           </table>
           <Link to="/view">view</Link>
        </>

  )
}

export default Edit;