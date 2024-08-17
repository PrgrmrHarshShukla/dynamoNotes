"use client";

import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

// import '@fortawesome/fontawesome-free/css/all.css'

function Header(props: any){
    const [cardsLen, setCardsLen] = useState(0);
    useEffect(() => {
        const cLen = JSON.parse(localStorage.getItem("dynamoNotesCards") || "[]").length;
        setCardsLen(cLen);
    }, [])
    
    return(
        <div className="w-[100%] z-40 h-[8vh] border-b-2 border-black flex flex-row justify-around items-center shadow-lg bg-gray-800">
            <span className="text-xl font-bold">
                Dynamo Notes {cardsLen > 0 ? `(${cardsLen})` : ""}
            </span>
            <div
                onClick={() => props.setShowPopup((p: any) => !p)}
                className="w-8 h-8 bg-green-300 flex justify-center items-center rounded-[6px] shadow-md"
            >
                {
                    props.showPopup ? 
                    <FaMinus color="black" /> 
                    : 
                    <FaPlus color="black" />
                }
            </div>
        </div>
    )
}

export default Header;