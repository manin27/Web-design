import React from "react"
import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ScrollToTop from "../Components/ScrollToTop";

class Dev extends React.Component {
    
    render() {
        return(<div className="main menu">
                <Header />
                <div className="body" class="bg-gradient-to-b pt-10 from-black via-blue-900 to-black ">
                    <div class="conteiner flex justify-around px-10 py-5 space-x-60 pr-20">
                            <Navigation />
                            <div class="container space-y-1 font-mono italic cursor-default py-5 px-10 text-slate-300">  
                                    <h1 class=" text-4xl text-center">Обо мне</h1>                          
                                    <p class=" text-base indent-5">
                                        Занимаю созданием сайтов с 2020 года. Имею высшее образование. Принимал участие в разработке больших проектов в качестве дизайнера, 
                                        разработчика и руководителя разработки. 
                                    </p>
                                    <p class=" text-base indent-5">
                                        Я помогаю воплощать ваши идеи на страницах интернета. Создаю сайты для ваших проектов быстро, кроссбраузерно и адаптивно.
                                        Всегда открыт новым решениям и общению, изучаю новые подходы и технологии в сфере веб-разработки. в работе использую 
                                        англоязычные ресурсы и техническую документацию.
                                    </p> 
                                    <p class=" text-base indent-5">
                                        Разрабатываю веб-сайты на основе HTML, CSS, Node.js, React.js, GitHub. Так же дополнительные библиотеки для React.js: react-router-dom, redux. 
                                    </p>                                  
                                </div>                    
                        </div>
                    <ScrollToTop />      
                <Footer />                                                   
                </div>
                </div>)
        } 
}
 export default Dev; 