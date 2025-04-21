import { Button } from "@repo/ui/button";
import { InputText } from "@repo/ui/input-text";

export default function Home() {
    return(
        <div className="flex flex-col justify-between min-h-screen w-screen " >
        <h1 className="text-white">chat room</h1>

        <div className="w-screen" >
        <InputText type={"text"} placeholder="type a message" className="text-white border border-white" />
        <Button className="bg-white text-black font-bold px-4 py-2 cursor-pointer " text={'Send'} />
        </div>

        </div>

    )
}