import React from 'react'
import { useQuery, useMutation} from '@apollo/client'
import { GET_MESSAGE } from '../../GraphQl/Queries'
import { DELETE_MESSAGE } from '../../GraphQl/Mutation'

import NavAdmin from '../component/NavAdmin'
import Sidebar from "../component/Sidebar"
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2'
import Loading from '../../component/Loading'

function Message() {

    
    const { data , loading} = useQuery(GET_MESSAGE)
    const [deleteMessage, { error }] = useMutation(DELETE_MESSAGE)


    if (loading){
        return <Loading/>
    }


    const HandleDelete = (idx) =>{
        const i = data.map((e) =>{
            return e.id
        }).indexOf(idx)

        data.splice(idx)
        
        console.log("ini adalah id  = " + idx)
      

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

                    deleteMessage({
                        variables: {
                            id: idx
                        }
                    })

                  Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                  )
                }
              })
        )
        
    }

   

  return (
    <div>
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <NavAdmin />
                    </div>
                    <div class="ml-4">
                        <h1 class="h3 mb-0 text-gray-800">Pesan</h1>
                    </div>
                    <div class="col-lg-12 mb-4">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="col-sm-12 p-2">
 
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pengirim</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">No Hp</th>
                                                        <th scope="col">Subject</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data?.message.map((message, i) => ( 
                                                        
                                                    <tr>
                                                        <td>{message.name}</td>
                                                        <td>{message.email}</td>
                                                        <td>{message.phone}</td>
                                                        <td>{message.subject}</td>
                                                        
                                                        <td>
                                                            <button 
                                                            key = {i}
                                                            id = {i}
                                                            type="button" 
                                                            class="btn btn-danger" 
                                                            onClick={() => HandleDelete(i) }>
                                                                <BsFillTrashFill/>
                                                            </button>
                                                            <button type="button" class="btn btn-success ml-2"><BsFillEyeFill/></button>
                                                        </td>
                                                    </tr>
                                                    

                                                    ))}
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
        </div>
        

    </div>
  )
}

export default Message