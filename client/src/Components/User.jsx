import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [state, setState] = useState([])
    // const {id}=useParams();
    useEffect(() => {
        axios.get("http://localhost:8080")
            .then(res => setState(res.data))
            .catch(err => console.log(err))
    }, [])


    const DeleteUser = (id) => {
        axios.delete("http://localhost:8080/deleteUser/" + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='container'>
                <div className='w-75 '>
                    <Link to={"/CreateUser"} className='btn btn-info my-2'>+ADD USER</Link>
                    <table className='table rounded-top text-center'>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>AGE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((val, i) => {
                                    return <tr key={i}>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.age}</td>
                                        <td>
                                            <Link to={`/UpdateUser/${val._id}`} className='link-btn btn btn-success'>UPDATE</Link>
                                            <button className='btn btn-danger mx-3' onClick={(e)=>DeleteUser(val._id)}>DELETE</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User