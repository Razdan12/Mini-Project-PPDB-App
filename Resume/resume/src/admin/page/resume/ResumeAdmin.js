import React from 'react'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { BsPencilSquare, BsFillTrashFill, BsFillPlusCircleFill } from "react-icons/bs";


const ResumeAdmin = () => {
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
                        <h1 class="h3 mb-0 text-gray-800">Resume</h1>
                    </div>
                    <div class="col-lg-12 mb-4">

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <h2>Education</h2>
                                            <Link to="/add-education">
                                                <button type="button" class="btn btn-success mb-3"><BsFillPlusCircleFill /></button>
                                            </Link>
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
                                                            <button type="button" class="btn btn-danger" onClick={HandleDelete}><BsFillTrashFill /></button>
                                                            <Link to="/edit-education">
                                                                <button type="button" class="btn btn-warning ml-2 "><BsPencilSquare /></button>
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

                        <div class="row mt-2">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <h2>Experience</h2>
                                            <Link to="/add-experience">
                                                <button type="button" class="btn btn-success mb-3"><BsFillPlusCircleFill /></button>
                                            </Link>
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
                                                            <button type="button" class="btn btn-danger" onClick={HandleDelete}><BsFillTrashFill /></button>
                                                            <Link to="/edit-experience">
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

                        <div class="row mt-2">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">

                                            <h2>Skills</h2>
                                            <Link to="/add-skill">
                                                <button type="button" class="btn btn-success mb-3"><BsFillPlusCircleFill /></button>
                                            </Link>
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
                                                            <button type="button" class="btn btn-danger" onClick={HandleDelete}><BsFillTrashFill /></button>
                                                            <Link to="/edit-skill">
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

        </div>
    )
}

export default ResumeAdmin