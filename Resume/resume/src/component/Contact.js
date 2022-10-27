import React from 'react'

const Contact = () => {
  return (
    <div>
        <div id="contact" className="know_tm_main_section">
				<div className="know_tm_contact">
					<div className="know_tm_main_title">
						<span>Contact Me</span>
						<h3>Contact me to get your work done</h3>
					</div>
					<div className="wrapper">
						<div className="left">
							<ul>
								<li>
									<div className="list_inner">
										<span className="icon"><img className="svg" src="img/svg/smartphone.svg" alt=""/></span>
										<div className="short">
											<h3>Call Me</h3>
											<span>+123 456 7890</span>
										</div>
									</div>
								</li>
								<li>
									<div className="list_inner">
										<span className="icon"><img className="svg" src="img/svg/letter.svg" alt=""/></span>
										<div className="short">
											<h3>Email Us</h3>
											<span><a href="#"><span className="__cf_email__" data-cfemail="88e0ede4e4e7c8e1e3e6e7ffa6ebe7e5">[email&#160;protected]</span></a></span>
										</div>
									</div>
								</li>
								<li>
									<div className="list_inner">
										<span className="icon"><img className="svg" src="img/svg/placeholder.svg" alt=""/></span>
										<div className="short">
											<h3>Address</h3>
											<span>20, Bardeshi, Amin Bazar</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="right">
							<div className="fields">
								<form action="/" method="post" className="contact_form" id="contact_form" autocomplete="off">
									<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
									<div className="empty_notice"><span>Please Fill Required Fields</span></div>
									<div className="input_list">
										<ul>
											<li><input id="name" type="text" placeholder="Your Name"/></li>
											<li><input id="email" type="text" placeholder="Your Email"/></li>
											<li><input id="phone" type="number" placeholder="Your Phone"/></li>
											<li><input id="subject" type="text" placeholder="Subject"/></li>
										</ul>
									</div>
									<div className="message_area">
										<textarea id="message" placeholder="Your message here"></textarea>
									</div>
									<div className="know_tm_button">
										<a id="send_message" href="#">Submit Now</a>
									</div>

									{/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}

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