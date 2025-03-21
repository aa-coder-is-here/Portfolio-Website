import { LoaderName } from "@/Data/Data";
import BGSvg from "@/UI Components/BgSvg";
import LoaderHole from "@/UI Components/HoleIs";

const HoleSection = () => {
    return (
        <div className="w-full h-[calc(100vh-0px)] flex justify-center items-end">
           {/* Block is here */}
           <div className="w-9/12 h-4/6 bg-[linear-gradient(0deg,#32323233,#64646433)] rounded-3xl relative flex px-5 py-20">
                
                {/* Hole is here */}
                <div className="absolute -top-12 left-[calc(50%-4rem)]">
                    {/* <Hole /> */}
                    <LoaderHole name = {LoaderName} />
                </div>

                {/* The Images section is here */}
                <div className="w-3/12 h-full flex">
                {/* Content is place here */}
                <div className="w-full h-full flex flex-col">
                    <span className="text-3xl font-[600]">My Skills</span>
                    <BGSvg />
                </div>
                </div>


                {/* The text section is here */}
                <div className="w-9/12 h-full bg-black"></div>
           </div>
        </div>
    )
}

export default HoleSection;