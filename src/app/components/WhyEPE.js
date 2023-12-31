    import Image from 'next/image'
    import React from 'react'

    function WhyEPE() {
    return (
        <div className='bg-black'>
            <div className='container mx-auto py-10 flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-center mb-10 uppercase text-white'>why e pe?</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-stretch w-full gap-5'>
                    <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                        <Image src={'https://epeindia.in/assets/designer/themes/default/images/why-ico1.png'} height={185} width={205} alt=''/>
                        <p className='text-xl'><span className='text-green-500 font-bold'>One Stop Solution</span> for all your Investment Needs</p>
                    </div>
                    <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                            <Image src={'https://epeindia.in/assets/designer/themes/default/images/why-ico2.png'} height={185} width={205} alt=''/>
                            <p className='text-xl'><span className='text-green-500 font-bold'>One Stop Solution</span> for all your Investment Needs</p>
                    </div>
                    <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                            <Image src={'https://epeindia.in/assets/designer/themes/default/images/why-ico3.png'} height={185} width={205} alt=''/>
                            <p className='text-xl'><span className='text-green-500 font-bold'>One Stop Solution</span> for all your Investment Needs</p>
                    </div>
                    <div className='bg-gray-200 flex items-center justify-center rounded-md'>
                        <Image src={'https://epeindia.in/assets/designer/themes/default/images/why-ico4.png'} height={185} width={205} alt=''/>
                        <p className='text-xl'><span className='text-green-500 font-bold'>One Stop Solution</span> for all your Investment Needs</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default WhyEPE