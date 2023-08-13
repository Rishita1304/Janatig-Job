const Brands = () => {
    return (
        <div className="absolute top-[1030px] md:top-[1247px] w-[300px] md:w-[1150px] left-[30px] md:left-[calc(50%_-_550px)] flex flex-row items-center md:items-start justify-start gap-[20px] md:gap-[40px] text-[20px] md:text-5xl text-silver">
        <b className="relative">
          <p className="m-0">Brands we’ve</p>
          <p className="m-0">supported</p>
        </b>
        <div className="flex flex-row items-center justify-start gap-[30px] md:gap-[85px]">
          <img
            className="relative w-[90px] h-[20px] md:w-[130px] md:h-[28px] object-cover"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className="relative w-[90px] h-[20px] md:w-[130px] md:h-[40px] object-cover"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className="relative w-[80px] h-[20px] md:w-[120px] md:h-[40px] object-cover"
            alt=""
            src="/image-5@2x.png"
          />
          <img
            className="relative w-[100px] h-[30px] md:w-[150px] md:h-[30px] object-cover"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </div>
    )
}

export default Brands;