import React from 'react'
// import Carousel from './Carousel'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm z-10 sticky-top flex flex-wrap align-middle justify-center bg-white md:py-3 lg:py-3 d-flex justify-content-center" style={{ height: "10vh" }}>

                <div className="container d-flex justify-content-center">
                    <button className="navbar-toggler container " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarNavDropdown">
                        <ul className="navbar-nav set" >
                            <li className="nav-item active mx-5 ">
                                <a className="nav-link active nav-li-a" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link active dropdown-toggle nav-li-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu mx-5">
                                    <li><a className="dropdown-item nav-li-a" href="#">Action</a></li>
                                    <li><a className="dropdown-item nav-li-a" href="#">Another action</a></li>
                                    <li><a className="dropdown-item nav-li-a" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link active dropdown-toggle nav-li-a" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Academics
                                </a>
                                <ul className="dropdown-menu mx-5">
                                    <li><a className="dropdown-item nav-li-a" href="#">Action</a></li>
                                    <li><a className="dropdown-item nav-li-a" href="#">Another action</a></li>
                                    <li><a className="dropdown-item nav-li-a" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-5">
                                <a className="nav-link active nav-li-a" href="#">Gallery</a>
                            </li>

                            <li className="nav-item dropdown mx-5">
                                <a className="nav-link active nav-li-a" href="#">ContactUs</a>
                            </li>

                            {/* <a target="_blank" class=" block px-2 py-2 mt-2 text-sm leading-none text-center text-white bg-red-500 border rounded lg:ml-28 lg:inline-block hover:border-transparent lg:mt-0" href="https://cms.schoolscoop.co.in/admin/#/login?project=rosemarykr">Login</a> */}
                            <button type="button" class="btn btn-primary mx-5 nav-li-a d-flex justify-content-center align-middle" style={{ height: "30px", width: "50px" }} >Login</button>
                            <button type="button" class="btn btn-primary mx-5 nav-li-a d-flex justify-content-center align-middle" style={{ height: "30px", width: "90px" }} >Pay Online</button>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Carousel /> */}
            
        </>
    )
}

export default Navbar