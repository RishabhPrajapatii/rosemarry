import React from "react";
// import Navbar from "./Navbar";

const Header = () => {
    return (
        <>
            <div className="__web-inspector-hide-shortcut__">
                <div className="d-flex flex-row mb-2 justify-content-center pt-3 text-center text-dark Header">
                    <img className="p-2 h-20 w-15 mx-1 md:mr-10 " src="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/7ed49c95-e075-4fda-bd7c-b013c7ce026c.png" />
                    <div className=" p-2 text-white item-center ">
                        <h1 className="fs-1">Rose Mary Hr. Sec. School</h1>
                        <p className="">Banjari Square, Kolar Road,Bhopal</p>
                    </div>
                </div>
            </div>
            {/* <Navbar /> */}
        </>
    );
};

export default Header;
