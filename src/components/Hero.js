import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text]= useTypewriter({
    words: ['Outreach','Marketing'],
    loop: {},
    typeSpeed: 10,
    deleteSpeed: 50
  });
  return (
    <div className="absolute top-[200px] md:left-[205px] left-[10px] w-[500px] md:w-[890px] h-[252px] text-5xl md:text-45xl text-darkslategray">

      <div className="absolute top-[0px] left-[0px] md:w-[791px] w-[300px] h-[252px]">

        <b className="absolute top-[0px] font-kamerik-105 left-[0px]">We’d love to help</b>

        <b className="absolute top-[40px] md:top-[88px] left-[calc(50%_-_25%)] md:left-[250px]">Solve Your</b>

        <b className="absolute top-[80px] left-[calc(50%_-_35%)] md:top-[176px] md:left-[110px]"> <span> {text}</span> Problems</b>

      </div>

      <div className="absolute top-[20px]  md:top-[76px] md:left-[649px] left-[200px] md:text-base text-[12px] text-dimgray-300 text-justify flex items-center w-[180px] md:w-[241px]">
        {`We know that you care about your business as much as we do, and we're committed to helping you grow `}
        </div>
    </div>
  );
};

export default Hero;
