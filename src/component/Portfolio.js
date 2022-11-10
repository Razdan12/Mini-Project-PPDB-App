import React from 'react'
import Gallery from './Gallery'

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
							<Gallery/>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio