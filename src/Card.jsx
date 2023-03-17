import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Card = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <div className='cardbg mt-4 d-flex justify-content-center'>

                <div className="row row-cols-1 row-cols-md-3 g-5 container ">
                    <div className="col ">
                        <h2 className='mt-5 d-flex justify-content-center text-light '>News & Event</h2>

                        <div className="card h-80 mt-4">
                            <div className="card-body">

                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col"> 1 of 2</div>
                                        <div className="col"> 2 of 2</div>
                                    </div>

                                </div>
                                <marquee behavior="scroll" direction="up" scrollamount="0" >
                                    <div className=" bg-[white] container  ">
                                        <div className="flex mb-2 row cardfont">
                                            <div className=" border col-md-4 p-1 mb-2 bg-info-subtle" >2021-10-20</div>
                                            <div className="border col-md-8 p-1 mb-2 bg-info-subtle">EDUCATIONAL FACILITIES &amp; STUDENT SAFETY</div>
                                        </div>
                                        <div className="flex mb-2 row cardfont">
                                            <div className=" border col-md-4 p-1 mb-2 bg-info-subtle">2020-06-18</div>
                                            <div className="border col-md-8 p-1 mb-2 bg-info-subtle">NOTICE FOR CLASS VII 2018-19</div>
                                        </div>
                                        <div className="flex mb-2 row cardfont">
                                            <div className=" border col-md-4 p-1 mb-2 bg-info-subtle">2020-10-05</div>
                                            <div className="border col-md-8 p-1 mb-2 bg-info-subtle">HIGHEST-SCORER-CLASS XII</div>
                                        </div>
                                        <div className="flex mb-2 row cardfont">
                                            <div className=" border col-md-4 p-1 mb-2 bg-info-subtle">2020-10-07</div>
                                            <div className="border col-md-8 p-1 mb-2 bg-info-subtle">EDUCATIONAL FACILITIES &amp; STUDENT SAFETY</div>
                                        </div>
                                        <div className="flex mb-2 row cardfont">
                                            <div className=" border col-md-4 p-1 mb-2 bg-info-subtle">2020-10-28</div>
                                            <div className="border col-md-8 p-1 mb-2 bg-info-subtle">SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</div>
                                        </div>

                                    </div>
                                </marquee>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className='mt-5 mb-5 d-flex justify-content-center text-light fs-2  cardfont fw-bold'>School Calender</h2>
                        <div className="mt-4">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">

                                <Calendar onChange={onChange} value={value} />

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className='mt-5 d-flex justify-content-center text-light fs-2  cardfont fw-bold'>Topper (2019-2020)</h2>
                        <div className=" mt-4" style={{ height: "50px" }}>
                            <div className="">
                                <img src="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/08c50c4d-2527-4128-a19e-0aa89b2da186.jpg" className="card-img-top cardimg " alt="..." />
                            </div>

                            <div className="card-body border">
                                <p className="card-text d-flex justify-content-center ">Chriayu Vijaywargiya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card