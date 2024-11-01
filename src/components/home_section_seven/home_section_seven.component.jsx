// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// react icons
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
// img
import TON from '../../assets/testimonial_1.png'

const HomeSectionSeven = () => {
    return(
        <section className="w-full bg-[#F3F7FD]">
            {/* adjuster */}
            <div className="max-w-[1280px] py-[70px] md:py-[120px] relative z-[1] w-[90%] mx-auto">
                {/* heading label */}
                <p className="text-[1.4rem] text-blue-700 text-center font-medium">OUR TESTIMONIALS</p>
                {/* heading */}
                <h1 className="text-[2.6rem] md:text-[3.6rem] font-bold text-center">What People Say?</h1>
                {/* subheading */}
                <p className='text-[1.4rem] text-center md:max-w-[80%] lg:max-w-[60%] mx-auto'>Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.</p>
                {/* Testimonies */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { // md and above
                            slidesPerView: 2
                        }
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-[40px]"
                >
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white w-full py-[25px] rounded-[15px] px-[25px]'>
                            {/* icon */}
                            <BiSolidQuoteAltLeft className='text-[6rem] text-blue-700' />
                            {/* comment */}
                            <p className='text-[1.6rem] mt-[20px]'>"My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively."</p>
                            {/* flex */}
                            <div className="flex gap-[10px] mt-[20px]">
                                {/* img */}
                                <img src={TON} className='w-[60px] h-[60px]' alt='Courtney Henry' />
                                {/* info */}
                                <div className="flex flex-col">
                                    {/* name */}
                                    <p className='font-medium text-[1.6rem] '>Courtney Henry</p>
                                    {/* position */}
                                    <p className='text-[1.2rem] text-[#5c6368]'>CLIENT</p>
                                    {/* rating */}
                                    <div className="flex gap-[5px] text-orange-400">
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                        <FaStar className='text-[1.4rem]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default HomeSectionSeven;