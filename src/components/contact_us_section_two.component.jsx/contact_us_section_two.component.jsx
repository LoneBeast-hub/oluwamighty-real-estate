// react icons
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Faq from "../faq/faq.component";

const ContactUsSectionTwo = () => {
    return(
        <section className="max-w-[1280px] my-[50px] lg:mt-[70px] w-[90%] mx-auto bg-white">
            {/* flex */}
            <div className="w-full flex gap-[20px] items-center lg:flex-row flex-col">
                {/* form */}
                <div className="w-full lg:w-[70%]">
                    {/* heading */}
                    <h1 className="text-[2rem] lg:text-[3rem] font-medium">Drop Us A Line</h1>
                    {/* sub heading */}
                    <p className="text-[1.6rem] mt-[5px] text-[#5c6368]">Feel free to connect with us through our online channels for updates, news, and more.</p>
                    <form action="#" className="mt-[10px] w-full">
                        {/* full name and email inputs */}
                        <div className="flex flex-col gap-[20px] w-full sm:flex-row">
                            {/* full name */}
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="fullName" className="font-medium text-[1.4rem]">Full Name:</label> <br/>
                                <input required type="text" name="fullName" placeholder="Your name" className="w-full py-[15px] mt-[10px] px-[18px] border border-[#ebe7e7] rounded-full text-[1.4rem]" />
                            </div>
                            {/* Email */}
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="email" className="font-medium text-[1.4rem]">Email:</label> <br/>
                                <input required type="email" name="email" placeholder="Email" className="w-full py-[15px] mt-[10px] px-[18px] border border-[#ebe7e7] rounded-full text-[1.4rem]" />
                            </div>
                        </div>
                        {/* Phone number and Subject */}
                        <div className="flex mt-[20px] flex-col gap-[20px] w-full sm:flex-row">
                            {/* Phone Number */}
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="phoneNumber" className="font-medium text-[1.4rem]">Phone Number:</label> <br/>
                                <input required type="number" name="phoneNumber" placeholder="ex 00123456789" className="w-full py-[15px] mt-[10px] px-[18px] border border-[#ebe7e7] rounded-full text-[1.4rem]" />
                            </div>
                            {/* Subject */}
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="subject" className="font-medium text-[1.4rem]">Subject:</label> <br/>
                                <input required type="text" name="subject" placeholder="Enter Keyword" className="w-full py-[15px] mt-[10px] px-[18px] border border-[#ebe7e7] rounded-full text-[1.4rem]" />
                            </div>
                        </div>
                        {/* Your Message */}
                        <div className="w-full mt-[10px]">
                            <label htmlFor="message" className="font-medium text-[1.4rem]">Your Message:</label>
                            <textarea draggable="false" name="message" id="message" placeholder="Message" className="resize-none min-h-[100px] w-full py-[15px] mt-[10px] px-[18px] border border-[#ebe7e7] rounded-[10px] text-[1.4rem]"></textarea>
                        </div>
                        {/* submit button */}
                        <button type="submit" className="bg-blue-700 w-full py-[11px] text-[1.6rem] rounded-full mt-[5px] font-medium transition-all hover:bg-blue-800 text-white px-[36px] ">
                            Send Message
                        </button>
                    </form>
                </div>
                {/* contact details */}
                <div className="w-full rounded-[15px] lg:w-[30%] border border-[#ebe7e7] py-[25px]">
                    {/* adjuster */}
                    <div className="w-[90%] mx-auto">
                        {/* heading */}
                        <h1 className="text-[2rem] lg:text-[3rem] font-medium">Contact Us</h1>
                        {/* body */}
                        <div className="flex mt-[20px] flex-col gap-[20px]">
                            {/* address */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.6rem] font-medium lg:text-[1.8rem]">Address:</h2>
                                {/* body */}
                                <p className="text-[1.4rem]">
                                2ND FLOOR, J.OLU BUILDING, 3, ITOKO ROAD AKE, BAASALA COMP ABEOKUTA, OGUN STATE, NIGERIA.
                                </p>
                            </div>
                            {/* information */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.6rem] font-medium lg:text-[1.8rem]">Information:</h2>
                                {/* body */}
                                <p className="text-[1.4rem]">
                                    +234 780 2918 492 <br/>
                                    info@oluwamighty.com
                                </p>
                            </div>
                            {/* Open Time */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.6rem] font-medium lg:text-[1.8rem]">Opentime:</h2>
                                {/* body */}
                                <p className="text-[1.4rem]">
                                    Monday - Friday: 08:00 - 20:00 <br/>
                                    Saturday - Sunday: 10:00 - 18:00
                                </p>
                            </div>
                            {/* Follow Us */}
                            <div className="flex flex-col gap-[10px]">
                                {/* title */}
                                <h2 className="text-[1.6rem] font-medium lg:text-[1.8rem]">Follow Us:</h2>
                                {/* body */}
                                <div className="flex gap-[10px]">
                                    {/* facebook */}
                                    <a href="#" className="p-[10px] border transition-all rounded-[7px] border-[#ebe7e7] hover:text-white hover:bg-blue-700 cursor-pointer">
                                        <FaFacebookF className="text-[1.6rem]" />
                                    </a>
                                    {/* Twitter */}
                                    <a href="#" className="p-[10px] border transition-all rounded-[7px] border-[#ebe7e7] hover:text-white hover:bg-blue-700 cursor-pointer">
                                        <FaTwitter className="text-[1.6rem]" />
                                    </a>
                                    {/* Instagram */}
                                    <a href="#" className="p-[10px] border transition-all rounded-[7px] border-[#ebe7e7] hover:text-white hover:bg-blue-700 cursor-pointer">
                                        <FaInstagram className="text-[1.6rem]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-container mt-[50px]" style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden" }}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="450"
                    loading="lazy"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=101+E+129th+St,+East+Chicago,+IN+46312+United+States"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}

export default ContactUsSectionTwo;