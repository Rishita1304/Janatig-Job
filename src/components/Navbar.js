const Navbar = () => {
    return (
        <div className="absolute top-[20px] lg:top-[47px] md:top-[47px] lg:left-[calc(50%_-_330px)] md:left-[calc(50%_-_330px)] rounded-11xl bg-white w-[500px] lg:w-[680px] md:w-[680px] h-[80px] text-base text-white">
        <div className="absolute top-[calc(50%_-_27.42px)] left-[calc(50%_-_318.5px)] w-[450px] lg:w-[636px] md:w-[636px] flex flex-row items-center justify-between pr-5">
          <img
            className="cursor-pointer relative w-[57.13px] h-[55.83px] object-cover"
            alt=""
            src="/image-1removebgpreview-1@2x.png"
          />
          <nav className="m-0 flex flex-row items-start justify-start gap-[24px] text-left text-base text-black font-kamerik-105">
            <div className="relative cursor-pointer">how it works</div>
            <div className="relative cursor-pointer">Services</div>
            <div className="relative cursor-pointer">Contact</div>
          </nav>
          <div className="cursor-pointer rounded-3xs [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] flex flex-row p-4 items-center justify-center">
            <b className="relative">Get Started</b>
          </div>
        </div>
      </div>
    )
};


export default Navbar;
