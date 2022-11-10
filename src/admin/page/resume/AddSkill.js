import React, { useState } from 'react'
import {useMutation } from '@apollo/client'
import { ADD_SKILLS } from '../../../GraphQl/Mutation'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"
import Swal from 'sweetalert2'

const AddSkill = () => {

    const [skill, setSkill] = useState("")
    const [range, setRange] = useState("")

    const [AddSkl, { Loading }] = useMutation(ADD_SKILLS)

    const addSkill = async (e) => {
		e.preventDefault()
		await AddSkl({
			variables: {
                name_skill:  skill,
				range: range
				
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
                        <h1 class="h3 mb-0 text-gray-800">Add Skill</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label class="form-label">Skill</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setSkill(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Range</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setRange(e.target.value)
                                    }}  />
                                </div>

                                

                                
                               
                                <button class="btn btn-primary" onClick={addSkill}>Simpan</button>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>
  )
}

export default AddSkill