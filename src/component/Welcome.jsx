import React from 'react'

const Welcome = () => {
    return (
        <>
            <div className="container-fluid  mt-5" >

                <div className="row ">
                    <div className="col-md-6">
                        <div className=" welcomebo " style={{ paddingTop: "80px;" , paddingLeft:"50px"}}>
                            <h2 className=" welcomeboxhead " > Welcome to Rose Mary Hr. Sec. School Bhopal</h2>
                            <p className=" welcomeboxpara">The Rose Mary Hr. Sec. School is established in 1991. The founder of Rose Mary School is Mr. Devendra Singh Ji.</p>
                            <button className="btn w-20  ReadMe" >Read Me</button>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="frame " id='youtube'>
                            <iframe className=" w-100 " id="youtube" src="https://www.rosemarykr.com/video/demo.mp4" frameborder="" allowfullscreen="">
                            </iframe>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Welcome