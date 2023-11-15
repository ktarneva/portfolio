import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#4D5D53] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='small:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#34D973]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='small:text-right text-3xl font-bold'>
                        <p>Hello, I'm Katrin Tarneva. It's a pleasure to meet you.
                            Feel free to look around my portfolio Website.
                            If you have any questions or need assistance, use the Contact form down below.</p>
                    </div>
                    <div>
                        <p className='text-xl'> I am currently a Software Engineering student at Fontys University,
                            where my passion lies in creating innovative and imaginative software solutions.
                            I pride myself on being a dependable, capable, and enthusiastic individual,
                            dedicated to both personal and professional growth. Proficient in working independently as well as collaboratively in group settings,
                            my specialization centers around the exciting realms of Game Development and Virtual Reality (VR).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About