"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function WorkSpaceHeader() {

    return (
        <div className="p-3 border-b-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Image src={"https://ik.imagekit.io/rhj1mu8rk/logo.svg"} alt="logo" width={50} height={50} />
                <h2>File Name</h2>
            </div>
            <Button className="h-10 gap-2 bg-blue-600 hover:bg-blue-800" onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast("Copied to clipboard")
            }}>
                Share <Link />
            </Button>
        </div>
    )
}
