import React from 'react'

const SchoolMessage = () => {
    return (
        <>
            <div className="container-fluid  mt-5 schoolbgcolor"  >

                <div className="row ">
                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center">
                            <img className=" h-100 w-50" src="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/7ed49c95-e075-4fda-bd7c-b013c7ce026c.png" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" welcomebo" style={{ paddingTop: "80px;" }}>
                            <span className="welcomeboxhead text-gray"> School Message</span>
                            <p className="welcomeboxpara lh-lg mt-3 text-gray">We believe that every child is Unique and has a different learning approach. We, at Rose Mary, observe the talents and qualities and focus on them for educating the child. We facilitate the students to become spiritually deep rooted, morally upright &amp; emotionally mature. We equip students with a sound value system to live as good human beings &amp; impart substantial knowledge and skill to achieve excellence in diverse fields.</p>

                            <button className="btn w-20  ReadMe" >Read Me</button>
                        </div>
                    </div>

                </div>

            </div>
            
            
        </>
    )
}

export default SchoolMessage