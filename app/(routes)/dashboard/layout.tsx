"use client"
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SideNavbar from './_components/SideNavbar';
import { FileListContext } from '@/app/context/FilesListContext';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user }: any = useKindeBrowserClient();
    const convex = useConvex();
    const router = useRouter();

    const [fileList_, setFileList_] = useState();

    const checkTeam = async () => {
        const getTeam = await convex.query(api.teams.getTeam,
            { email: user?.email });

        // console.log("get team from layout:", getTeam);
        if (!getTeam?.length) {
            router.push('/team/create')
        }
    }

    useEffect(() => {
        checkTeam();
    }, [user])


    return (
        <div>
            <FileListContext.Provider value={{ fileList_, setFileList_ }}>
                <div className='grid grid-cols-4 '>
                    <div className='h-screen fixed w-72'>
                        <SideNavbar />
                    </div>
                    <div className='col-span-4 ml-72'>
                        {children}
                    </div>
                </div>
            </FileListContext.Provider>
        </div>
    )

}

/* Fix: the search icon doesn't display, so changing  grid-cols-3  to  col-span-4 fixes that issue. */