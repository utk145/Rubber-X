"use client"
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

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

        if (!getTeam?.length) {
            router.push('/team/create')
        }
    }

    useEffect(() => {
        checkTeam();
    }, [user])


    return (
        <div>{children}</div>
    )

}
