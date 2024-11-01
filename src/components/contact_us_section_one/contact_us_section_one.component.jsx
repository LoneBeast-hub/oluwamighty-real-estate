// css
import './contact_us_section_one.style.css';

const ContactUsSectionOne = () => {
    return(
        <section className="w-[90%] max-w-[1280px] overflow-hidden py-[25px] md:py-[40px] flex items-center relative mt-[104.99px] mb-[30px] md:mt-[107.99px] mx-auto max-h-[260px] h-[230px] rounded-[15px] md:h-[260px] contact_us_section_one_bg bg-cover bg-no-repeat bg-center">
            {/* bg-overlay */}
            <div className="bg-[#00000059] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="relative mx-auto z-[1] w-fit h-fit">
                {/* Title */}
                <h1 className='text-[3rem] md:text-[5.6rem] text-white text-center font-medium'>Contact Us</h1>
            </div>
        </section>
    )
}

export default ContactUsSectionOne;