"use client"

import { useState } from "react";

export default function Popup(props: any){
    const [cardDetail, setCardDetail] = useState<any>("");

    const handleAddCard = () => {
        // console.log("Add card");
        // console.log(cardDetail);
        if(cardDetail === ""){
            alert("Please enter a task");
            return;
        }
        const existingCards = JSON.parse(localStorage.getItem("dynamoNotesCards") || "[]");
        const newCard = {
            id: existingCards.length + 1,
            cardData: cardDetail,
            done: false,
            createdAt: new Date().toLocaleString()
        }
        const newCards = [newCard, ...existingCards];
        localStorage.setItem("dynamoNotesCards", JSON.stringify(newCards));
        // window.location.reload();

        props.setShowPopup(false);
    }


    return (
        <div 
            className={`w-[100%] md:w-[500px] h-auto min-h-[30vh] bg-black absolute top-16 left-1/2 -translate-x-1/2 border-2 border-gray-500 rounded-[6px] shadow-xl  z-50 ${props.showPopup ? "" : "hidden"} flex flex-col justify-start items-center`}
        >
            <h1 className="text-2xl text-center font-bold text-gray-200 border-b-2 border-gray-500 w-[100%] py-2">Add Card</h1>

            <textarea 
                className="w-[90%] h-auto mt-6 border-2 border-gray-500 rounded-[6px] text-gray-200 bg-gray-700 text-left px-4 py-4 text-xl font-bold" 
                placeholder="Your task" 
                value={cardDetail}
                onChange={(e) => setCardDetail(e.target.value)}
            />

            <button
                className="w-[90%] h-10 mt-12 border-2 border-gray-500 rounded-[6px] text-gray-200 bg-gray-700 text-center text-xl font-bold my-8"
                onClick={handleAddCard}
            >
                Add
            </button>


        </div>
    )
}