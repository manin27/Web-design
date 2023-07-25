import React from 'react';
import { Outlet, Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return(<footer className='Footer' class="conteiner rounded outline outline-offset-0 outline-slate-700 bg-black text-slate-300 py-4 px-4 md:px-20 text-xs md:text-base ">
            <div class="sm:flex sm:justify-between space-y-5 sm:space-y-1 ">
                <div class="cursor-default ">
                    <p>Все права защищены</p>
                </div>
                <div class=" space-y-1">
                    <p class="text-center cursor-default">Социальные сети:</p>
                </div>
                <div class=" space-y-1 ">
                    <p class="text-center cursor-default">Дополнительные сведения:</p>
                    <p><Link to = "/politic" class="hover:text-slate-100">Политика конфиденциальности</Link></p>
                    <p><Link to = "/agreement" class="hover:text-slate-100">Пользовательское соглашение</Link></p>
                </div>
            </div>
            </footer>)
    }
}

export default Footer;