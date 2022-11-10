import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="know_tm_copyright hidden">
		<div className="container">
			<div className="inner">
				<div className="left">
					<p>Powered, Nur Cahyanto</p>
				</div>
				<div className="right">
					<ul>
						{/* <li><Link to="/">Terms &amp; Condition</Link></li>
						<li><Link to="/">Privacy Policy</Link></li> */}
						<li><Link to="/login">Login</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Footer