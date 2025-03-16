"use client";
import Mine from "../../public/assets/images/Mine.png";
import { MainHeading } from "@/Data/Data";
import BreathCircle from "@/UI Components/BreathMain";
import Image from "next/image";

const HomeSection = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">

        <div className="w-full h-full flex items-center">
        
            {/* The first section is here */}
            <div className="w-full h-full flex flex-col mt-88 items-end">
            
            <div className="flex flex-col gap-0 leading-[113px]">
                {
                    MainHeading.map((curElem,index)=>{
                        return <span key={index} className="text-[96px] font-[500]">
                            {curElem}
                        </span>
                    })
                }
                </div>
            </div>

            {/* The Second pic section is here  */}
            <div className="w-full h-full relative flex items-end">
            
             {/* Overlay Div */}
            <div className="absolute right-10 top-12">
            <BreathCircle />
               </div>
              <div className="relative z-2">
                <Image className="grayscale" src={Mine} width={900} height = {900} alt="Mine Profile Pic" />
              </div>
            </div>
        </div>
        </div>
    )
}

export default HomeSection;