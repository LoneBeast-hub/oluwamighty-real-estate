// context
import { MyContext } from "../../App";
import { useContext } from "react";
import ListingCard from "../listing_card/listing_card.component";

const HomeSectionTwo = () => {
    const {contextState} = useContext(MyContext);
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1280px] py-[70px] md:py-[120px] relative z-[1] w-[90%] mx-auto">
                {/* heading label */}
                <p className="text-[1.4rem] text-blue-700 text-center font-medium">FEATURED PROPERTIES</p>
                {/* heading */}
                <h1 className="text-[2.6rem] md:text-[3.6rem] font-bold text-center">Recommended For You</h1>
                {/* Listings */}
                <div className="grid mt-[30px] gap-[20px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {
                        contextState.listingsData.map(({id, status, featured, address, name, beds, baths, toilets, price, displayImg, images, description}, index) => {
                            return(
                                <ListingCard
                                    key={index} 
                                    id={id}
                                    status={status}
                                    featured={featured}
                                    address={address}
                                    name={name}
                                    beds={beds}
                                    baths={baths}
                                    toilets={toilets}
                                    price={price}
                                    displayImg={displayImg}
                                    images={images}
                                    description={description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeSectionTwo;