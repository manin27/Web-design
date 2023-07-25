import React, { useState, useEffect } from "react"
import { GoArrowUp } from 'react-icons/go';
import { GoArrowDown } from 'react-icons/go';

const ScrollToTop = () => {
    const [showTop, setShowTop] = useState(false);
    const [showBot, setShowBot] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 250) {
                setShowTop(true);
            }else {
                setShowTop(false);
            }
            if(window.scrollY > 2100) {
                setShowBot(false);
            }else {
                setShowBot(true);
            }
        });
    });
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const goToBot = () => {
        window.scrollTo({
            top: 3000,
            behavior: 'smooth',
        });
    };  
    return (
        <div className="relative">
           <GoArrowUp className={showTop ? "hover:w-10 hover:h-10 hover:bottom-18 hover:right-4 hover:text-slate-300 animate-bounce fixed bottom-20 right-5 z-20 bg-blue-900 border-solid border-slate-300 border-2 w-8 h-8 rounded-full text-black cursor-pointer shadow-lg shadow-slate-300" : "hidden"} onClick={goToTop}/>
           <GoArrowDown className={showBot ? "hover:w-10 hover:h-10 hover:bottom-4 hover:right-4 hover:text-slate-300 animate-bounce fixed bottom-5 right-5 z-22 bg-blue-900 border-solid border-slate-300 border-2 w-8 h-8 rounded-full text-black cursor-pointer shadow-lg shadow-slate-300" : "hidden"} onClick={goToBot}/>  
        </div>
    )
}

export default ScrollToTop