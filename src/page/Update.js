// import React, { useState } from 'react'
// import { UPDATE_PROFILE } from "../GraphQl/Mutation"
// import { useMutation } from '@apollo/client'
// const Update = () => {

//     const [nama, setNama] = useState("")
//     const [mail, setMail] = useState("")
//     const [tgl, setTgl] = useState("")
//     const [alamat, setAlamat] = useState("")
//     const [phone, setPhone] = useState("")
//     const [photo, setPhoto] = useState("")

//     const [updateData, { error }] = useMutation(UPDATE_PROFILE)

    
//     const addData = async (e) => {
//         e.preventDefault()
//        await updateData({ 
//             variables: { 
//                 name: nama, 
//                 address: alamat, 
//                 dob: tgl, 
//                 email: mail, 
//                 image: photo, 
//                 noHp: phone } 
//             })
        
//     }

//     return (
//         <div>
//             <h1>UPDATE DATA</h1>

//             <input onChange={(event) => { setNama(event.target.value) }} type="text" placeholder="Nama" />
//             <input onChange={(event) => { setMail(event.target.value) }} type="text" placeholder="Email" />
//             <input onChange={(event) => { setTgl(event.target.value) }} type="text" placeholder="DOB" />
//             <input onChange={(event) => { setAlamat(event.target.value) }} type="text" placeholder="address" />
//             <input onChange={(event) => { setPhone(event.target.value) }} type="text" placeholder="no Hp" />
//             <input onChange={(event) => { setPhoto(event.target.value) }} type="text" placeholder="photo" />

//             <button onClick={addData}>Update</button>




//         </div>
//     )
// }

// export default Update