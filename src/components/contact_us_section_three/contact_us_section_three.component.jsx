import Faq from "../faq/faq.component";

const ContactUsSectionThree = () => {
    return(
        <section className="w-full bg-white">
            {/* adjuster */}
            <div className="max-w-[1280px] py-[70px] md:py-[120px] relative z-[1] w-[90%] mx-auto">
                {/* heading label */}
                <p className="text-[1.4rem] text-blue-700 text-center font-medium">FAQS</p>
                {/* heading */}
                <h1 className="text-[2.6rem] md:text-[3.6rem] font-bold text-center">Frequently Asked Questions</h1>
                <div className="mt-[50px]">
                    <Faq />
                </div>
            </div>
        </section>
    )
}

export default ContactUsSectionThree;