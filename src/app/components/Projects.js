import Image from 'next/image'
import React from 'react'

function Projects() {
    return (
        <div className='flex flex-col bg-black'>
            <div className='py-10'>
                <h1 className='text-center text-4xl font-bold text-white '>E Pe Real Estate Xclusive Projects</h1>
            </div>
            <div className='flex flex-col items-center pb-10 px-40 justify-center'>
                <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                    <Image src={'https://epeindia.in/assets/designer/themes/default/images/estate-ico1.jpg'} height={200} width={200} alt='' className='px-2'/>
                    <div className='text-lg px-10 text-gray-600 font-bold py-4'><p>RESIDENTIAL</p>RESIDENTIAL Investing in residential projects in India can be an attractive option given the country's growing ...<a className='font-bold text-green-600 hover:text-gray-600' href='/about-us'>Read More</a> </div>
                </div>
            </div>
            <div className='flex flex-col items-center pb-10 px-40 justify-center'>
                <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                    <Image src={'https://epeindia.in/assets/designer/themes/default/images/estate-ico2.jpg'} height={200} width={200} alt='' className='px-2'/>
                    <div className='text-lg px-10 text-gray-600 font-bold py-4'><p>COMMERCIAL</p> <p>COMMERCIAL Investing in commercial projects in India can be a lucrative opportunity given the growth in the country's com...</p><a className='font-bold text-green-600 hover:text-gray-600' href='/about-us'>Read More</a> </div>
                </div>
            </div>
            <div className='flex flex-col items-center pb-10 px-40 justify-center'>
                <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                    <Image src={'https://epeindia.in/assets/designer/themes/default/images/estate-ico3.jpg'} height={200} width={200} alt='' className='px-2'/>
                    <div className='text-lg px-10 text-gray-600 font-bold py-4'><p>AGRICULTURE</p><p>AGRICULTURE Investing in agriculture projects in India can be a rewarding endeavour, given the country's significant agricu...</p> <a className='font-bold text-green-600 hover:text-gray-600' href='/about-us'>Read More</a> </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
