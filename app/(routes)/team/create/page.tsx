"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

const CreateTeam = () => {


    const { user }: any = useKindeBrowserClient();

    return (
        <>
            {user &&
                <div className='px-6 md:px-16 my-16'>
                    <Image src={"https://ik.imagekit.io/rhj1mu8rk/logo.svg"} alt='Logo' width={200} height={200} />
                    <div className="flex flex-col items-center mt-8">
                        <h2 className='font-bold text-[40px] py-3'>What should we call your team?</h2>
                        <h2 className='text-gray-500'>You can always change this later from settings.</h2>
                        <div className='mt-7 w-[40%]'>
                            <label className='text-gray-500'>Team Name</label>
                            <Input placeholder={`${user?.given_name}'s Team`}
                                className='mt-3'
                                onChange={(e) => console.log("e")}
                            />
                        </div>
                        <Button className='bg-blue-500 mt-9 w-[30%] hover:bg-blue-600'
                        
                        >Create Team</Button>
                    </div>
                </div>
            }
        </>

    )
}

export default CreateTeam