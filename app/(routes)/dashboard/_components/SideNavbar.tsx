"use client";
import React, { useContext, useEffect, useState } from 'react'
import SideNavTop, { TeamList } from './SideNavTop';
import SideNavBottom from './SideNavBottom';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { toast } from 'sonner';
import { FileListContext } from '@/app/context/FilesListContext';

const SideNavbar = () => {

  const { user }: any = useKindeBrowserClient();
  const createNewFile = useMutation(api.files.createNewFile)
  const convex = useConvex();


  const [activeTeam, setActiveTeam] = useState<TeamList | any>();
  const [totalFilesCount, setTotalFilesCount] = useState<Number>(0);
  const { fileList_, setFileList_ } = useContext(FileListContext);

  // console.log('activeTeam value from SideNavBar ', activeTeam);
  // console.log("total files count: ", totalFilesCount);

  const onClickFileCreate = async (fileName: string) => {
    console.log(fileName);
    await createNewFile({ fileName: fileName, teamId: activeTeam?._id, createdBy: user?.email, archive: false, document: '', whiteboard: '' })
      .then(resp => {
        if (resp) {
          // window.location.reload(); // this could be an approach if we dont call the method below 
          getTotalFilesCount();
          toast("Your file has been created successfully 🎉🎉");
        } else {
          toast("Something went wrong while creating your file ❌❌");
        }
      })
      .catch((err) => { alert(err) })
  };

  async function getTotalFilesCount() {
    const result = await convex.query(api.files.getTotalFilesCount, { teamId: activeTeam?._id });
    console.log("total files", result);
    setFileList_(result);
    setTotalFilesCount(result?.length);
  }



  useEffect(() => {
    getTotalFilesCount();
  }, [activeTeam])



  return (
    <div className='h-screen fixed w-72 borde-r border-[1px] p-6 flex flex-col'>
      <div className='flex-1'>
        <SideNavTop setActiveTeamInfo={(activeTeam: TeamList) => setActiveTeam(activeTeam)} />
      </div>
      <div>
        <SideNavBottom onClickFileCreate={onClickFileCreate} totalFilesCount={totalFilesCount} />
      </div>
    </div>
  )
}

export default SideNavbar