'use client'

import { Button } from "@repo/ui/button";
import { InputText } from "@repo/ui/input-text";
import { useRouter } from "next/navigation";

export default function CreateRoom() {

    const router = useRouter();

    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-white text-2xl font-bold text-center pb-5">Join room to chat</h1>

                <div className="flex flex-col gap-4">
                    <InputText className=" w-80 px-3 py-2 text-white border border-zinc-400 rounded-lg" placeholder="Enter Code" type="text" onChange={() => {
                        
                    }} />
                    <Button className="border border-white font-bold font-lg rounded-lg px-3 py-2 cursor-pointer bg-white hover:bg-white/90 " text="Create room" onClick={() => {
                        router.push('/chat/24234')
                    }} />
                    <Button className="border border-white font-bold font-lg rounded-lg px-3 py-2 cursor-pointer bg-white hover:bg-white/90 " text="Join room" />
                </div>
            </div>
        </div>
    )
}