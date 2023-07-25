import React from "react"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ScrollToTop from "../Components/ScrollToTop";
import Message from "../Components/Message";
import webdesign from "../img/web-design.jpg";
import TestList from "../containers/test-list";
import Details from "../containers/details";

class Main extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            MessageActive: false
        }
    }
        
    render() {
        return(<div className="">
                <Header />
                <div className="body" class="bg-gradient-to-b pt-20 from-black via-blue-900 to-black">
                        <div class="conteiner sm:flex md:justify-around px-2 md:px-10 py-5 space-x-6 md:space-x-20 xl:space-x-60 pr-2 md:pr-5 md:pr-20">
                            <Navigation />
                            <div class="space-y-10">
                                <div class="container lg:flex lg:justify-around lg:space-x-10">
                                    <div class="w-full lg:w-1/2 lg:h-1/2 py-5 px-4 md:px-10">
                                       <img src={webdesign} /> 
                                    </div>                                     
                                    <div class="container lg:w-1/2 lg:h-1/2 space-y-1 cursor-default font-mono italic py-5 mx-auto md:px-10 text-slate-300">
                                        <h1 class=" text-xl sm:text-2xl md:text-4xl text-center">Манин Кирилл</h1>                                        
                                        <h1 class=" pt-8 text-sm sm:text-2xl">Веб-дизайнер</h1> 
                                        <h1 class=" text-sm sm:text-xl">Веб-разработчик</h1>     
                                        <h1 class=" text-sm sm:text-xl">Программист</h1> 
                                        <h1 class=" text-sm sm:text-xl">HTML-Верстальщик</h1>               
                                    </div>                            
                                </div> 
                                <div class="container space-y-1 font-mono italic inline-block cursor-default py-5 px-10 text-slate-300 ">  
                                    <h1 class=" text-2xl sm:text-4xl text-center">Обо мне</h1>                          
                                    <p class=" text-xs sm:text-base indent-5">
                                        Занимаю созданием сайтов с 2020 года. Имею высшее образование. Принимал участие в разработке больших проектов в качестве дизайнера, 
                                        разработчика и руководителя разработки. 
                                    </p>
                                    <p class=" text-xs sm:text-base indent-5">
                                        Я помогаю воплощать ваши идеи на страницах интернета. Создаю сайты для ваших проектов быстро, кроссбраузерно и адаптивно.
                                        Всегда открыт новым решениям и общению, изучаю новые подходы и технологии в сфере веб-разработки. в работе использую 
                                        англоязычные ресурсы и техническую документацию.
                                    </p> 
                                    <p class=" text-xs sm:text-base indent-5">
                                        Разрабатываю веб-сайты на основе HTML, CSS, Node.js, React.js, GitHub. Так же дополнительные библиотеки для React.js: react-router-dom, redux. 
                                    </p>                                  
                                </div>
                                <div class="container cursor-default px-10 py-2 space-y-4 font-mono italic text-slate-300">
                                    <h1 class=" text-xl sm:text-3xl text-center">Список услуг</h1>
                                    <div class="container space-y-5 lg:space-y-0 lg:flex lg:space-x-10 lg:justify-around">
                                        <div class="box hover:animate-pulse space-y-1 cursor-default py-2 px-10 outline outline-offset-0 outline-blue-500 bg-slate-900 rounded-lg shadow-lg shadow-blue-500/50">
                                        <h1 class=" text-xl sm:text-3xl text-center">Эконом</h1>
                                            <ul role="list" class="marker:text-sky-400 list-disc text-xs sm:text-base">
                                                <li>Лендинг</li>
                                                <li>Тестирование</li>
                                                <li>Верстка</li>
                                            </ul>
                                        <h1 class="pt-6 text-xs sm:text-base text-center">от 10 000 рублей</h1>
                                        </div>
                                        <div class="box hover:animate-pulse space-y-1 cursor-default py-2 px-10 outline outline-offset-0 outline-blue-500 bg-slate-900 rounded-lg shadow-lg shadow-blue-500/50">
                                        <h1 class=" text-xl sm:text-3xl text-center">Стандарт</h1>
                                            <ul role="list" class="marker:text-sky-400 list-disc text-xs sm:text-base">
                                                <li>Лендинг</li>
                                                <li>Интернет-магазин</li>
                                                <li>Поддержка и сопровождение</li>
                                                <li>Полное тестирование</li>
                                                <li>Редизайн</li>
                                            </ul>
                                        <h1 class="pt-6 text-xs sm:text-base text-center">от 15 000 рублей</h1>
                                        </div>
                                        <div class="box hover:animate-pulse space-y-1 cursor-default py-2 px-10 outline outline-offset-0 outline-blue-500 bg-slate-900 rounded-lg shadow-lg shadow-blue-500/50">
                                        <h1 class=" text-xl sm:text-3xl text-center">Премиум</h1>
                                            <ul role="list" class="marker:text-sky-400 list-disc text-xs sm:text-base">
                                                <li>Лендинг</li>
                                                <li>Интернет-магазин</li>
                                                <li>Многостраничный сайт</li>
                                                <li>Поддержка и сопровождение</li>
                                                <li>Полное тестирование</li>
                                                <li>Редизайн</li>
                                                <li>Дополнительные услуги</li>
                                            </ul>
                                            <h1 class="pt-6 text-xs sm:text-base text-center">от 25 000 рублей</h1>
                                        </div>                               
                                    </div>
                                </div>
                                <div class="container cursor-default space-y-1 py-4 px-10 font-mono italic text-slate-300">
                                    <h1 class=" text-xl sm:text-3xl text-center">Обратная связь</h1>
                                    <h1 class=" text-sm sm:text-xl">Заинтересовались предложением?</h1>
                                    <h1 class=" text-sm sm:text-xl">Остались вопросы?</h1> 
                                    <h1 class=" text-sm sm:text-xl">Ищите способ связаться?</h1> 
                                    <details class="" close>                                                                
                                        <summary class="indent-5 text-xs sm:text-base">
                                            Если у вас остались вопросы, я с радостью отвечу на них. Для этого свяжитесь со мной
                                            удобным для вас способом и я отвечу вам в ближайшее время.
                                        </summary> 
                                        <p className="underline underline-offset-1 sm:underline-offset-4 md:underline-offset-8 decoration-blue-500 text-xs sm:text-base">
                                            Мои контактные данные: телефон - 8(905)8681303, email - maninkarambler.ru@yandex.ru    
                                        </p>
                                    </details>                 
                                    {/*<Message /> ------- переделать */}                                
                                </div>  
                                <div class="container cursor-default space-y-1 py-4 px-10 font-mono italic text-slate-300">
                                    {/*<TestList />   ----------  переделать
                                    <Details /> --------------- переделать */}
                                </div>                                                            
                            </div>                   
                        </div>
                    <ScrollToTop />                     
                <Footer />                                                                
                </div>
                </div>)
        } 
}
 export default Main; 