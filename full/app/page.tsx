"use client"

import Image from "next/image";
import MainPage from "./Components/mainPage";
import Header from "./Components/Header";
import { useState } from "react";
import Popup from "./Components/Popup";
import Footer from "./Components/Footer";

export default function Home() {
  const [showPopup, setShowPopup] = useState<any>(false);


  return (
      <div className="w-[100%] h-auto min-h-screen bg-gray-700 relative flex flex-col justify-between items-center">
        {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
        <Header setShowPopup={setShowPopup} />
        <MainPage />
        <Footer />
    </div>
  );
}
