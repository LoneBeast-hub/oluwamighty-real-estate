// imgs
import { Link } from 'react-router-dom';
import BH from '../../assets/buy_home.png';
import SH from '../../assets/sell_home.png';
import RH from '../../assets/rent_home.png';
// react icons
import { FaArrowRight } from "react-icons/fa6";

const HomeSectionFour = () => {
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1280px] py-[70px] md:py-[120px] relative z-[1] w-[90%] mx-auto">
                {/* heading label */}
                <p className="text-[1.4rem] text-blue-700 text-center font-medium">OUR SERVICES</p>
                {/* heading */}
                <h1 className="text-[2.6rem] md:text-[3.6rem] font-bold text-center">What We Do?</h1>
                {/* grid */}
                <div className="grid mt-[50px] grid-cols-1 md:grid-cols-3 gap-[25px]">
                    {/* Buy a New Home */}
                    <div className="border group bg-transparent hover:bg-white hover:border-transparent transition-all hover:shadow-xl border-[#ebe7e7] gap-[20px] flex flex-col items-center px-[25px] py-[35px] rounded-[15px]">
                        {/* img */}
                        <img src={BH} alt="buy home" className='transition-transform duration-500 group-hover:scale-x-[-1]' />
                        {/* title */}
                        <h2 className='text-[1.8rem] md:text-[2.4rem] font-medium text-center'>Buy A New Home</h2>
                        {/* body */}
                        <p className='text-[1.4rem] text-[#656668] text-center'>
                            Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.
                        </p>
                        {/* link */}
                        <Link to='/listings' className='flex gap-[7px] px-[20px] py-[10px] md:px-[30px] font-medium hover:bg-blue-700 hover:text-white transition-all rounded-full md:py-[15px] border border-blue-700 items-center'><span className='text-[1.6rem]'>Learn More</span><FaArrowRight className='text-[1.6rem]' /></Link>
                    </div>
                    {/* Sell A Home */}
                    <div className="border group bg-transparent hover:bg-white hover:border-transparent transition-all hover:shadow-xl border-[#ebe7e7] gap-[20px] flex flex-col items-center px-[25px] py-[35px] rounded-[15px]">
                        {/* img */}
                        <img src={SH} alt="sell home" className='transition-transform duration-500 group-hover:scale-x-[-1]' />
                        {/* title */}
                        <h2 className='text-[1.8rem] md:text-[2.4rem] font-medium text-center'>Sell A Home</h2>
                        {/* body */}
                        <p className='text-[1.4rem] text-[#656668] text-center'>
                            Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.
                        </p>
                        {/* link */}
                        <Link to='/listings' className='flex gap-[7px] px-[20px] py-[10px] md:px-[30px] font-medium hover:bg-blue-700 hover:text-white transition-all rounded-full md:py-[15px] border border-blue-700 items-center'><span className='text-[1.6rem]'>Learn More</span><FaArrowRight className='text-[1.6rem]' /></Link>
                    </div>
                    {/* Rent A Home */}
                    <div className="border group bg-transparent hover:bg-white hover:border-transparent transition-all hover:shadow-xl border-[#ebe7e7] gap-[20px] flex flex-col items-center px-[25px] py-[35px] rounded-[15px]">
                        {/* img */}
                        <img src={RH} alt="sell home" className='transition-transform duration-500 group-hover:scale-x-[-1]' />
                        {/* title */}
                        <h2 className='text-[1.8rem] md:text-[2.4rem] font-medium text-center'>Rent A Home</h2>
                        {/* body */}
                        <p className='text-[1.4rem] text-[#656668] text-center'>
                            Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.
                        </p>
                        {/* link */}
                        <Link to='/listings' className='flex gap-[7px] px-[20px] py-[10px] md:px-[30px] font-medium hover:bg-blue-700 hover:text-white transition-all rounded-full md:py-[15px] border border-blue-700 items-center'><span className='text-[1.6rem]'>Learn More</span><FaArrowRight className='text-[1.6rem]' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFour;