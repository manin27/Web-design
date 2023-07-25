import React, {useState} from "react";
import emailjs from '@emailjs/browser';

const Message = () => {  
    var templateParams = {
        name: 'Nick',
        message: 'check!'
    }; 
    emailjs.send('service_slbvx71', 'template_5elge4j', templateParams, 'BFA-Kt9nuLHv-UFv8').then((response) => {
        console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
        console.log('FAILED...', err);
     });
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false);
    return(<div className="block space-y-4 pt-4 px-4 font-mono italic">
        <button class="px-5 pb-1 bg-slate-900 rounded-lg outline outline-offset-0 outline-blue-500 hover:bg-slate-700" onClick={() => setActive(!active)}>Задать вопрос</button>
        <div className={active ? "block transition-all duration-300 delay-150 ease-in-out origin-top cursor-default px-72" : "hidden"}>
            <form className="block space-y-2 py-4 px-10 outline outline-offset-0 outline-blue-500 bg-slate-900 rounded-lg text-slate-300">
                <label class="block">
                    <span class="text-2xl">ФИО</span>
                    <input type="text" name="user" required class="mt-1 px-3 text-black py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Александр Сергеевич Пушкин"/>
                    <span class="text-2xl">Почта</span> 
                    <input type="text" name="email" required class="mt-1 px-3 text-black py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.ru"/>    
                    <span class="text-2xl">Вопросы</span>    
                    <textarea type="text" name="Comment" required class="mt-1 px-3 text-black py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Хочу заказать лендинг для размещения рекламы магазина" />      
                </label>
                <button class=" px-5 pb-1 bg-slate-900 rounded-lg outline outline-offset-0 outline-blue-500 hover:bg-slate-700" onClick={emailjs.send}>Отправить</button>
            </form>
        </div>
    </div>
    );
}

export default Message;