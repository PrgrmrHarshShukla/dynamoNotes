"use client";

import Draggable from "react-draggable";


function Card(props: any){
    return(
        <Draggable handle="#handle"> 
            <div className={`absolute border-2 border-blue-400 bg-blue-200 rounded-[6px] h-auto px-4 min-h-[7vh] w-auto min-w-[100px] max-w-[700px] flex flex-col justify-center items-center resize overflow-hidden z-0 shadow-xl `} style={{resize: 'both'}}>
                <span id="handle" className="cursor-move text-black font-serif font-bold">
                    {props.cardData}
                </span>
                <span className="text-xs opacity-90 text-gray-500 absolute bottom-0 right-3">{props.createdAt}</span>
            </div>
        </Draggable>
    )
}

export default Card;