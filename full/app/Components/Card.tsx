"use client";

import Draggable from "react-draggable";
import { FaGripfire, FaGripHorizontal, FaGripLinesVertical, FaTrash, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";


function Card(props: any){
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handleDelete = (e: any) => {
        e.preventDefault();
        const existingCards = [...props.cards];
        const updatedCards = existingCards.filter((card: any) => card.id !== props.id);
        localStorage.setItem("dynamoNotesCards", JSON.stringify(updatedCards));
        props.setCards(updatedCards);
    }


    return(
        <Draggable handle="#handle"> 
            <div 
                onMouseEnter={() => {
                    setShowDeleteButton(true);
                }}
                onMouseLeave={() => {
                    setShowDeleteButton(false);
                }}
                className={`absolute border-2 border-blue-400 bg-blue-200 rounded-[6px] h-auto px-8 min-h-[7vh] w-auto min-w-[155px] max-w-[700px] flex flex-col justify-center items-center resize overflow-hidden z-0 shadow-xl `} 
                style={{resize: 'both'}}
            >
                {showDeleteButton && 
                <FaTrashAlt 
                    id="delete" 
                    color="red" 
                    className=" cursor-pointer text-black font-serif absolute top-1 left-1 opacity-65" 
                    onClick={handleDelete}
                />}

                {showDeleteButton && 
                <FaGripHorizontal 
                    id="handle" 
                    className="hover:cursor-grab active:cursor-grabbing text-black font-serif absolute top-1 right-2 opacity-65" 
                />}

                <span className=" text-black font-serif font-bold">
                    {props.cardData}
                </span>

                {showDeleteButton && <span className="text-xs opacity-90 text-gray-500 absolute bottom-0 right-3">
                    {props.createdAt}
                </span>}
                
            </div>
        </Draggable>
    )
}

export default Card;