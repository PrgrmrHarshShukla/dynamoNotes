import Draggable from "react-draggable";


function Card(props: any){
    return(
        <Draggable cancel=""> 
            <div className="border-2 border-blue-400 bg-blue-200 rounded-[6px] h-auto min-h-[15vh] w-auto max-w-[200px] flex flex-col justify-center items-center">
                <span>
                    {props.text}
                </span>
            </div>
        </Draggable>
    )
}

export default Card;