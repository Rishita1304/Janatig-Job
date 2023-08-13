const Footer = () => {
  return (
    <>
      <div className="absolute top-[4824px] left-[0px] bg-darkslategray w-[1440px] h-[442px] overflow-hidden text-13xl text-white">
        <b className="absolute top-[52px] left-[-300px] md:left-[46px] text-21xl">
          <p className="m-0">Let’s Work</p>
          <p className="m-0">Together</p>
        </b>
        <div className="absolute top-[300px] left-[-300px] md:left-[46px] rounded-[12.66px] [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] flex flex-row p-[20.2591495513916px] items-center justify-center text-[20.26px]">
          <b className="relative">Get Started</b>
        </div>
        <div className="absolute top-[3.5px] left-[640px] box-border w-px h-[439px] border-r-[1px] border-solid border-dimgray-200" />
        <div className="absolute top-[52px] left-[25px] md:left-[728px] flex flex-col items-start justify-start gap-[20px]">
          <b className="relative">Menu</b>
          <div className="flex flex-col items-start justify-start gap-[18px] text-[20.26px] text-silver">
            <b className="relative">How it Works</b>
            <b className="relative">Services</b>
            <b className="relative">Contact</b>
          </div>
        </div>
        <img
          className="absolute top-[270px] left-[20px] md:left-[713px] w-[119px] h-[116.3px] object-cover"
          alt=""
          src="/image-1removebgpreview-2@2x.png"
        />
        <b className="absolute top-[329px] left-[130px] md:left-[822px]">X.com</b>
      </div>
      <div className="absolute top-[5246px] left-[calc(50%_-_220px)] md:left-[0px] bg-gray w-[450px] md:w-[1440px] h-[58px] overflow-hidden text-xl text-dimgray-100">
        <b className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_170px)]">
          Made with 🧡 by x.com
        </b>
      </div>
    </>
  );
};

export default Footer;
