import React, { useEffect, useState } from 'react'
import mongoose from 'mongoose';
import axios from 'axios';


export default function RegisterRest1() {
    const [data, dataset] = useState({
        Institution_name: "",
        Address: "",
        Established_year: 0,
        Registrationnumber: "",
        Affiliation: "",
        Username: "",
        states: "",
        studentsineachclass: 0,
        Password: "",
        collegeid: "",
        role:"institute"


    })
    async function onset(e) {
        e.preventDefault();
        console.log("data is ",data)
        fetch("http://localhost:4500/registration",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(d=>d.json()).then(d=>console.log(d))
        dataset({ Institution_name: "",
        Address: "",
        Established_year: 0,
        Registrationnumber: "",
        Affiliation: "",
        Username: "",
        states: "",
        studentsineachclass: 0,
        Password: "",
        collegeid: "",
        role:"institute"
    })
}
    return (

        <div>
            <div className="container" id="intermediate">
                <h3>INTERMEDIATE</h3>
                <form className='form' onSubmit={e => { onset(e) }}>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Institution Name
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Institution_name: e.target.value }) }}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text">Address</span>
                                <textarea
                                    className="form-control"
                                    aria-label="With textarea"
                                    onChange={e => { dataset({ ...data, Address: e.target.value }) }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Established Year
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Year"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Established_year: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Registration Number
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Reg. Number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Registrationnumber: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    UNIVERSITY AFFILIATED TO
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Board"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Affiliation: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Username
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, Username: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    State
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, states: e.target.value }) }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">
                                    Students in each class
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Number"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={e => { dataset({ ...data, studentsineachclass: e.target.value }) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">College's Mail ID</span>
                                <input type="text" className="form-control" placeholder="mail" aria-label="Username"
                                    aria-describedby="basic-addon1" onChange={e => { dataset({ ...data, collegeid: e.target.value }) }} />
                            </div>
                            <hr />
                            <div className="input-group input-group-lg mb-2">
                                <span className="input-group-text" id="basic-addon1">PASSWORD</span>
                                <input type="password" className="form-control" placeholder="Enter atleast 8+ characters" aria-label="Username"
                                    aria-describedby="basic-addon1" onChange={e => { dataset({ ...data, Password: e.target.value }) }} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center  ">
                        <button type="submit " className="btn login btn btn-primary btn-sm btn-outline-light me-2 fs-4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
