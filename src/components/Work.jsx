import React from 'react'
import WorkPixel from '../assets/workPixel.png'
import HelixJump from '../assets/HelixJump.PNG'
import VrGame from '../assets/ARM.PNG'
import MicroService from '../assets/Microservice.PNG'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#4D5D53]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#34D973]'>
                        Work
                    </p>
                    <p className='py-6 text-xl'>//Check out some of my games and WebApps!</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*Grid Idem*/}
                    {/*Vr Game ARM */}
                    <div style={{ backgroundImage: `url(${MicroService})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-white tracking-wider'>
                                Microsercive app
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Play it!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Vr Game ARM */}
                    <div style={{ backgroundImage: `url(${VrGame})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-white tracking-wider'>
                                First Vr Game/ARM
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Play it!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*2DPixelArt Heracles */}
                    <div
                        style={{ backgroundImage: `url(${WorkPixel})` }}

                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-white tracking-wider'>
                                Pixel Art Game/Heracles
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Play it!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Helix Jump*/}
                    <div style={{ backgroundImage: `url(${HelixJump})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/*Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold  text-white tracking-wider'>
                                Helix Jump Copy
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work