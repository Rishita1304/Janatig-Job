const Hero = () => {
    return (
        <div className="absolute top-[223px] left-[205px] w-[890px] h-[252px] text-45xl text-darkslategray">
        <div className="absolute top-[0px] left-[0px] w-[791px] h-[252px]">
          <b className="absolute top-[0px] left-[0px]">We’d love to help</b>
          <b className="absolute top-[88px] left-[250px]">Solve Your</b>
          <b className="absolute top-[176px] left-[110px]">
            {" "}
            Outreach Problems
          </b>
        </div>
        <div className="absolute top-[76px] left-[649px] text-base text-dimgray-300 text-justify flex items-center w-[241px]">{`We know that you care about your business as much as we do, and we're committed to helping you grow `}</div>
      </div>

    )
}

export default Hero;