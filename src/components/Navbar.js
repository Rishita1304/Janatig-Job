const Navbar = () => {
    return (
        <div className="absolute flex top-[47px] left-[calc(50%_-_250px)] md:left-[calc(50%_-_330px)] rounded-11xl bg-white w-[500px] md:w-[680px] justify-center h-[80px] text-base text-white">

        <div className="absolute top-[calc(50%_-_27.42px)] left-[calc(50%_-_200px)] md:left-[calc(50%_-_318.5px)] w-[400px] md:w-[636px] flex flex-row items-center justify-between">
          <img
            className="cursor-pointer relative md:w-[57.13px] w-[50px] h-[55.83px] object-cover"
            alt=""
            src="/image-1removebgpreview-1@2x.png"
          />
          <nav className="m-0 flex flex-row items-start justify-start gap-[10px] md:gap-[24px] text-left text-base text-black font-kamerik-105">
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
