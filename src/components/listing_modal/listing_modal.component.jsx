// react icons
import { LiaTimesSolid } from "react-icons/lia";
import { IoBed } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
// context
import { MyContext } from "../../App";
import { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const ListingModal = () => {
    const {contextState, setContextState} = useContext(MyContext);
    const {
        id,
        status,
        featured,
        address,
        name,
        beds,
        baths,
        toilets,
        price,
        displayImg,
        images,
        description
    } = contextState.listingDataToShow;
    return(
        <div className="w-[100%] min-h-[100vh] py-[2.5rem] flex items-start justify-center bg-[rgba(0,0,0,0.6)] fixed z-[999] top-0 left-0 overflow-y-auto">
            <div className="w-[90%] relative max-h-[90vh] overflow-y-scroll md:w-[85%] md:max-w-[993px] box-border pt-[25px] md:pt-[50px] pb-[30px] md:pb-[40px] px-[7%] md:px-[4%] rounded-[5px] bg-white">
                {/* content */}
                <div className="w-[90%] mx-auto py-[20px]">
                    {/* Name */}
                    <h1 className="text-[2.6rem] font-semibold">{name}</h1>
                    {/* images slide */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mx-auto mt-[20px]"
                    >
                        {
                            images.map((image, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="h-max w-fit mx-auto">
                                            <img src={image} alt="" className='w-full h-full object-cover' />
                                        </div>
                                    </SwiperSlide>    
                                )
                            })
                        }
                    </Swiper>
                    {/* price and features */}
                    <div className="flex items-center justify-between flex-col gap-[20px] mt-[20px] md:flex-row">
                        {/* Price */}
                        <h1 className="text-[2.6rem] font-semibold">₦{price}</h1>
                        {/* features */}
                        <div className="flex mt-[10px] gap-[20px]">
                            {/* beds */}
                            <div className="flex gap-[3px] items-center text-[#5c6368]"><IoBed className="text-[1.6rem]" /><p className="text-[1.4rem]">Beds: <span className="text-[1.4rem] font-semibold">{beds}</span></p></div>
                            {/* baths */}
                            <div className="flex gap-[3px] items-center text-[#5c6368]"><BiSolidBath className="text-[1.6rem]" /><p className="text-[1.4rem]">Baths: <span className="text-[1.4rem] font-semibold">{baths}</span></p></div>
                        </div>
                    </div>
                    {/* property address and PID */}
                    <div className="flex border-y border-[#ebe7e7] py-[20px] items-center justify-between flex-col gap-[20px] mt-[20px] md:flex-row">
                        {/* property address */}
                        <div className="flex flex-col">
                            {/* title */}
                            <h1 className="text-[1.8rem] font-medium mb-[10px]">Property Address</h1>
                            {/* Mobile PID */}
                            <p className="text-[1.4rem] font-semibold md:hidden">PID: {id}</p>
                            {/* address */}
                            <div className="flex items-center gap-[5px]">
                                <IoLocationOutline className="text-[1.4rem]" />
                                <p className="text-[1.4rem] overflow-hidden whitespace-nowrap text-ellipsis">{address}</p>
                            </div>
                        </div>
                        {/* Desktop PID */}
                        <p className="text-[1.4rem] font-semibold">PID: {id}</p>
                    </div>
                    {/* Description heading */}
                    <h1 className="text-[2.4rem] mt-[20px] mb-[10px] font-bold">Description</h1>
                    {/* Description info */}
                    <p className="text-[1.6rem]" dangerouslySetInnerHTML={{__html: description}}></p>
                </div>
                {/* cancel */}
                <span className="absolute top-[1rem] right-[1rem] text-black text-[2.4rem] md:text-[2.8rem] cursor-pointer" onClick={() => setContextState((prevValues) => ({ ...prevValues, showLisitingModal: false, listingDataToShow: null }))}>
                    <LiaTimesSolid className="text-[2.5rem]" />
                </span>
            </div>
        </div>
    )
}

export default ListingModal;