import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/getUser/" + id)
            .then(res => {
                setName(res.data.name)
                setEmail(res.data.email)
                setAge(res.data.age)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8080/updateUser/" + id, { name, email, age })
            .then(res => {
                console.log(res)
                navigate('/');
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <h3 className='text-center text-primary'><u>Update User</u></h3>
            <div className=' container'>
                <div className='border w-35 bg-light  border-warning p-4'>
                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="form-label">Name :</label>
                            <input type="name" className="form-control"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email :</label>
                            <input type="Email" className="form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age :</label>
                            <input type="text" className="form-control"
                                value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div classNameName='text-center' style={{ display: "flex", justifyContent: "space-between" }}>
                            <button type="submit" className="btn btn-primary">UPDATE</button>
                            {/* <Link to={"/"} className=" link-btn btn btn-info ">BACK</Link> */}
                        </div>
                    </form>
                </div>
            </div >

        </>
    )
}

export default UpdateUser