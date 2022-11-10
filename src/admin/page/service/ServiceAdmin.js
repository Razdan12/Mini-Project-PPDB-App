import React from 'react'
import { Link } from 'react-router-dom';
import { BsPencilSquare, BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";

import Swal from 'sweetalert2'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"


const ServiceAdmin = () => {
    
    const HandleDelete = () =>{
        return(
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
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
                        <h1 class="h3 mb-0 text-gray-800">Service</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <Link to="/add-service">
                                                <button type="button" class="btn btn-success mb-3"><BsFillPlusCircleFill /></button>
                                            </Link>
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No</th>
                                                        <th scope="col">Nama</th>
                                                        <th scope="col">Deskripsi</th>
                                                        <th scope="col">Actions</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Mark</td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger" onClick={HandleDelete}><BsFillTrashFill /></button>
                                                            <Link to="/edit-service">
                                                                <button type="button" class="btn btn-warning ml-2"><BsPencilSquare /></button>
                                                            </Link>
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

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div >
    )
}

export default ServiceAdmin