// react icons
import { IoBed } from "react-icons/io5";
import { BiSolidBath } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
// context
import { MyContext } from "../../App";
import { useContext } from "react";

const ListingCard = ({id, status, featured, address, name, beds, baths, toilets, price, displayImg, images, description}) => {
    const {setContextState} = useContext(MyContext);
    return(
        <div onClick={() => {
            // show listing modal
            setContextState((prevValues) => ({
                ...prevValues,
                showLisitingModal: true,
                listingDataToShow: {
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
                }
            }))
        }} className="flex flex-col cursor-pointer group relative border border-[#ebe7e7] overflow-hidden rounded-[20px] pb-[20px]">
            {/* img */}
            <div className="w-full max-h-[270px] overflow-hidden relative">
                <img src={displayImg} alt={name} className='group-hover:scale-[1.1] duration-500 transition-all w-full h-full object-cover' />
                <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
                {/* address */}
                <div className="flex absolute max-w-[95%] bottom-[10px] left-[2.5%] z-[1] items-center gap-[5px] text-white">
                    <IoLocationOutline className="text-[1.4rem]" />
                    <p className="text-[1.4rem] overflow-hidden whitespace-nowrap text-ellipsis">{address}</p>
                </div>
                {/* labels */}
                <div className="flex gap-[10px] absolute top-[10px] left-[2.5%] items-center">
                    {
                        featured? 
                            <div className="bg-blue-700 rounded-full py-[5px] px-[12px]">
                                <p className="font-semibold text-white text-[1.2rem]">Featured</p>
                            </div> 
                        :
                            ''
                    }
                    {
                        status.forSale?
                            <div className="bg-[#0000004d] rounded-full py-[5px] px-[12px]">
                                <p className="font-semibold text-white text-[1.2rem]">For Sale</p>
                            </div> 
                        :
                            <div className="bg-[#0000004d] rounded-full py-[5px] px-[12px]">
                                <p className="font-semibold text-white text-[1.2rem]">For Rent</p>
                            </div>
                    }
                </div>
            </div>
            {/* body */}
            <div className="w-[95%] mx-auto mt-[25px]">
                {/* name */}
                <h1 className="font-medium hover:text-blue-700 transition-all duration-300 text-[1.6rem] md:text-[1.8rem] overflow-hidden whitespace-nowrap text-ellipsis">{name}</h1>
                {/* features */}
                <div className="flex mt-[10px] gap-[20px]">
                    {/* beds */}
                    <div className="flex gap-[3px] items-center text-[#5c6368]"><IoBed className="text-[1.6rem]" /><p className="text-[1.4rem]">Beds: <span className="text-[1.4rem] font-semibold">{beds}</span></p></div>
                    {/* baths */}
                    <div className="flex gap-[3px] items-center text-[#5c6368]"><BiSolidBath className="text-[1.6rem]" /><p className="text-[1.4rem]">Baths: <span className="text-[1.4rem] font-semibold">{baths}</span></p></div>
                </div>
                {/* price */}
                <div className="w-full flex gap-[20px] justify-between items-center border-t border-[#ebe7e7] mt-[20px] pt-[20px]">
                    <p className="text-[1.4rem] font-medium">Price:</p>
                    <p className="text-[1.6rem] md:text-[1.8rem] font-semibold">₦{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ListingCard;