"use client";
import Image from "next/image";
import code from "../../public/assets/images/code.png"
import { CodeText } from "@/Data/Data";
import SocailButton from "@/UI Components/Social";
const CodeBlock = () => {
    return (
        <div className="w-full h-[60vh] md:h-[50vh] flex justify-center items-center">
            <div className="lg:w-9/12 w-11/12 h-full bg-[linear-gradient(0deg,#32323233,#64646433)] backdrop-blur-sm flex md:flex-row flex-col justify-center items-center md:p-3 p-1 rounded-3xl">
              
              {/* Code Block */}
              <div className="w-full h-full relative">
                  <Image src={code} fill alt = "Code Block" style = {{objectFit: "cover"}} />
               
              </div>

              {/* Title Section */}
              <div className="w-full h-full flex flex-col gap-6 px-2 py-3">
                
                {/* Title */}
                <span className="text-[#9fa5a5] text-center md:text-start">{CodeText.head}</span>

                {/* Sub Heading */}
                <div className="w-full grid grid-cols-3">
                  {
                    CodeText.SubHeadings.map((curElem,index)=>{
                        return (
                            <div key={index} className="w-full flex flex-col justify-center items-center gap-1">
                               <span className="text-4xl font-[600] text-center">{curElem.SubHead}</span>
                               <span className = "text-sm text-center">{curElem.Text}</span>
                            </div>
                        )
                    })
                  }
                </div>

                {/* Socail Icons */}
                <div className="flex justify-center md:justify-start">
                    <SocailButton />
                  </div>
              </div>
            </div>
        </div>
    )
}

export default CodeBlock;