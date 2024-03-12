import { FileListContext } from '@/app/context/FilesListContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Archive, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import moment from "moment";

type FileType = {
    archive: boolean,
    createdBy: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: string,
    _creationTime: number
};

export default function FilesList() {


    const router = useRouter();
    const { user }: any = useKindeBrowserClient();

    const { fileList_, setFileList_ } = useContext(FileListContext);
    const [fileList, setFileList] = useState<any>()

    useEffect(() => {
        fileList_ && setFileList(fileList_)
    }, [fileList_])

    console.log("fileList: ", fileList);


    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {fileList && fileList?.map((file: FileType, index: number) => (
                            <tr key={index} className="odd:bg-gray-50 cursor-pointer"
                                onClick={() => router.push('/workspace/' + file._id)}
                            >
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {file.fileName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {moment(file._creationTime).format('DD MMM YYYY')} </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {moment(file._creationTime).format('DD MMM YYYY')}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {user && <span>{user?.email}</span>}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">

                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreHorizontal />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem className='gap-3'>
                                                <Archive className='h-4 w-4' /> Archive</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}