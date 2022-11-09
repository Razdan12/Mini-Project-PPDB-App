import React from 'react'
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"


const EditResume = () => {
  return (
    <div>
        <div>
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Edit Resume</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label for="title" class="form-label">Keterangan</label>
                                    <input type="text" class="form-control"  />
                                </div>
                                <div class="mb-3">
                                    <label for="subTitle" class="form-label">Image</label>
                                    <input className="form-control" type="file" id="photo" />
                                </div>
                                <div class="mb-3">
                                    <label for="deskripsi" class="form-label">Deskripsi</label>
                                    <textarea class="form-control" ></textarea>
                                </div>
                               
                                <button class="btn btn-primary" >Simpan</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>

    </div>
        

    </div>
  )
}

export default EditResume