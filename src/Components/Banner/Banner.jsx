// Banner.js
import React, { useEffect, useState } from 'react';
import img from "../../../public/jakaria-removebg-preview.png";
import "./Banner.css";
import { Link } from 'react-router-dom';
import {  FaFacebook, FaInstagram,  FaWhatsapp } from "react-icons/fa";


const Banner = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const originalText = "Hi, this is <span class='text-[#938000]'>JAKARIA</span> I am the master chief of London. Feel free to talk with me...";
        let index = 0;

        const intervalId = setInterval(() => {
            setText(originalText.slice(0, index));
            index++;

            if (index > originalText.length) {
                clearInterval(intervalId);
            }
        }, 90);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className='lg:flex justify-between items-center px-[15%] h-screen gap-6'>

                <div className='flex-1 floating-text mt-5 '>
                    <div className='text-white lg:text-5xl text-xl font-mono  ' dangerouslySetInnerHTML={{ __html: text }} />

                    <div className="flex text-white  items-center text-4xl mt-8 gap-5">
                        <Link to="https://www.facebook.com/mdjakaria.j.r.143" target="blank"> <FaFacebook className="cursor-pointer" /></Link>
                        <Link to="https://www.instagram.com/jakariaj.t23?igshid=MmVlMjlkMTBhMg==" target="blank"> <FaInstagram className="cursor-pointer" /></Link>
                        <Link to="https://api.whatsapp.com/qr/5CKAPAVDVJ67P1?autoload=1&app_absent=0" target="blank"> <FaWhatsapp className="cursor-pointer" /></Link>
                    </div>

                </div>


                <div className=''>
                    <img className='w-[400px] h-fit flex-1' src={img} alt="" />
                </div>

            </div>
        </>
    );
};

export default Banner;
