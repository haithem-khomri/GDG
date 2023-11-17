import "../../App.css"
import Cards from "../Cards";
import Footer from "../Footer";
import Why from "../WhyIa"
import HomeSection from "../homesection"

function Home(){
    return(
        <>
            <HomeSection/>
            <Cards/>
            <Why/>
            <Footer/>
        </>
    )
}
export default Home;