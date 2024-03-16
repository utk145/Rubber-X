import React from 'react'
import WorkSpaceHeader from '../_components/Header'
import Editor from '../_components/Editor'

const Workspace = () => {
  return (
    <div>
      <WorkSpaceHeader />

      {/* Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2'>

        {/* Document */}
        <div className='h-screen mt-3'>
          <Editor />
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