import "./Banner.css";
import { Link } from 'react-router-dom';
import { FaDownload, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import TypeIt from 'typeit';
import React, { useEffect } from "react";

const Banner = () => {
    // Add useEffect to initialize TypeIt after the component mounts
    useEffect(() => {
        const simpleUsageElement = document.getElementById("simpleUsage");

        if (simpleUsageElement) {
            new TypeIt(simpleUsageElement, {
                strings: "",
                speed: 50,
                waitUntilVisible: true,
            }).go();
        }
    }, []); 

    return (
        <>
            <div className='flex justify-between items-center lg:px-[15%] px-5 h-screen gap-6'>
                <div className='floating-text mt-5 lg:h-[300px] space-y-20'>
                    <p id="simpleUsage" className='text-white lg:text-5xl text-2xl font-mono'>
                        Hi, this is <span className='text-[#938000]'>JAKARIA</span>, Feel free to talk with me...
                    </p>
                    <div className="flex flex-col text-white justify-center items-center h-[100px] text-4xl mt-8 gap-5 space-y-14">
                        <div className="flex gap-10">
                            <Link to="https://www.facebook.com/mdjakaria.j.r.143" target="_blank">
                                <FaFacebook className="cursor-pointer" />
                            </Link>
                            <Link to="https://www.instagram.com/jakariaj.t23?igshid=MmVlMjlkMTBhMg==" target="_blank">
                                <FaInstagram className="cursor-pointer" />
                            </Link>
                            <Link to="https://api.whatsapp.com/qr/5CKAPAVDVJ67P1?autoload=1&app_absent=0" target="_blank">
                                <FaWhatsapp className="cursor-pointer" />
                            </Link>
                        </div>
                        <div>
                        <button className="btn btn-neutral btn-outline px-10 text-[#938000] font-mono font-semibold">Download CV <FaDownload></FaDownload></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
