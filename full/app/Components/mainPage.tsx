"use client";

import { useState, useEffect } from "react";
import Card from "./Card";



function MainPage(props: any){
    const [cards, setCards] = useState<any>([]);
    
    useEffect(() => {
        const allCards = JSON.parse(localStorage.getItem("dynamoNotesCards") || "[]");
        setCards(allCards);
    }, [props.showPopup]);



    return(
        <div className="relative overflow-x-hidden overflow-y-auto min-w-[100%] min-h-[92vh] h-auto py-4 pb-80">
        

            <div className="w-[100%] h-auto flex flex-col justify-start items-center gap-2">
                {cards.map((card: any, index: any) => (
                    <div key={index} className="border-b-2 border-[#d5edeb18] border-dotted w-full min-h-[100px] flex flex-row justify-center items-center resize-y"
                    style={{ resize: 'vertical', overflow: 'auto' }}
                    >
                        <span className=" text-white opacity-15 text-2xl font-bold ml-20">
                            {card.id}
                        </span>
                        <Card cardData={card.cardData} id={card.id} createdAt={card.createdAt} done={card.done} cards={cards} setCards={setCards} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage;