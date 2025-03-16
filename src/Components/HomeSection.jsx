"use client";
import Mine from "../../public/assets/images/Mine.png";
import { MainHeading } from "@/Data/Data";
import BreathCircle from "@/UI Components/BreathMain";
import Image from "next/image";

const HomeSection = () => {
    return (
        <div className="w-full h-[calc(100vh-70px)] lg:h-screen relative overflow-hidden">

          {/* Overlay Div */}
          <div className="absolute right-0 lg:right-10 top-1 lg:top-12">
            <BreathCircle />
            </div>

        <div className="w-full h-full flex flex-col lg:flex-row items-center relative z-2">
        
            {/* The first section is here */}
            <div className="w-full h-full flex flex-col lg:mt-88 justify-center lg:justify-start items-center">
            
            <div className="flex flex-col gap-0 lg:leading-[99px]">
                {
                    MainHeading.map((curElem,index)=>{
                        return <span key={index} className="text-4xl lg:text-[80px] font-[500]">
                            {curElem}
                        </span>
                    })
                }
                </div>
            </div>

            {/* The Second pic section is here  */}
            <div className="w-full h-full relative flex items-end">
            
              <div className="w-full h-full relative z-2 ms-0 md:-ms-4">
                <Image className="grayscale" src={Mine} fill style={{ objectFit: "cover" }} alt="Mine Profile Pic" />
              </div>
            </div>
        </div>
        </div>
    )
}

export default HomeSection;