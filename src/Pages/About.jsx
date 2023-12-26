import { FaBook, FaCalendarTimes, FaCertificate, FaLocationArrow, FaSchool, } from "react-icons/fa";
import { SiCounterstrike } from "react-icons/si";



const About = () => {


    return (
        <>
            <div className="flex flex-col  items-center justify-center ">
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white'>About</h1>
                <div className=''>
                    <h1 className='lg:text-3xl text-xl font-bold border border-3 border-white p-3 rounded-full font-mono text-center mt-20 text-[#938000]'>Welcome To My About Section</h1>
                </div>

            </div>


            <div>
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white lg:my-10 mb-5'>Educa<span className="text-[#938000]">tion</span></h1>
            </div>

            <div className="text-white font-mono lg:flex lg:justify-center items-center lg:gap-40 px-[5%]">
                <div className="lg:text-xl text-sm space-y-5 mt-10">
                    <div className="flex items-center gap-3">
                        <FaCertificate></FaCertificate> Secondary School Certificate  ( SSC )
                    </div>

               
                    <p className="flex items-center gap-3"><FaSchool></FaSchool> Shah Helal High School</p>
                    <p className="flex items-center gap-3"><FaCalendarTimes></FaCalendarTimes>2018-2020</p>
                    <p className="flex items-center gap-3"><SiCounterstrike></SiCounterstrike> Grade : 3.90 out of 5.00</p>
                </div>

                <div className="lg:text-xl text-sm space-y-5 mt-10 ">
                    <hr className="lg:hidden"/>
                    <div className="flex items-center gap-3">
                    <FaCertificate></FaCertificate> Higher Secondary School Certificate(HSC)
                    </div>

                 
                    <p className="flex items-center gap-3"><FaSchool></FaSchool>Moulvibazar Government Collage</p>
                    <p className="flex items-center gap-3"><FaCalendarTimes></FaCalendarTimes>2020-2022</p>
                    <p className="flex items-center gap-3"><SiCounterstrike></SiCounterstrike> Grade : 3.67 out of 5.00</p>
                </div>

            </div>

            <div>
                <h1 className='text-2xl text-center font-mono font-semibold underline text-white my-10'>Loca<span className="text-[#938000]">tion</span></h1>

                <div className="lg:text-xl text-sm  text-white font-mono flex justify-center items-center gap-9 my-10">
                    <p className="flex items-center gap-3"><FaLocationArrow></FaLocationArrow>Portsmouth, United Kingdom</p>
                </div>
            </div>
        </>
    );
};

export default About;
