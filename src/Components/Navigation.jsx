import React, { useState, useEffect } from 'react';
import {AiFillDatabase} from 'react-icons/ai'

const Navigation = () => {
     const [sideBar, setsideBar] = useState(false)
    const goToService = () => {
        if(window.screen.width >= 1440 && window.screen.height <= 1024)
        {
            window.scrollTo({
            top: 300,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 1024)
        {
            window.scrollTo({
            top: 300,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 1024 && window.screen.height >= 768)
        {
            window.scrollTo({
            top: 300,       
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 768 && window.screen.height < 768)
        {
            window.scrollTo({
            top: 550,       
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 480 && window.screen.height < 480)
        {
            window.scrollTo({
                top: 600,       
                behavior: 'smooth',
                });
        }
        else if(window.screen.width >= 480 && window.screen.height >= 768 && window.screen.width < 768)
        {
            window.scrollTo({
                top: 500,   
                behavior: 'smooth',
                });
        }
        else
        {
            window.scrollTo({
                top: 550,
                behavior: 'smooth',
                });
        }
    };
    const goToWork = () => {
        if (window.screen.width >= 1440)
        {
            window.scrollTo({
            top: 600,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 1024)
        {
            window.scrollTo({
            top: 600,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 768 && window.screen.height <= 768)
        {
            window.scrollTo({
            top: 550,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 480 && window.screen.height <= 480)
        {
            window.scrollTo({
                top: 1100,
                behavior: 'smooth',
                });
        }
        else if(window.screen.width >= 480 && window.screen.height >= 480)
        {
            window.scrollTo({
                top: 1250,
                behavior: 'smooth',
                });
        }
        else
        {
            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
                });
        }
    };
    const goToPlan = () => {
        if (window.screen.width >= 1440)
        {
            window.scrollTo({
            top: 1000,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 1024)
        {
            window.scrollTo({
            top: 1000,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 768 && window.screen.height <= 768)
        {
            window.scrollTo({
            top: 1100,
            behavior: 'smooth',
            });
        }
        else if(window.screen.width >= 480 && window.screen.height <= 480)
        {
            window.scrollTo({
                top: 1950,
                behavior: 'smooth',
                });
        }
        else if(window.screen.width >= 480 && window.screen.height >= 480)
        {
            window.scrollTo({
                top: 2150,
                behavior: 'smooth',
                });
        }
        else
        {
            window.scrollTo({
                top: 1800,
                behavior: 'smooth',
                });
        }
    };

        return(<div className='nav-scroller' class='space-y-4 font-mono text-slate-300'>
                    <button type="submit" id="submit" className="text-xl sm:text-3xl pl-4 sm:pl-10" onClick={() => setsideBar(!sideBar)}><AiFillDatabase /></button>         
                    <ul className={sideBar ? " h-max whitespace-nowrap pl-4 text-xs sm:text-base space-y-4 " : "hidden"}>
                        <li class="box cursor-pointer hover:text-teal-500  " onClick={goToService}>
                            Обо мне
                        </li>
                        <li class="box cursor-pointer hover:text-teal-500  " onClick={goToWork}>
                            Список услуг
                        </li>     
                        <li class="box cursor-pointer  hover:text-teal-500 " onClick={goToPlan}>    
                            Обратная связь
                        </li>                                      
                    </ul> 
                   
                </div>                     
        )
    }

export default Navigation;
  