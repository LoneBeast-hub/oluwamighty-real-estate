// img
import SectionImg from '../../assets/home_section_five.jpg';
// react icons
import { MdContentPasteSearch } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa6";

const HomeSectionFive = () => {
    return(
        <section className="flex flex-col lg:flex-row max-w-[1280px] overflow-hidden rounded-[30px] w-[90%] mx-auto bg-[#F3F7FD]">
            {/* img */}
            <div className='w-full lg:w-1/2'>
                <img src={SectionImg} className='w-full h-full object-cover' alt="couch" />
            </div>
            <div className='w-full lg:w-1/2 py-[50px]'>
                <div className="w-[90%] lg:w-[85%] mx-auto">
                    {/* heading label */}
                    <p className="text-[1.4rem] text-blue-700 font-medium">OUR BENEFIT</p>
                    {/* heading */}
                    <h1 className="text-[2.6rem] lg:text-[3.6rem] font-bold">
                        Why Choose <br/>
                        Oluwamighty
                    </h1>
                    {/* subheading */}
                    <p className='text-[1.4rem]'>
                        Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
                    </p>
                    {/* flex */}
                    <div className='flex mt-[50px] flex-col gap-[20px]'>
                        {/* Proven Expertise */}
                        <div className="bg-white p-[25px] gap-[25px] flex hover:scale-[1.05] rounded-[15px] transition-all transform group">
                            {/* icon */}
                            <div>
                                <MdContentPasteSearch className="text-blue-700 text-[4rem] lg:text-[6rem] transition-transform duration-500 group-hover:scale-x-[-1]" />
                            </div>
                            {/* body */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.8rem] lg:text-[2.4rem] font-medium">Proven Expertise</h2>
                                {/* info */}
                                <p className="text-[1.4rem] text-[#656668]">
                                    Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
                                </p>
                            </div>
                        </div>
                        {/* Customized Solutions */}
                        <div className="bg-white p-[25px] gap-[25px] flex hover:scale-[1.05] rounded-[15px] transition-all transform group">
                            {/* icon */}
                            <div>
                                <GoGear className="text-blue-700 text-[4rem] lg:text-[6rem] transition-transform duration-500 group-hover:scale-x-[-1]" />
                            </div>
                            {/* body */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.8rem] lg:text-[2.4rem] font-medium">Customized Solutions</h2>
                                {/* info */}
                                <p className="text-[1.4rem] text-[#656668]">
                                    We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.
                                </p>
                            </div>
                        </div>
                        {/* Transparent Partnerships */}
                        <div className="bg-white p-[25px] gap-[25px] flex hover:scale-[1.05] rounded-[15px] transition-all transform group">
                            {/* icon */}
                            <div>
                                <FaRegHandshake className="text-blue-700 text-[4rem] lg:text-[6rem] transition-transform duration-500 group-hover:scale-x-[-1]" />
                            </div>
                            {/* body */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.8rem] lg:text-[2.4rem] font-medium">Transparent Partnerships</h2>
                                {/* info */}
                                <p className="text-[1.4rem] text-[#656668]">
                                    Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSectionFive;