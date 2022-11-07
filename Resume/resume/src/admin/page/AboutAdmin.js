import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { UPDATE_ABOUT } from '../../GraphQl/Mutation'
import {GET_ABOUT} from '../../GraphQl/Queries'
import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"

const AboutAdmin = () => {
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [linkCv, setLinkCv] = useState("")

    const [updateAbout, { error }] = useMutation(UPDATE_ABOUT)
    const { data } = useQuery(GET_ABOUT)

    const addData = async (e) => {
        e.preventDefault()
        await updateAbout({
            variables: {
                description: deskripsi,
                link_cv: linkCv,
                sub_title: subTitle,
                title: title
            }
        })

    }


    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">About</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        {data?.about.map((about) => (
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" onChange={(e) => { setTitle(e.target.value) }} placeholder={about.title} />
                                </div>
                                <div class="mb-3">
                                    <label for="subTitle" class="form-label">Sub Title</label>
                                    <input type="text" class="form-control" onChange={(e) => { setSubTitle(e.target.value) }} placeholder={about.sub_title} />
                                </div>
                                <div class="mb-3">
                                    <label for="deskripsi" class="form-label">Deskripsi</label>
                                    <textarea class="form-control" onChange={(e) => { setDeskripsi(e.target.value) }} rows="3" placeholder={about.description}></textarea>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="file" class="form-control" onChange={(e) => { setLinkCv(e.target.value) }} />
                                    <label class="input-group-text" for="uploadCv">Upload CV</label>
                                </div>
                                <button onClick={addData} class="btn btn-primary">Simpan</button>
                            </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>


    )
}

export default AboutAdmin