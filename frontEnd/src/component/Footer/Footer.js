import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <div>
            <footer id="footer" className='footer'>

                <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Nur Cahyanto</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://google.com/">Mini Project</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer