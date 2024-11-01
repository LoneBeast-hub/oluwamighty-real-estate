// css
import './home_section_one.style.css';
// hooks
import { useState, useEffect } from 'react';

const HomeSectionOne = () => {
    const [text, setText] = useState("Perfect Home");

    useEffect(() => {
        const interval = setInterval(() => {
          setText((prevText) => (prevText === "Perfect Home" ? "Dream Home" : "Perfect Home"));
        }, 3000); // Change every 3 seconds
    
        return () => clearInterval(interval);
    }, []);

    return(
        <section className="w-full flex items-center relative min-h-[100vh] max-h-[880px] home_section_one_bg bg-cover bg-fixed bg-no-repeat bg-center">
            {/* bg-overlay */}
            <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1280px] relative z-[1] w-[90%] mx-auto py-[25px] md:py-[40px]">
                {/* Title */}
                <h1 className="text-[4rem] md:text-[7rem] text-center text-white font-bold">
                    Find Your{" "}
                    <span
                        className="text-[4rem] md:text-[7rem] font-bold transition-transform duration-500 ease-in-out transform translate-y-full animate-slide"
                        key={text} // Add a key to reset the animation when text changes
                    >
                        {text}
                    </span>
                    </h1>
                {/* sub title */}
                <h3 className='text-[2rem] text-center text-white w-full mx-auto md:max-w-[80%] lg:max-w-[60%]'>
                    We are a real estate agency that will help you find the best residence you dream of, let’s discuss for your dream house?
                </h3>
                {/* button */}
                <div className='w-fit mt-[30px] mx-auto'>
                    {/* <CustomButton colorWhite>BUY NOW</CustomButton> */}
                </div>
            </div>
        </section>
    )
}

export default HomeSectionOne;