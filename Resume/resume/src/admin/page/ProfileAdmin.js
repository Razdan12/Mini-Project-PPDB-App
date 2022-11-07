import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ABOUT } from '../../GraphQl/Queries'

import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"
import { UPDATE_PROFILE } from '../../GraphQl/Mutation'
import Swal from 'sweetalert2'

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
        Swal.fire(
            'Sukses',
            'Data Berhasil Disimpan !',
            'success'
        )

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
                                        <div class="col-sm-12 p-2">

                                            <div class="card p-4">

                                                <div class="mb-3">
                                                    <label for="title" class="form-label">Nama</label>
                                                    <input type="text" class="form-control" onChange={(e) => { setName(e.target.value) }} placeholder="nama" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="subTitle" class="form-label">Email</label>
                                                    <input type="text" class="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="email" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="subTitle" class="form-label">Alamat</label>
                                                    <input type="text" class="form-control" onChange={(e) => { setAddress(e.target.value) }} placeholder="email" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="subTitle" class="form-label">Nomor Handphone</label>
                                                    <input type="text" class="form-control" onChange={(e) => { setPhone(e.target.value) }} placeholder="email" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="subTitle" class="form-label">Tanggal Lahir ( YYYY-MM-DD )</label>
                                                    <input type="text" class="form-control" onChange={(e) => { setTglLahir(e.target.value) }} placeholder="email" />
                                                </div>
                                                
                                                
                            
                                            </div>

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