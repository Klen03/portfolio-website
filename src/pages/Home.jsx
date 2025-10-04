import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"
import { FaTasks } from "react-icons/fa"
import { FaFolderOpen } from "react-icons/fa"
import { FaAward } from "react-icons/fa"
import { FaTools } from "react-icons/fa"

const Home = () => {
    return (
        <div className="w-full font-sans text-gray-900 bg-gradient-animate">
            {/* Header */}
            <header className="p-6 flex items-center gap-4">
                <img src="/BU-logo.png" alt="Boston University" className="w-14 h-14" />
                <h1 className="font-extrabold text-lg md:text-2xl 
                            drop-shadow-md tracking-wide text-outline-green">
                    Computer Science & Data Science Undergraduate
                </h1>
            </header>

            <section className="relative h-[110vh] pt-10 pb-20">
                <div className="grid grid-cols-3 grid-rows-3 place-items-center">
                    {/* --- SVG CONNECTING LINES --- */}

                    {/* Top Left Icon (About Me) */}
                    <a
                        href="#about"
                        className="flex flex-col items-center -mt-[23rem]"
                    >
                        <div className="bg-white p-8 rounded-full shadow-lg glow glow-delay-1 orbit-effect scanwave-effect
                                    transition transform 
                                    group-hover:scale-110 group-hover:ring-4 group-hover:ring-green-400">
                            <FaUserCircle className="text-green-700 text-9xl about-float" />
                            {/* Orbiting dots (only appear on hover) */}
                            <span className="orbit"></span>
                            <span className="orbit delay-2"></span>
                            <span className="orbit delay-3"></span>
                        </div>
                        <p className="mt-3 text-white font-bold text-2xl text-center group-hover:text-green-200 transition">
                            About Me
                        </p>
                    </a>

                    {/* --- CENTER PROFILE --- */}
                    <div className="col-start-2 flex flex-col items-center group">
                        {/* Profile Image */}
                        <img src="/my-face-image.jpg"
                            alt="Profile"
                            className="w-80 h-100 rounded-full border-4 border-white shadow-xl" />

                        {/* Social Icons */}
                        <div className="mt-7 flex gap-5 text-green-800 text-3xl">
                            <a href="https://www.linkedin.com/in/khang-le-a06b58234/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-white hover:text-green-600 transition" />
                            </a>
                            <a href="https://www.instagram.com/kan12_dann3/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white hover:text-green-600 transition" />
                            </a>
                            <a href="https://github.com/Klen03" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white hover:text-green-600 transition" />
                            </a>
                        </div>

                        {/* RESUME Button */}
                        <a href="/Le, Khang - Resume (Updated by September, 2025).pdf"
                            className="mt-8 px-6 py-3 rounded-lg bg-green-700 text-white shadow-lg font-extrabold
                               hover:bg-green-800 hover:scale-105 hover:right-4 hover:ring-green-300
                               transition transform text-lg">
                            View My Resume
                        </a>
                    </div>

                    {/* Top Right Icon (Experience) */}
                    <a
                        href="#experience"
                        className="row-start-1 col-start-3 flex flex-col items-center -mt-[23rem]"
                    >
                        <div className="relative experience-effect orbit-effect">
                            <div className="bg-white p-8 rounded-full shadow-lg glow glow-delay-2 scanwave-effect
                                        transition transform
                                        group-hover:scale-110 group-hover:ring-4 group-hover:ring-green-400">
                                <FaTasks className="text-green-700 text-9xl" />
                                {/* Orbiting dots (only appear on hover) */}
                                <span className="orbit"></span>
                                <span className="orbit delay-2"></span>
                                <span className="orbit delay-3"></span>
                            </div>
                        </div>
                        <p className="mt-3 text-white font-bold text-2xl text-center group-hover:text-green-200 transition">
                            Experience
                        </p>
                    </a>

                    {/* Bottom Left Icon (Extracurriculars) */}
                    <a
                        href="#extracurriculars"
                        className="row-start-2 col-start-1 flex flex-col items-center -mt-[50rem]"
                    >
                        <div className="bg-white p-8 rounded-full shadow-lg glow scanwave-effect orbit-effect
                                    transition transform 
                                    group-hover:scale-110 group-hover:ring-4 group-hover:ring-green-400">
                            <FaAward className="text-green-700 text-9xl" />
                            {/* Sparkles */}
                            <span className="sparkle top-4 left-10">✦</span>
                            <span className="sparkle top-6 right-10">✧</span>
                            <span className="sparkle bottom-4 left-10">✦</span>
                            <span className="sparkle top-20 left-5">✧</span>
                            <span className="sparkle bottom-8 right-5">✦</span>
                            <span className="sparkle top-20 right-5">✧</span>

                            {/* Orbiting dots (only appear on hover) */}
                            <span className="orbit"></span>
                            <span className="orbit delay-2"></span>
                            <span className="orbit delay-3"></span>
                        </div>
                        <p className="mt-3 text-white font-bold text-2xl text-center group-hover:text-green-200 transition -ml-1">
                            Extracurriculars
                        </p>
                    </a>

                    {/* Bottom Right Icon (Projects) */}
                    <a
                        href="#projects"
                        className="row-start-2 col-start-3 flex flex-col items-center -mt-[50rem]"
                    >
                        <div className="bg-white p-8 rounded-full shadow-lg glow glow-delay-4 projects-effect1 scanwave-effect orbit-effect
                                    transition transform 
                                    group-hover:scale-110 group-hover:ring-4 group-hover:ring-green-400">
                            <FaFolderOpen className="text-green-700 text-9xl" />
                            {/* Orbiting dots (only appear on hover) */}
                            <span className="orbit"></span>
                            <span className="orbit delay-2"></span>
                            <span className="orbit delay-3"></span>
                        </div>
                        <p className="mt-3 text-white font-bold text-2xl text-center group-hover:text-green-200 transition">
                            Projects
                        </p>
                    </a>
                </div>
            </section>

            <section id="about" className="relative -mt-32 w-full bg-gradient-to-b from-green-50 to-white py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                    {/* Floating Headline */}
                    <div className="text-left">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
                            Hi, I'm <span className="text-pink-300 dark:text-teal-400">Khang</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700">
                            <Typewriter
                                words={[
                                    "Building creative web experiences with React & Tailwind",
                                    "Turning data into insights with Python & SQL",
                                    "Designing intuitive interfaces with Figma & UI/UX principles",
                                    "Exploring distributed systems and algorithms in Computer Science",
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
                    </div>

                    {/* About Me Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-4 border-green-300">
                        <h3 className="text-3xl font-bold text-green-700 mb-4">About Me</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            I'm an undergraduate student majoring in
                            <span className="font-semibold text-green-600"> Computer Science </span>
                            and minoring in
                            <span className="font-semibold text-green-600"> Data Science </span> at Boston University.
                            Passionate about blending technology, design, and data, I enjoy building applications
                            that are both creative and impactful.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="min-h-screen bg-green-50 px-8 py-20">
                <h2 className="text-4xl font-bold text-green-700 text-center mb-16">
                    Experience
                </h2>

                <div className="max-w-6xl mx-auto flex flex-col space-y-20">
                    {/* BioEchem LLC */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-30">
                        {/* Left side */}
                        <div className="md:w-1/3 mt-3 md:mt-9">
                            <h3 className="text-2xl font-bold text-green-700">Project Management Assistant</h3>
                            <p className="text-gray-600 font-medium">BioEchem LLC – Climate Tech</p>
                            <p className="text-gray-500">Sep 2025 – Present</p>
                        </div>

                        {/* Right side */}
                        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed">
                                Supporting the creation of sustainable energy learning kits that merge science, education, and climate innovation.
                                I manage cross-functional coordination, assist in roadmap planning, and track deliverables across R&D and outreach teams.
                                This experience has strengthened my ability to balance user needs, technical feasibility, and impact — core principles in product management.
                            </p>
                        </div>
                    </div>

                    {/* Boston University - Virtual Technology */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-30">
                        <div className="md:w-1/3 mt-3 md:mt-9">
                            <h3 className="text-2xl font-bold text-green-700">Digital Learning Assistant</h3>
                            <p className="text-gray-600 font-medium">Boston University – Virtual Technology</p>
                            <p className="text-gray-500">Sep 2025 – Present</p>
                        </div>

                        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed">
                                Collaborate with academic teams to enhance course UX and accessibility within BU’s digital learning systems.
                                I identify usability issues, optimize learning flows, and prototype content improvements using H5P and Adobe tools.
                                This role has deepened my understanding of user-centric design, agile iteration, and data-driven decision-making in product development.
                            </p>
                        </div>
                    </div>

                    {/* City of Boston - Equity & Inclusion */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-30">
                        <div className="md:w-1/3 mt-3 md:mt-6">
                            <h3 className="text-2xl font-bold text-green-700">Web & Content Management Intern</h3>
                            <p className="text-gray-600 font-medium">City of Boston – Equity & Inclusion Cabinet</p>
                            <p className="text-gray-500">Jun 2025 – Aug 2025</p>
                        </div>

                        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed">
                                Improved accessibility and user experience for City websites serving diverse communities.
                                Partnered with stakeholders to prioritize content updates, document feedback, and manage CMS workflows in Drupal and WordPress.
                                This experience reinforced my ability to define user requirements and translate feedback into actionable product improvements with measurable community impact.
                            </p>
                        </div>
                    </div>

                    {/* Boston University - Campus Planning & Space Management */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-30">
                        <div className="md:w-1/3 mt-3 md:mt-8">
                            <h3 className="text-2xl font-bold text-green-700">Data Entry Assistant</h3>
                            <p className="text-gray-600 font-medium">Boston University – Campus Planning & Space Management</p>
                            <p className="text-gray-500">Feb 2025 – May 2025</p>
                        </div>

                        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed">
                                Maintained and audited facility data systems to support BU’s strategic infrastructure planning.
                                Collaborated with analysts to identify workflow inefficiencies and improved data accuracy through structured validation checks.
                                This taught me how operational insights inform larger product and process improvements — an analytical mindset crucial for PMs.
                            </p>
                        </div>
                    </div>

                    {/* No Worker Left Behind Inc. */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-30">
                        <div className="md:w-1/3 mt-3 md:mt-11">
                            <h3 className="text-2xl font-bold text-green-700">Product Management Intern</h3>
                            <p className="text-gray-600 font-medium">No Worker Left Behind Inc.</p>
                            <p className="text-gray-500">Jun 2024 – Sep 2024</p>
                        </div>

                        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed">
                                Collaborated with design, data, and engineering teams to improve the UX of digital learning products.
                                Conducted user research, synthesized feedback, and helped prioritize feature enhancements for accessibility and engagement.
                                This role provided hands-on exposure to the product lifecycle — from ideation to iteration — strengthening my ability to advocate for both user needs and business outcomes.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 text-center max-w-4xl mx-auto bg-green-500 rounded-xl border-l-4 p-6">
                    <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Product Management:</span> Cross-functional collaboration, user research, prioritization, agile workflow, stakeholder communication, data-informed strategy <br />
                        <span className="font-semibold">Data & Analytics:</span> Power BI, Tableau, SQL, MySQL, MongoDB, Airtable <br />
                        <span className="font-semibold">Product Design & UX:</span> Figma, Canva, WordPress, Drupal, Adobe Express, Adobe Rush, H5P, Blackboard Learn Ultra/Original <br />
                        <span className="font-semibold">Programming & Technical:</span> Java, TypeScript, React, HTML/CSS/JavaScript, GitHub, VSCode, Supabase, LaTeX, LC-3 <br />
                        <span className="font-semibold">Collaboration & Productivity:</span> Slack, Zoom, Notion, Trello, Asana, ChatGPT, Microsoft Office Suite, Google Workspaces <br />
                        <span className="font-semibold">Languages:</span> Bilingual – English & Vietnamese
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="min-h-screen bg-white px-8 py-20">
                <h2 className="text-4xl font-bold text-green-700 text-center mb-16">Projects</h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {/* Stock Paper Trader */}
                    <a
                        href="https://github.com/Klen03/web_stock-paper-trader"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-3">Stock Paper Trader</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A simulated stock trading web app built with Flask, SQLite, and SQLAlchemy.
                                Features real-time stock data integration via Alpha Vantage API, portfolio tracking, and trading analytics.
                                Designed the end-to-end experience to teach financial literacy through interactive data visualization.
                            </p>
                        </div>
                    </a>

                    {/* Resume Analyzer */}
                    <a href="https://github.com/Klen03/ml_resume-analyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-3">ML Resume Analyzer</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Built a resume evaluation tool using BERT embeddings, SHAP explainability, and real hiring data.
                                Provided quantitative feedback and data-driven insights to help candidates align their resumes with job descriptions.
                            </p>
                        </div>
                    </a>

                    {/* SparkBytes App */}
                    <a href="https://github.com/Klen03/ml_resume-analyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-3">SparkBytes Web App</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A collaborative nutrition app that lets users log meals and visualize nutrient trends.
                                Built using Supabase for authentication and React for dynamic front-end rendering, improving user engagement and retention.
                            </p>
                        </div>
                    </a>
                </div>
            </section>

            {/* Extracurriculars */}
            <section id="extracurriculars" className="min-h-screen bg-green-50 px-8 py-20">
                <h2 className="text-4xl font-bold text-green-700 text-center mb-16">
                    Extracurriculars & Community
                </h2>

                <div className="max-w-5xl mx-auto flex flex-col gap-10">

                    {/* BPS Community Service Scholar */}
                    <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-xl shadow-md border-l-4 border-green-400 p-6 hover:shadow-lg transition">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold text-green-700">BPS Community Service Scholar</h3>
                            <p className="text-gray-600">Boston Public Schools | 2021 – 2022</p>
                        </div>

                        <div className="md:w-2/3 mt-3 md:mt-0">
                            <p className="text-gray-700 leading-relaxed">
                                Recognized for outstanding dedication to civic engagement and public service through more than 100 hours of volunteer work.
                                Supported local initiatives in education, food security, and immigrant outreach programs across the Boston community.
                                This experience strengthened my leadership and communication skills while deepening my understanding of how grassroots collaboration drives real-world impact —
                                a principle I now bring into team-based product and user advocacy roles.
                            </p>
                        </div>
                    </div>

                    {/* Boston University Vietnamese Student Association */}
                    <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-xl shadow-md border-l-4 border-green-400 p-6 hover:shadow-lg transition">
                        <div className="md:w-1/3">
                            <h3 className="text-2xl font-bold text-green-700">Boston University Vietnamese Student Association (BUVSA)</h3>
                            <p className="text-gray-600">Member | 2022 – 2023</p>
                        </div>

                        <div className="md:w-2/3 mt-3 md:mt-0">
                            <p className="text-gray-700 leading-relaxed">
                                Collaborated with fellow students to plan cultural events, social initiatives, and community engagement activities celebrating Vietnamese identity at BU.
                                Contributed to team discussions and event logistics, helping strengthen cultural visibility and student connection.
                                Through BUVSA, I learned the value of inclusive design, shared leadership, and understanding diverse perspectives — essential skills for empathetic product management.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <footer className="bg-green-700 text-white text-center py-6 mt-20">
                <p className="text-sm">
                    Designed and built with 💚 by © {new Date().getFullYear()} Khang Le. All rights reserved.
                </p>
                <p className="text-s mt-2 text-green-200">
                    Thanks for visiting! Let’s connect @
                    <a href="mailto:lhankhang2012@gmail.com" className="underline hover:text-green-100 ml-1">email me</a>.
                </p>
            </footer>
        </div>
    );
};

export default Home;