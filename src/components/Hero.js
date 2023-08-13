const Hero = () => {
  return (
    <div className="absolute top-[200px] md:left-[205px] left-[20px] w-[500px] md:w-[890px] h-[252px] text-5xl md:text-45xl text-darkslategray">
      <div className="absolute top-[0px] left-[0px] md:w-[791px] w-[300px] h-[252px]">
        <b className="absolute top-[0px] left-[0px]">We’d love to help</b>
        <b className="absolute top-[40px] md:top-[88px] left-[calc(50%_-_25%)] md:left-[250px]">Solve Your</b>
        <b className="absolute top-[80px] left-[calc(50%_-_35%)] md:top-[176px] md:left-[110px]"> Outreach Problems</b>
      </div>
      <div className="absolute top-[20px]  md:top-[76px] md:left-[649px] left-[220px] md:text-base text-[15px] text-dimgray-300 text-justify flex items-center w-[241px]">{`We know that you care about your business as much as we do, and we're committed to helping you grow `}</div>
    </div>
  );
};

export default Hero;
