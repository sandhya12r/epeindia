import Image from 'next/image'
import React from 'react'

function Savings() {
    return (
        <div className='py-10 flex flex-col items-center justify-center bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400'>
            <h3 className='text-4xl font-bold text-center mb-10 '>Savings, Investment & more...</h3>
            <div className='container mx-auto grid lg:grid-cols-4 justify-items-stretch w-full gap-5'>
                <div className='bg-gray-200 flex flex-col items-center justify-center rounded-md py-4'>
                    <Image src={'https://epeindia.in/uploaded_files/thumb_cache/thumb_160_160_savings-ico1.png'} height={160} width={160} alt='' />
                    <div className='flex flex-col gap-3 text-lg px-10 text-gray-700 pt-4'><p className='font-bold '>Recharge & Bill Payment</p>Welcome to E Pe, your one-stop solution for hassle-free Mobile Recharges and Bill Payments!...
                        <p><a className='font-bold text-green-600 hover:text-gray-700' href='/about-us'>Explore </a> </p></div>
                </div>
                <div className='bg-gray-200 flex flex-col items-center justify-center rounded-md py-4'>
                    <Image src={'https://epeindia.in/uploaded_files/thumb_cache/thumb_160_160_savings-ico2.png'} height={160} width={160} alt='' />
                    <div className='flex flex-col gap-3 text-lg px-10 text-gray-700 pt-4'><p className='font-bold '>Investment Consultation</p>Welcome to the new world !!! At E Pe, we are your trusted partners in navigating the
                        <p><a className='font-bold text-green-600 hover:text-gray-700' href='/about-us'>Explore </a> </p></div>
                </div>

                <div className='bg-gray-200 flex flex-col items-center justify-center rounded-md py-4'>
                    <Image src={'https://epeindia.in/uploaded_files/thumb_cache/thumb_160_160_savings-ico3.png'} height={160} width={160} alt='' />
                    <div className='flex flex-col gap-3 text-lg px-10 text-gray-700 pt-4'><p className='font-bold '>Loans</p>Welcome aboard !!! At E Pe, we understand that financial flexibility is key to turning dre...
                        <p> <a className='font-bold text-green-600 hover:text-gray-700' href='/about-us'>Explore </a></p> </div>
                </div>
                <div className='bg-gray-200 flex flex-col items-center justify-center rounded-md py-4'>
                    <Image src={'https://epeindia.in/uploaded_files/thumb_cache/thumb_160_160_savings-ico4.png'} height={160} width={160} alt='' />
                    <div className='flex flex-col gap-3 text-lg px-10 text-gray-700 pt-4'><p className='font-bold '>PiggyBank</p>​Welcome to Piggy Bank At PiggyBank, we're redefining the way you manage your
                        <p><a className='font-bold text-green-600 hover:text-gray-700' href='/about-us'>Explore </a></p> </div>
                </div>
            </div>
        </div>
    )
}

export default Savings
