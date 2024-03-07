"use client"
import React, { useEffect, useState } from 'react'
import { ChevronDown, LogOut, Settings, User, Users } from 'lucide-react';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Separator } from '@/components/ui/separator';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import { api } from '@/convex/_generated/api';


type TeamList = {
    teamName: string,
    createdBy: string,
    _id: string,
}


const SideNavTop = () => {
    // console.log(user);

    const menuOptions = [
        {
            id: 1,
            name: 'Create Team',
            path: '/team/create',
            icon: Users
        },
        {
            id: 2,
            name: 'Settings',
            path: '',
            icon: Settings
        }
    ];

    const convex = useConvex();
    const router = useRouter();
    const { user }: any = useKindeBrowserClient();

    const [teamList, setTeamList] = useState<TeamList[]>();

    const getTeamsList = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email });
        setTeamList(result);
        console.log("Teams result");
    }; /* We've already once done this call earlier, and a common approach is doing prop-drilling to reduce this api call but by the time the teamList is fetched, #this component is already mounted. Soo the list is not shown. *** BETTER APPROACH FOR FUTURE ***: use state management like ContextAPI, Redux-Tookit, Zustand, etc etc etc...   */

    console.log("team output from sidenav toppp", teamList);

    useEffect(() => {
        user && getTeamsList();
    }, [user])


    const onMenuOptionClick = (item: any) => {
        if (item?.path) {
            router.push(item.path)
        }
    }

    return (
        <div className=''>
            <Popover>
                <PopoverTrigger>
                    <div className='flex items-center gap-3 hover:bg-slate-200 p-3 rounded-lg cursor-pointer'>
                        <Image src={"https://ik.imagekit.io/rhj1mu8rk/logo.svg"} alt='logo' width={50} height={50} />
                        <h2 className='flex gap-2 items-center justify-center font-bold text-[17px]'>Team Name <ChevronDown /></h2>
                    </div>
                </PopoverTrigger>
                <PopoverContent className='ml-6 p-4 shadow-xl'>


                    {/* List of all teams */}
                    <div>
                        {teamList?.map((item, indx) => (
                            <h2 key={indx + 1}
                                className='cursor-pointer p-2 hover:bg-blue-500 hover:text-white transition-all rounded-md'
                            >
                                {item.teamName}
                            </h2>
                        ))}
                    </div>



                    <Separator className='mt-2 bg-slate-200' />

                    {/* Menu Options */}
                    <div>
                        {menuOptions.map((item, indx) => (
                            <h2 key={indx} onClick={() => onMenuOptionClick(item)} className='flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'>
                                <item.icon className='h-4 w-4' />
                                {item.name}
                            </h2>
                        ))}
                        <LogoutLink>
                            <h2 className='flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-sm'>
                                <LogOut className='h-4 w-4' />
                                Logout</h2>
                        </LogoutLink>
                    </div>

                    <Separator className='mt-2 bg-slate-200' />


                    {/* User information */}
                    {user &&
                        <div className='mt-2 flex gap-2 items-center'>
                            {user?.picture ?
                                <Image src={user?.picture} alt='user-pic' width={30} height={30} className='rounded-full' />
                                : <User className='bg-slate-300 p-1 rounded-full' width={30} height={30} />
                            }
                            <div>
                                <h2 className='text-[14px] font-bold'>{`${user?.given_name} ${user?.family_name}`}</h2>
                                <h2 className='text-[12px] text-gray-500'>{user?.email}</h2>
                            </div>

                        </div>
                    }

                </PopoverContent>
            </Popover>
        </div>
    )
}

export default SideNavTop