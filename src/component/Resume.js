import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_RESUME } from '../GraphQl/Queries'
 
const Resume = () => {
	const { data } = useQuery(GET_RESUME)
	return (
		<div>
			<div id="resume" className="know_tm_main_section">
				<div className="know_tm_resume">
					<div className="know_tm_main_title">
						<span>Resume</span>
						<h3>Combination of Skill &amp; Experience</h3>
					</div>
					<div className="resume_inner">
						<div className="left">
							<div className="info_list">
								<div className="know_tm_resume_title">
									<h3>Education</h3>
									<span className="shape"></span>
								</div>
								<ul>
									{data?.educations.map((ed) => (

										<li>
											<div className="list_inner">
												<div className="short">
													<div className="job">
														<h3>{ed.sub_description}</h3>
														<span>{ed.education}</span>
													</div>
													<div className="year">
														<span>{ed.first_year} - {ed.last_year}</span>
													</div>
												</div>
												<div className="text">
													<p>{ed.description}</p>
												</div>
											</div>
										</li>
									))}


								</ul>
							</div>
							<div className="info_list">
								<div className="know_tm_resume_title">
									<h3>Experience</h3>
									<span className="shape"></span>
								</div>
								<ul>
									{data?.experience.map((ex) => (
										<li>
											<div className="list_inner">
												<div className="short">
													<div className="job">
														<h3>{ex.experience}</h3>
														<span>{ex.workplace}</span>
													</div>
													<div className="year">
														<span>{ex.first_year} - {ex.last_year}</span>
													</div>
												</div>
												<div className="text">
													<p>{ex.description}</p>
												</div>
											</div>
										</li>
									))}

								</ul>
							</div>
						</div>
						<div className="right">

							<div className="skills_list">
								<div className="know_tm_resume_title">
									<h3>Software Skills</h3>
									<span className="shape"></span>
								</div>
								<div className="software">
									<div className="circular_progress_bar">
										<ul>


											{data?.skills.map((sk) => (
												<li>
													<div className="list_inner">
														<div className="myCircle" data-value="0.85"></div>
														<div className="title"><h3>{sk.name_skill}</h3></div>
													</div>
												</li>
											))}

										</ul>
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

export default Resume