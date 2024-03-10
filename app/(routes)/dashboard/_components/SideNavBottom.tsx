import { Button } from '@/components/ui/button'
import { Archive, Flag, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'


const SideNavBottom = ({ onClickFileCreate, totalFilesCount }: any) => {

  // Utils
  const menuOptions = [
    {
      id: 1,
      name: 'Getting Started',
      icon: Flag,
      path: '/'
    },
    {
      id: 2,
      name: 'Github',
      icon: Github,
      path: 'https://github.com/utk145'
    },
    {
      id: 3,
      name: 'Archive',
      icon: Archive,
      path: ''
    }
  ]

  //  Lib Functions
  const router = useRouter();


  // States
  const [fileInput, setFileInput] = useState('');


  const onMenuOptionClick = (item: any) => {
    if (item?.path) {
      router.push(item.path)
    }
  }

  return (
    <div>

      {menuOptions?.map((item, indx) => (
        <h2 key={indx + 1}
          className='flex gap-2 p-1 px-2 text-[14px] hover:bg-gray-100 rounded-md cursor-pointer'
          onClick={() => onMenuOptionClick(item)}
        >
          <item.icon className='h-5 w-5' />
          {item?.name}
        </h2>
      ))}

      <Dialog>
        <DialogTrigger className='w-full' asChild>
          {/* asChild flag to avoid hydration error  */}
          <Button variant={"default"} className='w-full bg-blue-600 hover:bg-blue-700 mt-3 '>Add new file</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input
                placeholder='Enter File Name'
                className='mt-3'
                onChange={(e) => setFileInput(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <div className=' flex items-center gap-4'>
                <Button type="button"
                  className='bg-blue-600 hover:bg-blue-700'
                  disabled={!(fileInput && fileInput.length >= 3)}
                  onClick={() => onClickFileCreate(fileInput)}
                >
                  Create
                </Button>
                {(fileInput.length > 0 && fileInput?.length < 3) ? <span className='text-red-500'>File name length should be higher</span> : null}
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Progress value={(totalFilesCount / 5) * 100} className='h-4 w-full bg-gray-200 rounded-full mt-5 ' />

      <h2 className='text-[12px] mt-3'>
        <strong>{totalFilesCount}</strong> out of <strong>5</strong> files used</h2>
      <h2 className='text-[12px] mt-1'>Upgrade your plan for unlimited access.</h2>


    </div>
  )
}

export default SideNavBottom