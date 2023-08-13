
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[6324px] overflow-hidden text-left text-77xl text-black font-kamerik-105">
      <Navbar/>
      <Hero/>
      <Banner/>
    </div>
  );
};

export default LandingPage;
