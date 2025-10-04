import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
    return (
        <div className="w-full text-white">  
            <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full
                            bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                            dark:from-gray-900 dark:via-black dark:to-gray-800 text-white p-6">

            {/* Profile Image */}
            <img
              src="/my-face-image.jpg"
              alt="Khang Le"
              className="w-60 h-80 rounded-full border-4 border-white shadow-xl mb-6"
            />

            {/* Floating Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
                Hi, I'm <span className="text-pink-300 dark:text-teal-400">Khang</span>
            </h1>

            <p className="text-lg max-wx-l mb-10">
                Welcome to my portfolio - Please click the corners to learn more about me.
            </p>

            {/* Typewriter Tagline */}
            <p className="text-lg md:text-xl max-w-2xl mb-6">
                <Typewriter
                words={[
                    "Building creative web experiences with React & Tailwind",
                    "Turning data into insights with Python & SQL",
                    "Designing intuitive interfaces with Figma & UI/UX principles",
                    "Crafting responsive websites with HTML, CSS & JavaScript"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
                />
            </p>

            {/* View Resume in the Center */}
            <a
                href="/Le, Khang - Resume (Updated by September, 2025).pdf"
                className="border-2 border-white dark:border-teal-400
                            px-6 py-3 rounded-full font-bold
                            bg-white text-black dark:bg-gray-900 dark:text-gray-200
                            hover:scale-105 hover:shadow-[0_0_25px_#14f1d9] transition mb-16"
            >
                View My Resume
            </a>

            {/* Social Media Icons */}
            <div className="flex gap-6 mb-12">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"> 
                    <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10"/>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src="/instagram.png" alt="Instagram" className="w-10 h-10"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <img src="/github.png" alt="Github" className="w-10 h-10"/>
                </a>
            </div>

            <div>
                <a
                    classname="border-2 border-white dark:border-teal-400
                               text-black dark:text-gray-200
                               px-6 py-3 rounded-full font-bold
                               hover:bg-white hover:text-purple-700
                               dark:hover:bg-pink-400 dark:hover:text-black
                               transition"
                >
                    Contact Me
                </a>
            </div>

            {/* ABOUT SECTION */}
            <section className="bg-purple-600 text-black py-16 px-6">
                <div className="max-w-3xl mx-auto relative bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="font-bold text-xl mb-2">About Me</h2>
                    <p>I'm an undergraduate student...</p>
                    {/* Speech bubble arrow */}
                    <div className="absolute -left-4 top-10 w-10 h-0 border-y-[12px] border-y-transparent border-r-[20px] border-r-white"></div>
                </div>
            </section>

            {/* EXPERIENCE SECTION*/}
            <section>
                
            </section>
            </section>
        </div>
    );
};

export default Home;