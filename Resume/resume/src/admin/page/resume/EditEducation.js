import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_EDUCATIONS } from '../../../GraphQl/Queries'
import { EDIT_EDUCATION } from '../../../GraphQl/Mutation'
import NavAdmin from '../../component/NavAdmin'
import Sidebar from "../../component/Sidebar"
import Swal from 'sweetalert2'


const EditResume = () => {
    const [description, setDeskripsi] = useState("")
    const [education, setEducation] = useState("")
    const [first, setFirst] = useState("")
    const [Last, setLast] = useState("")
    const [sub, setSub] = useState("")

    const [AddEdu, { Loading }] = useMutation(EDIT_EDUCATION)
    const { data :dataEdu, loading : dataLoading } = useQuery(GET_EDUCATIONS)

    const addEdu  = async (e) => {
		e.preventDefault()
		await AddEdu({
			variables: {
                id: e,
                description:  description,
				education: education,
				first_year: first,
				last_year: Last,
				sub_description: sub
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
                        <h1 class="h3 mb-0 text-gray-800">Edit Education</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="col-sm-12 p-2">
                        
                            <div class="card p-4">

                                <div class="mb-3">
                                    <label 
                                    class="form-label"
                                     >Education</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setEducation(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Awal Tahun</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setFirst(e.target.value)
                                    }}  />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Akhir Tahun</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setLast(e.target.value)
                                    }}  />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Jurusan</label>
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    onChange={(e) =>{
                                        setSub(e.target.value)
                                    }}  />
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label">Deskription</label>
                                    <textarea 
                                    class="form-control" 
                                    onChange={(e) =>{
                                        setDeskripsi(e.target.value)
                                    }}></textarea>
                                </div>
                                
                                <button  class="btn btn-primary" >Simpan</button>
                               
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>

            <script src="./assets/js/sb-admin-2.min.js"></script>
        </div>

  )
}

export default EditResume