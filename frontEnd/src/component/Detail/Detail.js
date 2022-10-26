import React from 'react'
import "./style.css"

const Detail = () => {
    return (
        <div>
            <section id="details" className="details">
                <div className="container">

                    <div className="row content">
                        <div className="col-md-4" data-aos="fade-right">
                            {/* <img src="assets/img/details-1.png" className="img-fluid" alt=""> */}
                        </div>
                        <div className="col-md-8 pt-4" data-aos="fade-up">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check"></i> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
                                <li><i className="bi bi-check"></i> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
                            </ul>
                            <p>
                                Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Detail