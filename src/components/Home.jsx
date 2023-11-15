import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#4D5D53]'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#fabfbc]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#34D973]'>Katrin Tarneva</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#BF7C78]'>I am a Software Engineer.</h2>
                <p className='text-[#fabfbc] sm:text-xl py-4 max-w-[700px]'>I'am a Full Stack Software Engineer specializing in Game Development and XR
                    (occasinally i am also designing, 3D modeling and level building).
                    Currently my focus is XR Development (Virtual Reality and Augmented Reality)
                </p>
                <div>

                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5DAA7A] hover:border-[#5DAA7A]'>
                        <Link
                            to="work"
                            smooth={true}
                            offset={50}
                            duration={1000}
                        >
                            View Work
                        </Link>
                        <MdKeyboardDoubleArrowDown className='ml-3' />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Home