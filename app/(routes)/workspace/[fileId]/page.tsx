"use client";
import React, { useEffect, useState } from 'react'
import WorkSpaceHeader from '../_components/Header'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FileType } from '../../dashboard/_components/FilesList';

const Workspace = ({ params }: any) => {

  const convex = useConvex();

  const [triggerSave, setTriggerSave] = useState(false);
  const [fileData, setFileData] = useState<FileType | any>();

  async function getUpdatedDocumentData() {
    const result = await convex.query(api.files.getDocumentInfoById, { _id: params.fileId });
    console.log(result);
    setFileData(result);
  }

  useEffect(() => {
    console.log("Dynamic File Id: ", params.fileId);
    params.fileId && getUpdatedDocumentData();
  }, []);

  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/* Document */}
        <div className='h-screen mt-3'>
          {/* Passing fileId as params to Editor because before opening the workspace only I want the updated document to be fetched */}
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>

        {/* Canvas or Whiteboard */}
        <div className='h-screen bg-red-300'>
          hey2
        </div>

      </div>

    </div>
  )
}

export default Workspace