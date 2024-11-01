import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/home.page";
import Header from "../header/header.component";
import PropertiesPage from "../../pages/properties/properties.page";
import Footer from "../footer/footer.component";
import ContactUsPage from "../../pages/contact_us/contact_us.page";
import AboutPage from "../../pages/about/about.page";

const PublicArea = () => {
    return(
        <div>
            {/* header */}
            <Header />
            {/* padding */}
            <div className="md:mb-[77.99px] mb-[74px]"></div>
            {/* Routes */}
            <Routes>
                <Route path='/' exact element={<HomePage/>} />
                <Route path='/properties' exact element={<PropertiesPage/>} />
                <Route path='/contact_us' exact element={<ContactUsPage/>} />
                <Route path='/about_us' exact element={<AboutPage/>} />
            </Routes>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default PublicArea;