"use client";
import React, { useState } from 'react'
import WorkSpaceHeader from '../_components/Header'
import Editor from '../_components/Editor'

const Workspace = () => {
  const [triggerSave, setTriggerSave] = useState(false);

  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/* Document */}
        <div className='h-screen mt-3'>
          <Editor onSaveTrigger={triggerSave} />
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