import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ABOUT } from '../GraphQl/Queries'
import { ADD_MESSAGE } from '../GraphQl/Mutation'

import phone from "../assets/img/svg/smartphone.svg"
import email from "../assets/img/svg/letter.svg"
import address from "../assets/img/svg/placeholder.svg"
import { Alert } from 'bootstrap'
import Swal from 'sweetalert2'

const Contact = () => {
	const { data } = useQuery(GET_ABOUT)

	const [name, setName] = useState("")
	const [datEmail, setEmail] = useState("")
	const [datPhone, setPhone] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")

	const [updateData, { error }] = useMutation(ADD_MESSAGE)


	if (error){
        return (
			Alert(error)
		)
    }

	const addMessage = async (e) => {
		e.preventDefault()
		await updateData({
			variables: {
				email: datEmail,
				message: message,
				name: name,
				phone: datPhone,
				subject: subject
			}
		})
		Swal.fire(
			'Sukses',
			'Pesan terkirim, Tunggu Balasan di email kamu !',
			'success'
		)

	}

	return (
		<div>
			<div id="contact" className="know_tm_main_section">
				<div className="know_tm_contact">

					<div className="know_tm_main_title">
						<span>Contact Me</span>
						<h3>Contact me to get your work done</h3>
					</div>
					<div className="wrapper">
						{data?.users.map((user) => (

							<div className="left">
								<ul>
									<li>
										<div className="list_inner">
											<span className="icon"><img className="svg" src={phone} alt="" /></span>
											<div className="short">
												<h3>Call Me</h3>
												<span>{user.noHp}</span>
											</div>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<span className="icon"><img className="svg" src={email} alt="" /></span>
											<div className="short">
												<h3>Email Us</h3>
												<span>{user.email}</span>
											</div>
										</div>
									</li>
									<li>
										<div className="list_inner">
											<span className="icon"><img className="svg" src={address} alt="" /></span>
											<div className="short">
												<h3>Address</h3>
												<span>{user.address}</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						))}
						<div className="right">
							<div className="fields">
								<form action="/" method="post" className="contact_form" id="contact_form" autocomplete="off">
									<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div className="empty_notice"><span>Please Fill Required Fields</span></div>
									<div className="input_list">
										<ul>
											<li>
												<input
													onChange={(e) => {
														setName(e.target.value)
													}}
													id="name"
													type="text"
													placeholder="Your Name" />
											</li>
											<li>
												<input
													onChange={(e) => {
														setEmail(e.target.value)
													}}
													id="email"
													type="email"
													placeholder="Your Email" />
											</li>
											<li>
												<input
													onChange={(e) => {
														setPhone(e.target.value)
													}}
													id="phone"
													type="number"
													placeholder="Your Phone" />
											</li>
											<li>
												<input
													onChange={(e) => {
														setSubject(e.target.value)
													}}
													id="subject"
													type="text"
													placeholder="Subject" />
											</li>
										</ul>
									</div>
									<div className="message_area">
										<textarea
											onChange={(e) => {
												setMessage(e.target.value)
											}}
											id="message"
											placeholder="Your message here">

										</textarea>
									</div>
									<div className="know_tm_button">
										<button className="btn btn-warning"
											onClick={addMessage}
										>Submit Now</button>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact