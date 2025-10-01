"use client"
import { motion } from "motion/react";

import ArrowButton from "@/components/ui/arrow-button";
import SectionCard from "@/components/ui/section-card";
import ServiceCard from "@/components/ui/service-card";
import { useEffect, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const RightToLeftControls = {initial: { opacity: 0, x: 10 }, whileInView: { opacity: 1, x: 0 }}
const BottomToUpControls = {initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }}
const DiagonalControls = {initial: {x: 10, y: 10, opacity: 0 }, whileInView: { x: 0, y: 0, opacity: 1}}

export default function Home() {

  let delay = 0.3

  const [slide, setSlide] = useState(1);

  const minSlide = 1
  const maxSlide = 6


  useEffect(() => {
    window.location.replace(`/#s${slide}`)
  }, [slide])
 
  const nextSlide = () => {
    if (slide < maxSlide) {
      setSlide(slide + 1);
    }
  }

  const prevSlide = () => {
    if (slide > minSlide) {
      setSlide(slide - 1);
    }
  }
  
  return (
    <>
      <main className="h-screen w-screen snap-x snap-mandatory flex overflow-hidden scroll-smooth" id="main-page-section">

        {/* HOME */}
        <SectionCard id="s1" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Інформаційні технології та майбутнє IT</motion.h1>
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-4xl text-white/80 block-title">01.10.2025</motion.h1>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s2" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Основные области в IT</motion.h1>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">GameDev</span> (Разработка игр)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Веб-разработка</span> (Разработка сайтов и интернет-магазинов)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Мобильная разработка</span></motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Машинное обучение</span> (Обучение ИИ)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Разработка ОС</span> (Проектирование операционных систем)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Проектирование API</span> (Создание серверной части приложений)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 8 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Работа с данными</span> (Обработка и аналитика больший объёмов данных)</motion.li>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s3" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Развитие Искуственного Интелекта</motion.h1>
              
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">2017 - Исследователи из Google Brain опубликовали научную статью по машинному обучению</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">2018 - Создана первая в мире LLM (языковая модель GPT)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">2022 - Популяризация нейросетей и появление аналогов</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">2022-2025 - Внедрение ИИ во большинство процессов бизнеса</motion.li>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s4" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Преимущество выбора IT</motion.h1>
              
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Доступность обучения</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">Удалённое обучение и работа</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title">Востребованность профессии</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">Высокая оплата труда</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">Отсутствие необходимости в получении образоания</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title">Отстуствие региональной привязанности</motion.li>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s5" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Будущее IT</motion.h1>
              
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">На текущий момент будущее IT остаётся под вопросом. С одной стороны IT сфера показывает стремительный рост и активное развитие новых технологий, однако есть несколько проблем:</motion.h2>

              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">Перенасыщение рынка неопытными специалистами</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title">Появление большого количества уязвимостей в технологиях</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">Падение спроса на рабочих местах из-за ИИ</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">Закрытие компаний из-за отсутствия финансов</motion.li>
            
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title">В связи с этим, будущее IT сферы остаётся под вопросом. Поживём, увидим)</motion.h2>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s6" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Используемые ресурсы</motion.h1>
              
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Изучение статьи <a href="https://habr.com/ru/articles/900228" className="underline ml-6">https://habr.com/ru/articles/900228</a></motion.h2>
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Изучение статьи <a href="https://gb.ru/blog/it-professii" className="underline ml-6">https://gb.ru/blog/it-professii</a></motion.h2>

              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Общение с ребятами из REDLITE <a href="https://redlite.ru" className="underline ml-6">https://redlite.ru</a></motion.h2>
            </div>
          </div>
        </SectionCard>

      
      </main>

      {/* LEFT SIDE */}
      <div className="fixed left-0 top-0 bottom-0 w-10 bg-white/10 color-white flex justify-center items-center" onClick={prevSlide}>
        <IoIosArrowBack size={26}/>
      </div>

      {/* COUNTER */}
      <div className="fixed right-16 bottom-5 text-2xl color-white flex items-center">
        <p>{slide} / {maxSlide}</p>
      </div>

      
      {/* RIGHT SIDE */}
      <div className="fixed right-0 top-0 bottom-0 w-10 bg-white/10 color-white flex justify-center items-center" onClick={nextSlide}>
        <IoIosArrowForward size={26}/>
      </div>

    </>
  );
}