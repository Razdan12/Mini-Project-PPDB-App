import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ABOUT } from '../GraphQl/Queries'


const About = () => {

	

	const { data } = useQuery(GET_ABOUT)

	return (
		<div>
			<div id="about" className="know_tm_main_section">
				<div className="know_tm_about">
					<div className="left">
						<div className="left_inner">
							<div className="details">
								{data?.users.map((user) => (


									<ul>
										<li>
											<h3>Name</h3>
											<span>{user.name}</span>
										</li>
										<li>
											<h3>Birthday</h3>
											<span>{user.dob}</span>
										</li>
										<li>
											<h3>Mail</h3>
											<span>{user.email}</span>
										</li>
										<li>
											<h3>Phone</h3>
											<span>{user.noHp}</span>
										</li>
										<li>
											<h3>Address</h3>
											<span>{user.address}</span>
										</li>

									</ul>
								))}

							</div>
						</div>
					</div>
					{data?.about.map((about) => (
						<div className="right">

							<div className="know_tm_main_title">
								<span>About Me</span>
								<h3>{about.title}</h3>
							</div>
							<div className="bigger_text">
								<p>{about.sub_title}</p>
							</div>
							<div className="text">
								<p>{about.description}</p>
							</div>
							<div className="know_tm_button">
								<a href={about.link_cv} download={about.link_cv}>Download CV</a>
							</div>



						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default About