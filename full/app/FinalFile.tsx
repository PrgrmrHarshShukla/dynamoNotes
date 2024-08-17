"use client";

import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./Components/mainPage";
import Popup from "./Components/Popup";

export default function FinalFile() {
    const [showPopup, setShowPopup] = useState<any>(false);
    return (
        <div className="w-[100%] h-auto min-h-screen bg-gray-700 relative flex flex-col justify-between items-center">
            {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
            <Header showPopup={showPopup} setShowPopup={setShowPopup} />
            <MainPage showPopup={showPopup} setShowPopup={setShowPopup} />
            <Footer />
        </div>
    )
}