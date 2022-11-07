import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ABOUT } from '../../GraphQl/Queries'

import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"
import { UPDATE_PROFILE } from '../../GraphQl/Mutation'

const ProfileAdmin = () => {
    const [nama, setName] = useState("")
    const [mail, setEmail] = useState("")
    const [alamat, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [tglLahir, setTglLahir] = useState("")
    const [photo, setPhoto] = useState("")


    const [updateData, { error }] = useMutation(UPDATE_PROFILE)
    const { data } = useQuery(GET_ABOUT)

    const addData = async (e) => {
        e.preventDefault()
        await updateData({
            variables: {
                name: nama,
                address: alamat,
                dob: tglLahir,
                email: mail,
                image: photo,
                noHp: phone
            }
        })

    }

    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div className="ml-4">
                        <h1 className="h3 mb-0 text-gray-800">Profile</h1>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <div class="card-body">
                                    {data?.users.map((user) => (
                                        <div class="card">
                                            <img src={user.image} class="card-img-top " alt="..." />
                                            <div className="col-md-12 mt-4 mb-4">
                                                <input className="form-control" type="file" id="photo" />

                                            </div>

                                            <ul class=" list-group list-group-flush">

                                                <li class="list-group-item">Nama : {user.name}</li>
                                                <li class="list-group-item">Email : {user.email}</li>
                                                <li class="list-group-item">Alamat : {user.address}</li>
                                                <li class="list-group-item">Tanggal Lahir : {user.dob}</li>
                                                <li class="list-group-item">No Hp : {user.noHp}</li>
                                            </ul>


                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-sm-8 p-2 mt-3">
                                <div className="card p-4">
                                    <form className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Nama </label>
                                            <input
                                                onChange={(e) => { setName(e.target.value) }}

                                                type="text" className="form-control" />

                                        </div>

                                        <div className="col-md-4">
                                            <label className="form-label">Email</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text">email</span>
                                                <input
                                                    onChange={(e) => { setEmail(e.target.value) }}
                                                    type="email" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Address</label>
                                            <input
                                                onChange={(e) => { setAddress(e.target.value) }}
                                                type="text" className="form-control" />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Tanggal Lahir</label>
                                            <input
                                                onChange={(e) => { setTglLahir(e.target.value) }}
                                                type="text" className="form-control" />

                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Image</label>
                                            <input
                                                onChange={(e) => { setPhoto(e.target.value) }}
                                                type="text" className="form-control" />

                                        </div>

                                        <div className="col-md-3">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input
                                                onChange={(e) => { setPhone(e.target.value) }}
                                                type="text" className="form-control" id="phone" />

                                        </div>


                                        <div className="col-12">
                                            <button onClick={addData} class="btn btn-primary" >Update</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>


    )
}

export default ProfileAdmin