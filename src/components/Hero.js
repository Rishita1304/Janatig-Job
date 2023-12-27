import React, { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ["Outreach",<div>O<img
className="absolute top-[4px] md:top-[20px] mr-7 left-[23px] md:left-[50px] w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
src="/vector-2.svg"
/><span className="ml-7 md:ml-10">tr</span><span className="text-[#e18264]">e</span><span>ac</span><img
className="absolute top-[3px] md:top-[15px] mr-7 left-[100px] md:left-[225px] rotate-90 w-[20px] md:w-[45px] h-[20px] md:h-[45px]"
src="/vector-3.svg"
/><span className="mr-4 md:mr-6 font-thin text-[#EFEFED]">.</span></div>,"Marketing"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, 
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="absolute top-[200px] md:left-[205px] left-[10px] w-[500px] md:w-[890px] h-[252px] text-5xl md:text-45xl text-darkslategray">

      <div className="absolute top-[0px] left-[0px] md:w-[791px] w-[300px] h-[252px]">
        <b className="absolute top-[0px] font-kamerik-105 left-[0px]">We’d love to help</b>
        <b className="absolute top-[40px] md:top-[88px] left-[calc(50%_-_25%)] md:left-[250px]">Solve Your</b>
        <b className="absolute top-[80px] left-[calc(50%_-_35%)] md:top-[176px] md:left-[100px] flex gap-x-2 md:gap-x-4">  <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>Problems</b>
      </div>

      <div className="absolute top-[20px]  md:top-[76px] md:left-[649px] left-[200px] md:text-base text-[12px] text-dimgray-300 text-justify flex items-center w-[180px] md:w-[241px]">
        {`We know that you care business as much as we do, to helping you grow `}
        </div>
    </div>
  );
};

export default Hero;
