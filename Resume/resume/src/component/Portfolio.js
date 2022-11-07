import React from 'react'

const Portfolio = () => {
	return (
		<div>
			<div id="portfolio" className="know_tm_main_section">
				<div className="know_tm_portfolio">
					<div className="know_tm_main_title">
						<span>Portfolio</span>
						<h3>My works that I did for clients</h3>
					</div>
					<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="https://static.vecteezy.com/system/resources/previews/000/677/432/original/startup-landing-page.jpg" className="d-block w-100" alt="..."/>
							</div>
							<div className="carousel-item active">
								<img src="https://unbounce.com/photos/750-X-400-2x.jpg" className="d-block w-100" alt="..."/>
							</div>
							<div className="carousel-item active">
								<img src="https://image.freepik.com/free-vector/travel-landing-page-with-beautiful-landscape_52683-24795.jpg" className="d-block w-100" alt="..."/>
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio