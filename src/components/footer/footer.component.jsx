// react router
import { Link } from "react-router-dom";
// react icons
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
    return(
        <footer className="w-full bg-[#161E2D]">
            {/* super footer adjuster */}
            <div className="max-w-[1280px] py-[25px] md:py-[50px] relative z-[1] w-[90%] mx-auto">
                {/* flex */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[20px]">
                    {/* logo */}
                    <div className="text-white">
                        <Link to='/'>
                            <div className="flex flex-col">
                                <h1 className="text-[1.8rem] font-bold">OLUWAMIGHTY GLOBAL</h1>
                                <h1 className="text-[1.8rem] font-bold">BUSINESS LTD</h1>
                            </div>
                        </Link>
                    </div>
                    {/* social links */}
                    <div className="flex gap-[20px] items-center">
                        <p className="text-[1.4rem] text-white">Follow Us:</p>
                        <div className="flex gap-[10px]">
                            {/* twitter */}
                            <a href="#" className="bg-[#404651] hover:bg-blue-700 transition-all p-[10px] rounded-full">
                                <FaTwitter className="text-[1.4rem] text-white" />
                            </a>
                            {/* Facebook */}
                            <a href="#" className="bg-[#404651] hover:bg-blue-700 transition-all p-[10px] rounded-full">
                                <FaFacebookF className="text-[1.4rem] text-white" />
                            </a>
                            {/* Instagram */}
                            <a href="#" className="bg-[#404651] hover:bg-blue-700 transition-all p-[10px] rounded-full">
                                <FaInstagram className="text-[1.4rem] text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* line */}
            <div className="h-[1px] w-full bg-[#3b3b3b]"></div>
            {/* sub footer adjuster */}
            <div className="max-w-[1280px] py-[25px] md:py-[50px] relative z-[1] w-[90%] mx-auto">
                {/* contact us */}
                <div>
                    <p className="text-[1.4rem] text-white">Contact Us:</p>
                    {/* flex */}
                    <div className="flex flex-col gap-[10px] md:flex-row md:items-center justify-between">
                        {/* Location */}
                        <div className="flex items-center mt-[10px] gap-[7px]">
                            {/* icon */}
                            <ImLocation2 className="text-[1.4rem] text-[#A3ABB0]" />
                            {/* address */}
                            <p className="text-[1.6rem] text-white">2ND FLOOR, J.OLU BUILDING, 3, ITOKO ROAD AKE, BAASALA COMP ABEOKUTA, OGUN STATE, NIGERIA.</p>
                        </div>
                        {/* phone number */}
                        <div className="flex items-center gap-[7px]">
                            {/* icon */}
                            <FaPhoneAlt className="text-[1.4rem] text-[#A3ABB0]" />
                            {/* phone */}
                            <p className="text-[1.6rem] text-white">+234 780 2918 492</p>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-[7px]">
                            {/* icon */}
                            <FaEnvelope className="text-[1.4rem] text-[#A3ABB0]" />
                            {/* email */}
                            <p className="text-[1.6rem] text-white">info@oluwamighty.com</p>
                        </div>
                    </div>
                </div>
                {/* line */}
                <div className="h-[1px] my-[25px] md:my-[50px] w-full bg-[#3b3b3b]"></div>
                <p className="text-[1.8rem] text-center text-white">&copy; 2024 Olamighty Global Business LTD. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;