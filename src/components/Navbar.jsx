import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4D5D53] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo Image' style={{ width: '250' }} />
            </div>

            {/*Menu*/}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li className='text-2xl'>
                        <Link
                            to="home"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link
                            to="about"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            About
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link
                            to="skills"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link
                            to="work"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            Work
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/*Hamburber menu*/}
            <div onClick={handleClick} className='md:hidden z-20'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/*Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#4D5D53] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}
                        to="home"
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Home
                    </Link></li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}
                        to="skills"
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}
                        to="work"
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick}
                        to="contact"
                        smooth={true}
                        offset={50}
                        duration={1000}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/*Social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#175c4d]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5DAA7A]'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div >
    )
}

export default Navbar