"use client";
import React from 'react'
import SideNavTop from './SideNavTop';
import SideNavBottom from './SideNavBottom';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const SideNavbar = () => {
  
  return (
    <div className='h-screen fixed w-72 borde-r border-[1px] p-6 flex flex-col'>
      <div className='flex-1'>
        <SideNavTop />
      </div>
      <div>
        <SideNavBottom />
      </div>
    </div>
  )
}

export default SideNavbar