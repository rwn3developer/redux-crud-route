import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_data } from './action';
import { Link } from 'react-router-dom';

const Crud = () => {

    
   const dispatch = useDispatch();
   const [input,setInput] = useState({
            id : Math.floor(Math.random() * 100),
            name : '',
            email : '',
            password : '',
   })
    const handleClick = (e) => {
        let name = e.target.name;
       let value = e.target.value;
       setInput(
           { ...input,[name] : value}
       )
    }

    const save = () => {
        dispatch(Add_data(input));
    }

  return (


        <>
           <table border={1}>
                <tr>
                    <td>Name :- </td>
                    <td><input type="text" onChange={ (e) => handleClick(e) } name='name'/></td>
                </tr>
                <tr>
                    <td>Email :- </td>
                    <td><input type="text" onChange={ (e) => handleClick(e) } name='email'/></td>
                </tr>
                <tr>
                    <td>Password :- </td>
                    <td><input type="text" onChange={ (e) => handleClick(e) } name='password'/></td>
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

export default Crud;