"use client";

import Card from "./Card";

const cards = [
    {
        id: 1,
        text: "bicoewmcmew"
    },
    {
        id: 2,
        text: "bicoewmcmew"
    },
    {
        id: 3,
        text: "bicoewmcmew"
    },
    {
        id: 4,
        text: "bicoewmcmew"
    },
    {
        id: 5,
        text: "bicoewmcmew"
    }
]

function MainPage(){
    return(
        <div className="relative overflow-x-hidden overflow-y-auto min-w-[100%] min-h-[92vh] h-auto py-4">
            <div className="w-[100%] h-auto flex flex-col justify-start items-center gap-2 relative">
                {cards.map((card) => (
                    <Card key={card.id} text={card.text} hgt={card.id}  />
                ))}
            </div>
        </div>
    )
}

export default MainPage;