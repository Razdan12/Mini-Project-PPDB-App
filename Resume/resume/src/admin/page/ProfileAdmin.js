import React from 'react'
import "../assets/css/sb-admin-2.min.css"
import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"

const ProfileAdmin = () => {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Profile</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                            <div class="card p-4">
                                <form class="row g-3">
                                    <div class="col-md-4">
                                        <label for="fisrtName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="firstName" />

                                    </div>
                                    <div class="col-md-4">
                                        <label for="lastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="lastName" />

                                    </div>
                                    <div class="col-md-4">
                                        <label for="email" class="form-label">Email</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="email">email</span>
                                            <input type="email" class="form-control" id="email" />

                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="addres" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="address" />

                                    </div>
                                    <div class="col-md-3">
                                        <label for="nationality" class="form-label">Nationality</label>
                                        <select class="form-select" id="nationality">
                                            <option selected disabled value="">Choose...</option>
                                            <option>Indonesia</option>
                                            <option>Malaysia</option>
                                        </select>

                                    </div>
                                    <div class="col-md-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="text" class="form-control" id="phone" />

                                    </div>
                                    <div class="col-md-3">
                                        <label for="photo" class="form-label">Photo Profil</label>
                                        <input class="form-control" type="file" id="photo"/>

                                    </div>

                                    <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>

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