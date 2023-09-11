import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axio from "axios"

const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axio.post("http://localhost:8080/create", { name, email, age })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
        // console.log(name, email, age)
    }
    return (
        <>
            <div className=' container'>
                <div className='border w-35 bg-light  border-warning p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name :</label>
                            <input type="name" className="form-control"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email :</label>
                            <input type="Email" required className="form-control"
                                onChange={(e) => setEmail(e.target.value)} />
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age :</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='text-center d-flex justify-content-between'>
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                            <Link to={"/"} className=" link-btn btn btn-info ">BACK</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateUser