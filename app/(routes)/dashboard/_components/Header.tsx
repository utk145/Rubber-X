"use client";
import { Button } from '@/components/ui/button';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Search, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Header = () => {

    const { user }: any = useKindeBrowserClient();

    return (
        <div className='flex justify-end w-full items-center gap-2'>
            <div className='flex items-center gap-4 p-1 border rounded-lg'>
                <Search className='h-4 w-4' />
                <input type="text" placeholder='Search' className='border-none outline-none' />
            </div>
            <div>
                {user?.picture ?
                    <Image src={user?.picture} alt='user-pic' width={30} height={30} className='rounded-full' />
                    : <User className='bg-slate-300 p-1 rounded-full' width={33} height={33} />
                }
            </div>
            <Button className='gap-2 flex text-sm h-8 hover:bg-blue-700 bg-blue-600'><LogoutLink>Logout</LogoutLink></Button>
        </div>
    )
}

export default Header