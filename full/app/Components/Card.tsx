"use client";

import Draggable from "react-draggable";


function Card(props: any){
    return(
        <Draggable handle="#handle"> 
            <div className={` absolute top-${4*(props.hgt)} mb-4 border-2 border-blue-400 bg-blue-200 rounded-[6px] h-auto min-h-[5vh] w-auto max-w-[400px] flex flex-col justify-center items-center resize overflow-hidden z-0 `} style={{resize: 'both'}}>
                <span id="handle" className="cursor-move">
                    {props.text}
                </span>
            </div>
        </Draggable>
    )
}

export default Card;