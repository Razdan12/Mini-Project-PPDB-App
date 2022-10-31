import React from 'react'
import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"

const AboutAdmin = () => {
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
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="title" placeholder="input your title" />
                                </div>
                                <div class="mb-3">
                                    <label for="subTitle" class="form-label">Sub Title</label>
                                    <input type="text" class="form-control" id="subTitle" placeholder="input your sub title" />
                                </div>
                                <div class="mb-3">
                                    <label for="deskripsi" class="form-label">Deskripsi</label>
                                    <textarea class="form-control" id="deskripsi" rows="3"></textarea>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="file" class="form-control" id="uploadCv2"/>
                                        <label class="input-group-text" for="uploadCv">Upload CV</label>
                                </div>
                                <a href="#" class="btn btn-primary">Simpan</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>


    )
}

export default AboutAdmin