import HomeSectionFive from "../../components/home_section_five/home_section_five.component";
import HomeSectionFour from "../../components/home_section_four/home_section_four.component";
import HomeSectionOne from "../../components/home_section_one/home_section_one.component";
import HomeSectionSeven from "../../components/home_section_seven/home_section_seven.component";
import HomeSectionSix from "../../components/home_section_six/home_section_six.component";
import HomeSectionTwo from "../../components/home_section_two/home_section_two.component";

const HomePage = () => {
    return(
        <div>
            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSectionFour />
            <HomeSectionFive />
            <HomeSectionSix />
            <HomeSectionSeven />
        </div>
    )
}

export default HomePage;