import React, { useState } from 'react'
import {useMutation } from '@apollo/client'
import { ADD_EXPERIENCE } from '../../../GraphQl/Mutation'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"
import Swal from 'sweetalert2'

const AddExperience = () => {
    const [description, setDeskripsi] = useState("")
    const [experience, setExperience] = useState("")
    const [workplace, setWorkplace] = useState("")
    const [first, setFirst] = useState("")
    const [Last, setLast] = useState("")
    const [sub, setSub] = useState("")

    const [AddExperience, {Loading}] = useMutation(ADD_EXPERIENCE)
    
    const addExp = async (e) => {
		e.preventDefault()
		await AddExperience({
			variables: {
                description:  description,
				experience: experience,
				first_year: first,
				last_year: Last,
				sub_desk: sub,
				workplace: workplace
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
                        <h1 class="h3 mb-0 text-gray-800">Add Experience</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label class="form-label">Experience</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setExperience(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Sub-Deskription</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setSub(e.target.value)
                                    }}  />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Workplace</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setWorkplace(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">First Year</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setFirst(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Last Year</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setLast(e.target.value)
                                    }}  />
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Deskription</label>
                                    <textarea class="form-control" 
                                    onChange={(e) =>{
                                        setDeskripsi(e.target.value)
                                    }}></textarea>
                                </div>
                               
                                <button class="btn btn-primary" onClick={addExp}>Simpan</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>

  )
}

export default AddExperience