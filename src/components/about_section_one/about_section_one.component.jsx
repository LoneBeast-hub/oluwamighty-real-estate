// react icons
import { FaArrowRight } from "react-icons/fa6";
// react router
import { Link } from 'react-router-dom';

const AboutSectionOne = () => {
    return(
        <section className="w-full bg-white flex items-center">
            {/* adjuster */}
            <div className="max-w-[1280px] py-[70px] md:py-[120px] w-[90%] mx-auto">
                {/* Title */}
                <h1 className="text-[3rem] md:text-[5.2rem] text-center font-semibold mx-auto md:max-w-[80%] lg:max-w-[60%]">
                    Welcome to OLUWAMIGHTY GLOBAL BUSINESS LTD
                </h1>
                {/* sub title */}
                <p className="text-[1.8rem] mt-[20px] md:text-[2.4rem] text-center mx-auto md:max-w-[80%] lg:max-w-[60%]">
                    Welcome to Home Lengo, where we turn houses into homes and dreams into reality. At Home, we understand that a home is more than just a physical space, it's a place where memories are created, families grow, and life unfolds.
                </p>
                {/* CEO */}
                <div className="flex mt-[30px] w-fit mx-auto flex-col gap-[5px]">
                    <p className="text-[1.8rem] font-semibold">Oluwamighty</p>
                    <p className="text-[1.4rem] text-center text-[#a3abb0]">CEO & founder</p>
                </div>
                {/* CTA */}
                <Link to='/contact_us' className='flex gap-[7px] px-[20px] py-[10px] bg-blue-700 text-white w-full md:min-w-[30%] md:max-w-[35%] justify-center mx-auto mt-[20px] md:px-[30px] font-medium hover:bg-blue-800 transition-all rounded-full md:py-[15px] border border-blue-700 items-center'><span className='text-[1.6rem]'>Contact Us</span><FaArrowRight className='text-[1.6rem]' /></Link>
            </div>
        </section>
    )
}

export default AboutSectionOne;