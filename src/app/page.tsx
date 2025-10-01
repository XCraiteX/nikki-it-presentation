"use client"
import { motion } from "motion/react";

import SectionCard from "@/components/ui/section-card";
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
    window.location.replace(`#s${slide}`)
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
                  <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Основні галузі в IT</motion.h1>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">GameDev</span> (Розробка ігор)</motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Веб-розробка</span> (Розробка сайтів та інтернет-магазинів)</motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Мобільна розробка</span></motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Машинне навчання</span> (Навчання ШІ)</motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Розробка ОС</span> (Проектування операційних систем)</motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Проектування API</span> (Створення серверної частини додатків)</motion.li>
                  <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 8 }} className="text-2xl text-white/80 block-title"><span className="font-bold text-white/90">Робота з даними</span> (Обробка та аналітика великих об'ємів даних)</motion.li>
              </div>
          </div>
      </SectionCard>

        <SectionCard id="s3" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Розвиток Штучного Інтелекту</motion.h1>
              
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">2017 - Дослідники з Google Brain опублікували наукову статтю з машинного навчання "Attention Is All You Need"</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">2018 - Створена перша у світі LLM (мовна модель GPT)</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">2022 - Популяризація нейромереж та поява аналогів</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">2022-2025 - Впровадження ШІ в більшість бізнес-процесів</motion.li>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s4" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Переваги вибору IT</motion.h1>
              
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Велика кількість літератури та курсів</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">Дистанційне навчання та робота</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title">Затребуваність професії</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">Висока оплата праці</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">Відсутність необхідності у отриманні освіти</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title">Відсутність регіональної прив'язаності</motion.li>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s5" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Майбутнє IT</motion.h1>
              
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">На даний момент майбутнє IT залишається під питанням. З одного боку IT сфера демонструє стрімке зростання та активний розвиток нових технологій, проте є кілька проблем:</motion.h2>

              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 3 }} className="text-2xl text-white/80 block-title">Перенасичення ринку недосвідченими фахівцями</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 4 }} className="text-2xl text-white/80 block-title">Поява великої кількості вразливостей в технологіях</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 5 }} className="text-2xl text-white/80 block-title">Падіння попиту на робочі місця через ШІ</motion.li>
              <motion.li variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 6 }} className="text-2xl text-white/80 block-title">Закриття компаній через відсутність фінансів</motion.li>
            
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 7 }} className="text-2xl text-white/80 block-title">У зв'язку з цим, майбутнє IT сфери залишається під питанням. Поживемо, побачимо)</motion.h2>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="s6" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5 main-text">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay }} className="text-7xl block-title">Джерела</motion.h1>
              
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Вивчення статті <a href="https://habr.com/ru/articles/900228" target="_blank" className="underline ml-6">https://habr.com/ru/articles/900228</a></motion.h2>
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Вивчення статті <a href="https://gb.ru/blog/it-professii" target="_blank" className="underline ml-6">https://gb.ru/blog/it-professii</a></motion.h2>
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: delay * 2 }} className="text-2xl text-white/80 block-title">Спілкування з хлопцями з REDLITE <a href="https://redlite.ru" target="_blank" className="underline ml-6">https://redlite.ru</a></motion.h2>
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