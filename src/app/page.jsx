"use client";
import { useSidebar } from "@/Components/Context";
import Navbar from "../Components/Navbar";
import { Poppins } from "next/font/google";
import HomeSection from "@/Components/HomeSection";
const poppins = Poppins({
    weight: ["100","200","300","400","500","600","700","800","900"],
});

const Home = () => {
    return (
        <>
            {/* Overlay Div */}
            <OverlayDiv />
            <div className={`${poppins.className} w-full min-h-screen bg-[#171717] p-1`}>
                <Navbar />
                <HomeSection />
            </div>
        </>
    );
};

export default Home;

const OverlayDiv = () => {
    const { isOpen } = useSidebar();
    return (
        <>
        {
            isOpen && <div className={`w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.35)]`} style={{zIndex: "1px"}}></div>
        }
        </>
    )
}