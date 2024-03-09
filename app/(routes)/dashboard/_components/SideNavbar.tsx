"use client";
import React, { useState } from 'react'
import SideNavTop, { TeamList } from './SideNavTop';
import SideNavBottom from './SideNavBottom';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';

const SideNavbar = () => {

  const { user }: any = useKindeBrowserClient();
  const createNewFile = useMutation(api.files.createNewFile)

  const [activeTeam, setActiveTeam] = useState<TeamList | any>();
  // console.log('activeTeam value from SideNavBar ', activeTeam);

  const onClickFileCreate = (fileName: string) => {
    console.log(fileName);
    createNewFile({ fileName: fileName, teamId: activeTeam?._id, createdBy: user?.email })
      .then(resp => {
        if (resp) {
          toast("Your file has been created successfully 🎉🎉");
        } else {
          toast("Something went wrong while creating your file ❌❌");
        }
      })
      .catch((err) => { alert(err) })


  }

  return (
    <div className='h-screen fixed w-72 borde-r border-[1px] p-6 flex flex-col'>
      <div className='flex-1'>
        <SideNavTop setActiveTeamInfo={(activeTeam: TeamList) => setActiveTeam(activeTeam)} />
      </div>
      <div>
        <SideNavBottom onClickFileCreate={onClickFileCreate} />
      </div>
    </div>
  )
}

export default SideNavbar