import React from 'react'

function Contact() {
    return (
        <div name='contact' className='2-full h-screen bg-[#4D5D53] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/f4861b7e-8aaf-400b-8f08-dfb653053037" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#34D973] text-gray-300'>Contact me</p>
                    <p className='text-gray-300 py-4 sm:text-xl'>//Submit the form below if you are interested or if you have any questions!</p>
                </div>
                <input className='bg-[#E4EFE7] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#E4EFE7] ' type="email" placeholder='Email' name="email" />
                <textarea className='bg-[#E4EFE7] p-2' placeholder='Hi, i would love to know more about you!' name="message" rows="10"></textarea>
                <button className='text-white border-2 sm:text-xl hover:bg-[#5DAA7A] hover:border-[#5DAA7A] px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div >
    )
}

export default Contact