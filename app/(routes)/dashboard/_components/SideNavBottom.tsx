import { Button } from '@/components/ui/button'
import { Archive, Flag, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Progress } from "@/components/ui/progress"

const SideNavBottom = () => {

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

      <Button variant={"default"} className='w-full bg-blue-600 hover:bg-blue-700 mt-3 '>Add new file</Button>

      <Progress value={(3/5)*100} className='h-4 w-full bg-gray-200 rounded-full mt-5 ' />

      <h2 className='text-[12px] mt-3'>
        <strong>3</strong> out of <strong>5</strong> files used</h2>
      <h2 className='text-[12px] mt-1'>Upgrade your plan for unlimited access.</h2>


    </div>
  )
}

export default SideNavBottom