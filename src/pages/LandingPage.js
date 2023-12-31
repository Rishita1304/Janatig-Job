
import Apply from "../components/Apply";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Choose from "../components/Choose";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Works from "../components/Works";

const LandingPage = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[5304px] overflow-hidden text-left text-77xl text-black font-kamerik-105">
      <Navbar/>
      <Hero/>
      <Banner/>
      <Brands/>
      <Works/>
      <Apply/>
      <Choose/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
