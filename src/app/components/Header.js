import React from 'react'
import Image from 'next/image'
import { getMenuOptions } from '../lib/headerMenuOptions'
import Link from 'next/link'
import { getHeaderTop } from '../lib/headerTop'

function Header() {
  const menuOptions = getMenuOptions()
  const headerTop = getHeaderTop()
  return (
    <div className='py-4 px-4 bg-gray-200'>
      <div className='container mx-auto flex text-sm justify-between border border-b-white px-2 pb-2'>
        <p className=''>{headerTop.message}</p>
        <div className='flex flex-row gap-10'>
          <p >{headerTop.phone}</p>
          <p>{headerTop.email}</p>
        </div>
      </div>
      <div className='container flex flex-row pt-2 justify-between items-center mx-auto'>
        <div>
          <Image src="https://epeindia.in/assets/designer/themes/default/images/epe.png" width={155} height={50} alt="E Pe" loading="lazy" />
        </div>
        <div className='flex flex-row gap-2'>
          {menuOptions.map(option => (
            <Link className='capitalize font-gray-800 px-6 py-3 rounded-full hover:bg-black hover:text-white last:border-2 last:border-black' href={option.href}>{option.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
