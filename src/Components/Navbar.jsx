"use client";
import { HeaderButton, Logo, NavLinks } from "@/Data/Data";
import HireButton from "@/UI Components/HireButton";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useSidebar } from "./Context";

const Navbar = () => {
    const {isOpen , setOpen} = useSidebar();
    return (
        <div className="w-full h-20 fixed top-0 left-0 flex justify-center md:mt-6">
        <div className="w-11/12 h-full md:rounded-full bg-[linear-gradient(0deg,#32323233,#64646433)] backdrop-blur-sm flex justify-between items-center md:px-8"> 
        {/* Logo is here*/}
        <div className="w-1/3 space-x-1 font-[900] md:text-4xl text-2xl">
            {
                Logo.map((curElem,index)=>{
                    return <span key={index}>{curElem}</span>
                })
            }
        </div>

        {/* Nav Links are here for desktop */}
        <div className="w-1/3 hidden md:flex justify-center gap-6">
            {
                NavLinks.map((title,index)=>{
                    return <Link href="/" key={index} className="text-2xl font-[600]">{title}</Link>
                })
            }
        </div>

        {/* Hire button is here */}
        <div className="w-1/3 flex justify-end items-center gap-3">
            <HireButton text = {HeaderButton[0]} text2 = {HeaderButton[1]} />

            {/* Mobile Menu is */}
            <div className="white md:hidden text-3xl rotate-180 cursor-pointer">
               <CgMenuLeftAlt onClick={()=>{
                 setOpen(!isOpen);
               }} />
            </div>
        </div>

        </div>
        
        <div className={`w-3/4 md:hidden h-screen absolute top-0 left-0 z-10 bg-[#171717] px-5 py-6 ${isOpen ? "block" : "hidden"}`}>
           
           <span className="text-3xl w-full flex justify-end"><RxCross1 onClick={()=>{
            setOpen(!isOpen);
           }} /></span>

           <div className="mt-10 flex flex-col gap-3 text-2xl">
            {
                NavLinks.map((curElem , index)=>{
                    return (
                        <Link href = "/" key={index}>
                          {curElem}
                        </Link>
                    )
                })
            }
           </div>
        </div>

        </div>
    )
}

export default Navbar;