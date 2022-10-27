import React from 'react'
import gambar from "../assets/img/thumbs/35-44.jpg"
import picture from "../assets/img/about/1.jpg"

const About = () => {
  return (
    <div>
        <div id="about" className="know_tm_main_section">
				<div className="know_tm_about">
					<div className="left">
						<div className="left_inner">
							{/* <div className="image">
								<img src={gambar} alt="gambar"/>
								<div className="main" data-img-url={picture}></div>
							</div> */}
							<div className="details">
								<ul>
									<li>
										<h3>Name</h3>
										<span>Nur Cahyanto</span>
									</li>
									<li>
										<h3>Birthday</h3>
										<span>4 March 2000</span>
									</li>
									<li>
										<h3>Mail</h3>
										<span>nur.razdan@gmail.com</span>
									</li>
									<li>
										<h3>Phone</h3>
										<span>(+62)85158693933</span>
									</li>
									<li>
										<h3>Address</h3>
										<span>Purbalingga - Jawa Tengah - Indonesia</span>
									</li>
									<li>
										<h3>Nationality</h3>
										<span>Indonesia</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="right">
						<div className="know_tm_main_title">
							<span>About Me</span>
							<h3>Fullstack developer number 1 in Indonesia</h3>
						</div>
						<div className="bigger_text">
							<p>Fullstack Developer, Designer & Teacher in Purbalingga</p>
						</div>
						<div className="text">
							<p>Hi! My name is Nur Cahyanto. I am Fullstack Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
						</div>
						<div className="know_tm_button">
							<a href="img/cv/1.jpg" download="">Download CV</a>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default About