import React from 'react'

function InquiryForm() {
  return (
    <div className='py-10 flex flex-col items-center justify-center bg-gray-200'>
        <h3 className='text-3xl font-bold text-center mb-10'>BOOK Your Investment Consultation <span className='uppercase text-[#00056c]'>Call Now!</span></h3>
        <form className='border-black border-2 rounded-xl flex flex-col max-w-3xl w-full shadow-sm px-12 py-10 gap-4'>
            <input type='text' className='border border-black border-1 rounded-xl w-full px-3 py-2 bg-white' placeholder='Name *' required />
            <input type='number' className='border border-black border-1 rounded-xl w-full px-3 py-2 bg-white' placeholder='Mobile Number *' required/>
            <input type='email' className='border border-black border-1 rounded-xl w-full px-3 py-2 bg-white' placeholder='Email Address *' required/>
            <input type='date' className='border border-black border-1 rounded-xl w-full px-3 py-2 bg-white uppercase' placeholder='Date'/>
            <select type='text' className='border border-black border-1 rounded-xl w-full px-3 py-2 bg-white uppercase' placeholder='Suitable Time Slot'>
                <option value={0}>10AM to 2PM</option>
                <option value={2}>2AM to 4PM</option>
                <option value={4}>4AM to 6PM</option>
            </select>
            <button className='btn btn-primary uppercase rounded-xl'>book now</button>
        </form>
    </div>
  )
}

export default InquiryForm