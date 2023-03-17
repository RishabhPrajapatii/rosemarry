import React from 'react'

const Welcome = () => {
    return (
        <div>
            <div>
            <div>
                <div class="flex flex-col md:flex-row w-full justify-center font-normal leading-7 text-base px-10 md:px-16 py-10 text-gray-600 bg-[#cbdcf8]">
                    <div class="w-5/5  justify-center mb-5 flex align-middle md:w-6/12 ">
                        <img class=" h-[150px] md:h-[200px] lg:h-[250px]" src="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/7ed49c95-e075-4fda-bd7c-b013c7ce026c.png" />
                    </div>
                    <div class="w-5/5 md:w-6/12 ">
                        <span class="text-4xl"> School Message</span>
                        <p class="mt-5">We believe that every child is Unique and has a different learning approach. We, at Rose Mary, observe the talents and qualities and focus on them for educating the child. We facilitate the students to become spiritually deep rooted, morally upright &amp; emotionally mature. We equip students with a sound value system to live as good human beings &amp; impart substantial knowledge and skill to achieve excellence in diverse fields.</p>
                    </div>
                </div>
                <div class="flex flex-row justify-center text-center text-black no-underline bg-[#81cef1] ">
                {/* style="border:1px solid white" */}
                    <div class="m-3 border-white border-solid border-1 md:my-7 md:mx-8 px-10" >
                        <a class="" href="Contactus">
                            <img class=" h-[70px] " src="/images/tc.png" alt="slide1" />
                        </a>ContactUs
                    </div>
                    <div class="m-3 border-white border-solid md:my-7 md:mx-8 border-1 px-10 py-1" >
                        {/* style="border:1px solid white" */}
                        <a class="" href="Gallery">
                            <img class="h-[70px]" src="/images/photo.png" alt="slide1" />
                        </a>Photo-Gallery
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Welcome