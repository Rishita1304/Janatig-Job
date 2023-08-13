const Navbar = () => {
    return (
        <div className="absolute top-[47px] left-[calc(50%_-_343px)] rounded-11xl bg-white w-[685px] h-[84px] overflow-hidden text-base text-white">
        <div className="absolute top-[calc(50%_-_27.42px)] left-[calc(50%_-_318.5px)] w-[636px] flex flex-row items-center justify-between">
          <img
            className="relative w-[57.13px] h-[55.83px] object-cover"
            alt=""
            src="/image-1removebgpreview-1@2x.png"
          />
          <nav className="m-0 flex flex-row items-start justify-start gap-[24px] text-left text-base text-black font-kamerik-105">
            <div className="relative">how it works</div>
            <div className="relative">Services</div>
            <div className="relative">Contact</div>
          </nav>
          <div className="rounded-3xs [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] flex flex-row p-4 items-center justify-center">
            <b className="relative">Get Started</b>
          </div>
        </div>
      </div>
    )
};


export default Navbar;
