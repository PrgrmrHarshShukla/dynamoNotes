"use client";

import { FaPlus } from "react-icons/fa";

// import '@fortawesome/fontawesome-free/css/all.css'

function Header(props: any){
    return(
        <div className="w-[100%] z-40 h-[8vh] border-b-2 border-black flex flex-row justify-around items-center">
            <span className="text-xl font-bold">
                Dynamo Notes (4)
            </span>
            <div
                onClick={() => props.setShowPopup((p: any) => !p)}
                className="w-8 h-8 bg-green-300 flex justify-center items-center rounded-[6px]"
            >
                <FaPlus color="black" />
            </div>
        </div>
    )
}

export default Header;