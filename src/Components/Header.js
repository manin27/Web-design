import React from 'react';
import {AiFillCodepenSquare} from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";

class Header extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
      } 
    render() {
        return(<header className="Header" class="conteiner z-50 fixed w-full bg-black font-mono pr-0 md:pr-10 py-2 md:py-4 text-slate-100 opacity-90 ">
            <div class="flex justify-between">
                <div class="pl-2 sm:pl-6 md:pl-20 my-auto cursor-default flex justify-around">                    
                    <span class="rotate-45 text-sm sm:text-3xl"><AiFillCodepenSquare /></span> 
                    <b class="pl-2 text-xs sm:text-2xl">CreateSite</b>                     
                </div>                             
                <div class=" pr-2 sm:pr-10 space-x-2 md:space-x-6 pt-2 text-xs sm:text-base">
                    <Link to = "/" class="hover:text-sky-400 ">Главная страница</Link>
                   {/* <button type="submit" id="submit" className="hover:text-sky-400" onClick={() => this.setState({open: !this.state.open})}>Тема страницы</button>
                    <div className="pt-4 pl-28 sm:pl-32 ">
                        <ul className={this.state.open ? "box fixed space-y-2 cursor-default py-1 outline outline-offset-0 outline-slate-800 bg-slate-800 rounded-lg" : "hidden"}>
                            <li class="container cursor-pointer px-4 md:px-10 hover:text-teal-500 hover:bg-slate-700 " >
                                Светлая
                            </li>
                            <li class="container cursor-pointer px-4 md:px-10 hover:text-teal-500 hover:bg-slate-700 " >
                                Темная 
                            </li>                                          
                        </ul>
                    </div> */}
                </div>                             
            </div>                    
        </header>)
    }
}

export default Header;