import React from 'react'
import MenuList from '../header/menuList'

const Footer = () => {
  return (
      <div className=' w-[100%] h-[193]'>
          <div className=' flex flex-row items-center justify-between p-2 border-b-2 border-t-2'>
              <div className='md:w-[30%] h-[74px] flex flex-col justify-between'>
                  <div className='w-[110px] h-[30px] text-[24px]'>
                  <img src="/assets/Foodieland.svg" alt="logo" className='object-contain ' />
                 </div>
                  <p className='w-full text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
              </div>
             <MenuList/>
          </div>
      
    </div>
  )
}

export default Footer
