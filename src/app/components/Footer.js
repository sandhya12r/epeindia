import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='bg-gray-200 py-4'>
            <div className='container flex flex-row justify-between mx-auto py-10'>
                <div className='max-w-sm'>
                    <Image src="https://epeindia.in/assets/designer/themes/default/images/epe.png" width={155} height={50} alt="E Pe" loading="lazy" />

                    <h2 className='text-[#00056c] font-bold uppercase py-4 '>about e pe</h2>
                    <p className='text-justify'>
                        Welcome to E Pe   E Pe is a fintech platform providing Investment Consultation and Recharge & Bill Payment services through our Mobile application based on Android and IOS. At E Pe, we believe in the power of collective investment to transform the real estate landscape. Our platform brings together investors and opportunities, creating a seamless bridge between dreams and reality. Empowering individuals to connect, collaborate, and contribute to each other's success. We belie....<a className='font-bold text-green-600 hover:text-gray-600' href='/about-us'>Read More</a>
                    </p>
                </div>
                <div className='pb-3'>
                    <h2 className='text-[#00056c] font-bold uppercase pb-5'>our products</h2>
                    <p className='uppercase hover:text-blue-600 cursor-pointer pb-3'>bbps</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>Consultation</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>real estate investment</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>real estate</p>
                </div>
                <div>
                    <h2 className='text-[#00056c] font-bold uppercase pb-5' >quick links</h2>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>home</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>about us</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>career</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>contact us</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>sitemap</p>
                </div>
                <div>
                    <h2 className='text-[#00056c] font-bold uppercase pb-5'>legal</h2>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>terms & conditions</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>privacy policy</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>security policy</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>legal disclaimer</p>
                    <p className='capitalize hover:text-blue-600 cursor-pointer pb-3'>grievance redressal policy</p>
                    </div>
            </div>
            <div className='container flex flex-row justify-between mx-auto pt-5 border border-t-white'>
                <div>Copyright © 2023, E Pe
                    All rights reserved.</div>
                <div>
                    Developed and Managed by
                </div>
            </div>
        </div >
    )
}

export default Footer
