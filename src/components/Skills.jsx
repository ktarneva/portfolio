import React from 'react'
import Docker from '../assets/docker.png'
import Kubernetes from '../assets/kubernetes.png'
import Mongo from '../assets/mongo.png'
import Unity from '../assets/unity.png'
import Language from '../assets/c.png'
import Blender from '../assets/blender.png'
import Reactt from '../assets/react.png'
import Git from '../assets/Git.png'


function Skills() {
    return (
        <div name='skills' className='bg-[#4D5D53] text-gray-300 text-xl'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#34D973]'>Experience</p>
                    <p className='py-4'>//These are some of the technologies i've worked with for the past few years.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gapr-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Unity} alt="Unity icon" />
                        <p className='my-4 text-xl'>Unity and Unity VR</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Language} alt="C# icon" />
                        <p className='my-4 text-xl'>C#</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                        <p className='my-4 text-xl'>Docker</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
                        <p className='my-4 text-xl'>Kubernetes</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Reactt} alt="React icon" />
                        <p className='my-4text-xl'>React + Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt="Tailwind icon" />
                        <p className='my-4 text-xl'>Git</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Blender} alt="Blender icon" />
                        <p className='my-4 text-xl'>Blender</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                        <p className='my-4 text-xl'>Mongo</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills