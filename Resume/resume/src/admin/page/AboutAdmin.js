import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { UPDATE_ABOUT, UPLOAD_CV } from '../../GraphQl/Mutation'
import { GET_ABOUT } from '../../GraphQl/Queries'
import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"
import Swal from 'sweetalert2'
import { storage } from "../../Firebase/config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"


const AboutAdmin = () => {

    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [progress, setProgress] = useState(0);

    const { data } = useQuery(GET_ABOUT)
    const [updateAbout, { error }] = useMutation(UPDATE_ABOUT, { refetchQueries: [GET_ABOUT] })
    const [upload, { error:UPLOAD }] = useMutation(UPLOAD_CV, { refetchQueries: [GET_ABOUT] })

    if (error) {
        Swal.fire(
            'Gagal',
            'Data Gagal Disimpan !',
            'error'
        )
    }

    const HandleFile = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        console.log(file)
        uploadCv(file);
    }
    const uploadCv = (file) => {

        if (!file) return;
        const sotrageRef = ref(storage, `cv/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    upload({
                        variables: {
                            link_cv: downloadURL
                        }
                    })
                    console.log(downloadURL)
                    Swal.fire(
                        'Sukses',
                        'Data Berhasil Disimpan !',
                        'success'
                    )
                });
            }
        )
    }



    const addData = async (e) => {
        e.preventDefault()
        await updateAbout({
            variables: {
                description: deskripsi,
                sub_title: subTitle,
                title: title
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
                                    <form onSubmit={HandleFile}>


                                        <div class="input-group mb-3">
                                            <input type="file" class="form-control" />
                                            <button type="submit" class="btn btn-success">Upload {progress} %</button>
                                        </div>
                                    </form>
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