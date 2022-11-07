import React from 'react'
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"


const ResumeAdmin = () => {
    return (
        <div>

            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Portfolio</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <button type="button" class="btn btn-success mb-3">Tambah</button>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No</th>
                                                        <th scope="col">Keterangan</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger">Delete</button>
                                                            <button type="button" class="btn btn-warning ml-2">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger">Delete</button>
                                                            <button type="button" class="btn btn-warning ml-2">Edit</button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeAdmin