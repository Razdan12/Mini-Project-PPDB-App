import React from 'react'
import squares from "../assets/img/svg/squares.svg"

const Service = () => {
  return (
    <div>
        <div id="service" className="know_tm_main_section">
				<div className="know_tm_services">
					<div className="know_tm_main_title">
						<span>Service</span>
						<h3>Never compromise with quality</h3>
					</div>
					<div className="service_list">
						<ul>
							<li>
								<div className="list_inner">
									<span className="icon"><img className="svg" src={squares} alt=""/></span>
									<h3 className="title">Wireframing</h3>
									<p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
									<a className="know_tm_full_link" href="#"></a>
									<div className="hidden_content">
										<div className="service_informations">
											<div className="image">
												<img src="img/thumbs/4-2.jpg" alt=""/>
												<div className="main" data-img-url="img/service/1.jpg"></div>
											</div>
											<div className="description">
												<p>Know is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>
									</div>
								</div>
							</li>
                            <li>
								<div className="list_inner">
									<span className="icon"><img className="svg" src={squares} alt=""/></span>
									<h3 className="title">Wireframing</h3>
									<p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
									<a className="know_tm_full_link" href="#"></a>
									<div className="hidden_content">
										<div className="service_informations">
											<div className="image">
												<img src="img/thumbs/4-2.jpg" alt=""/>
												<div className="main" data-img-url="img/service/1.jpg"></div>
											</div>
											<div className="description">
												<p>Know is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>
									</div>
								</div>
							</li>
							
						</ul>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Service