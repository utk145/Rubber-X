"use client"
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SideNavbar from './_components/SideNavbar';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user }: any = useKindeBrowserClient();
    const convex = useConvex();
    const router = useRouter();

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
            <div className='grid grid-cols-4 '>
                <div>
                    <SideNavbar />
                </div>
                <div className='grid-cols-3 '>
                    {children}
                </div>
            </div>
        </div>
    )

}
