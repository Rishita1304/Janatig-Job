import React from "react";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Outreach', 'Marketing'];

const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
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
        {`We know that you care about your business as much as we do, and we're committed to helping you grow `}
        </div>
    </div>
  );
};

export default Hero;
