"use client"

export default function Popup(props: any){


    return (
        <div 
            className={`w-[100%] md:w-[500px] h-auto min-h-[60%] bg-gray-700 absolute top-16 left-1/2 -translate-x-1/2 border-2 border-gray-500 rounded-[6px] shadow-xl  z-50 ${props.showPopup ? "" : "hidden"} flex flex-col justify-start items-center`}
        >
            <h1 className="text-2xl text-center font-bold text-gray-200 border-b-2 border-gray-500 w-[100%]">Add Card</h1>
        </div>
    )
}