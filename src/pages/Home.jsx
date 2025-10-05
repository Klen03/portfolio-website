import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa"
import { FaTasks } from "react-icons/fa"
import { FaFolderOpen } from "react-icons/fa"
import { FaAward } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { ArrowUpRight } from "lucide-react";

const Home = () => {
    return (
        <div className="w-full font-sans text-gray-900 bg-gradient-animate">
            {/* Header */}
            <header id="header" className="p-6 flex items-center gap-4">
                <img src="/BU-logo.png" alt="Boston University" className="w-14 h-14" />
                <h1 className="font-extrabold text-lg md:text-2xl 
                            drop-shadow-md tracking-wide text-outline-green">
                    Computer Science & Data Science Undergraduate
                </h1>
            </header>

            <section id="home" className="relative h-[110vh] pt-10 pb-20">
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
                    <div className="text-left flex flex-col space-y-8">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
                            Hi, I'm <span className="text-pink-300 dark:text-teal-400">Khang</span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-2xl mb-6 white-space-pre-line text-gray-700">
                            <Typewriter
                                words={[
                                    "Bridging design, data, and technology to create meaningful products",
                                    "Transforming ideas into user experiences that make a difference",
                                    "Turning insights into action through empathy and data-driven decisions",
                                    "Collaborating across teams to build solutions that empower people",
                                    "Exploring how technology and design shape human connection"
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={40}
                                deleteSpeed={25}
                                delaySpeed={3000}
                            />
                        </p>

                        {/* CONNECT Button */}
                        <a a href="mailto:lhankhang2012@gmail.com"
                            className="mt-8 px-6 py-3 rounded-lg bg-green-700 text-white shadow-lg font-bold
                               hover:bg-green-800 hover:scale-105 hover:right-4 hover:ring-green-300
                               transition transform text-lg w-[200px] text-center">
                            Let's connect 🤝
                        </a>
                    </div>

                    {/* About Me Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-4 border-green-300">
                        <h3 className="text-3xl font-bold text-green-700 mb-4">About Me</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            As an aspiring <span className="font-semibold text-green-600">Product Manager</span>
                            , I have discovered my love for understanding users, designing intuitive products, and turning insights into real-world impact.
                            My cross-functional experiences, spanning from working in climate tech and public innovation to digital learning and product design,
                            have shaped how I approach problem-solving: with empathy, clarity, and purpose.
                            Whether coordinating across teams, visualizing data, or refining user flows,
                            I am driven by a simple goal → to build technology that makes life a little easier and more human.
                            <p>
                                When I’m not working on projects, you can find me exploring cafés in Boston, designing on Figma, or mentoring students in community programs.
                            </p>
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
                                • I support BioEchem’s mission to bridge science and sustainability by coordinating timelines and deliverables across R&D, marketing, and product teams.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Beyond keeping projects on track, I focus on aligning efforts around shared goals and learning how strategic clarity transforms collaboration.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ Working in a climate-tech startup has helped me appreciate how data, empathy, and execution come together to shape products that make a real environmental impact.
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
                                • I collaborate with designers to enhance course UX and accessibility within BU’s digital learning systems.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Being able to identify usability issues allows me to transform complex course structures into intuitive digital layouts, optimize learning flows, and prototype content improvements using H5P and Blackboard Ultra tools.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ This role has deepened my understanding of user-centric design, agile iteration, and data-driven decision-making in product development.
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
                                • I supported in improving accessibility and user experience for City websites serving diverse communities using Drupal.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Partnering with stakeholders such as department leaders and multiple constituents enables content updates prioritization, document feedback, and CMS workflows management.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ This experience taught me how design and communication choices influence equity in digital public services and the importance of inclusive product thinking in government technology.
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
                                • Maintained and audited facility data systems to support BU’s strategic infrastructure planning.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Collaborated with analysts to identify workflow inefficiencies and improved data accuracy through structured validation checks.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ This work strengthened my attention to detail and showed how clean, accurate data supports better decisions for both infrastructure and product development.
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
                                • I worked with product and engineering teams to identify user needs and improve workforce development tools.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Moreover, I also firsthand learned how to conduct user feedback sessions, organize feature requests for proposing improvements based on usage data.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ This internship confirmed my interest in product management by showing me how insights can be translated into meaningful, inclusive digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 text-center max-w-4xl mx-auto bg-green-500 rounded-xl border-l-4 p-6">
                    <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
                    <p className="text-black leading-relaxed">
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
                            <h3 className="text-2xl font-bold text-green-700 mb-2">💼 Stock Paper Trader</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> Developer</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span> Flask, SQLite, SQLAlchemy, Alpha Vantage API</p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                A simulated stock trading web app built with Flask, SQLite, and SQLAlchemy.
                                Features real-time stock data integration via Alpha Vantage API, portfolio tracking, and trading analytics.
                                Designed the end-to-end experience to teach financial literacy through interactive data visualization.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> Enabled interactive financial learning through realistic trading simulations and data visualization.</p>
                        </div>
                    </a>

                    {/* Resume Analyzer */}
                    <a href="https://github.com/Klen03/ml_resume-analyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-3">🧠 ML Resume Analyzer</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> Data Scientist / Product Analyst</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span> Python, BERT, SHAP, Scikit-learn</p>
                            <p className="text-gray-700 leading-relaxed">
                                Built a machine learning-powered resume evaluation tool using BERT embeddings, SHAP explainability, and real hiring data.
                                Provided quantitative feedback and data-driven insights to help candidates align their resumes with job descriptions.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> Delivered data-driven insights that empower job seekers and promote fairer hiring decisions.</p>
                        </div>
                    </a>

                    {/* SparkBytes App */}
                    <a href="https://github.com/Klen03/ml_resume-analyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-3">🍽 SparkBytes Web App</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> Fullstack Developer / UX Collaborator</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span> React, Supabase, Tailwind CSS</p>
                            <p className="text-gray-700 leading-relaxed">
                                Co-developed SparkBytes, a web app designed to reduce food waste across the Boston University campus by connecting students to events serving free or leftover food. The platform allows users to view real-time posts about campus events, track available food, and discover opportunities to attend and reduce waste.
                                Built the responsive frontend using React and Tailwind CSS, and implemented Supabase for secure authentication and dynamic event posting.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> Helped promote sustainability and community engagement by reducing leftover food waste, encouraging resource sharing, and improving event visibility for students.</p>
                        </div>
                    </a>

                    {/* Autonomous Mechanics Challenge */}
                    <a href="https://www.figma.com/design/M4hFWuso1FpHp8OaiAtJIq/Autonomous-Mechanics-Challenge?node-id=0-1&t=PDqDM4a4tpDgwmzh-1" target="_blank" rel="noopener noreferrer">
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-2">🤖 Autonomous Mechanics Challenge</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> UX Designer</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span>Tools: Figma, FigJam, User Personas, Wireframing</p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Collaborated as part of a cross-functional UX team to design a web platform that transforms a physical robotics lab into an accessible online workspace for students and researchers worldwide. Focused on creating intuitive user flows that allow users to securely log in, submit 3D printing and testing tasks, and track project performance through dynamic leaderboards and visual analytics.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> Produced validated UX prototypes that informed future development for data integration and real-time analytics.</p>
                        </div>
                    </a>

                    {/* BMC Neuro Assessment App*/}
                    <a href="https://www.figma.com/design/XL0w234wcsXHO9oGlfohRi/BMC-App-Design?node-id=0-1&p=f&t=B5zHnxy0ZaYGvSxU-0" target="_blank" rel="noopener noreferrer">
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-2">🩺 BMC Neuro Assessment App</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> UX Designer</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span>Tools: Figma, FigJam, User Personas, User Interviews, Wireframing, Design Systems</p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Collaborated with a cross-disciplinary UX team to design a multilingual, web-based neurological assessment tool for Boston Medical Center. The project aimed to improve accessibility for non-English-speaking patients undergoing neurological evaluations for brain toxicity related to cellular therapy.
                                Conducted interviews, mapped user journeys, and created personas to understand pain points in both patient and physician workflows. Designed interactive wireframes and a high-fidelity prototype with translation, admin editing, and assessment review capabilities.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> Created a user-centered prototype that bridges language barriers in critical care assessments, enabling physicians to provide equitable, accurate, and culturally responsive neurological testing.</p>
                        </div>
                    </a>

                    {/* Ahead: Immigrant Youth Empowerment App (In Progress)*/}
                    <a href="https://www.figma.com/design/XL0w234wcsXHO9oGlfohRi/BMC-App-Design?node-id=0-1&p=f&t=B5zHnxy0ZaYGvSxU-0" target="_blank" rel="noopener noreferrer">
                        <div className="bg-green-50 p-6 rounded-xl shadow-md border-t-4 border-green-400 hover:shadow-xl hover:scale-[1.02] transition">
                            <h3 className="text-2xl font-bold text-green-700 mb-2">🌏 Ahead: Immigrant Youth Empowerment App (In Progress)</h3>
                            <p className="text-gray-700 font-medium mb-1"><span className="font-semibold text-green-700">Role:</span> Founder / Product Designer</p>
                            <p className="text-gray-700 text-sm italic mb-4"><span className="font-semibold text-green-700">Tools:</span>Tools: Figma, TypeScript, React Native (planned)</p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Currently conceptualizing and designing Ahead, a mobile app that helps immigrant youth navigate key life and education milestones in the U.S.
The app aims to empower middle school, high school, and college students by providing proactive guidance on academic planning, extracurricular involvement, and college preparation — helping them “stay ahead of the game.”
Inspired by personal experience, the project focuses on bridging information gaps, fostering belonging, and offering culturally aware mentorship for new immigrants.
                            </p>
                            <p className="text-gray-700"><span className="font-bold text-green-900 underline">Impact:</span> To create a digital resource that enables immigrant students to discover opportunities earlier, plan their futures confidently, and feel supported throughout their education journey.</p>
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
                            <h3 className="text-2xl font-bold text-green-700">Language Toolkit Research Team Member</h3>
                            <p className="text-gray-600">Vietnamese in the U.S. Food Security Scale | Nov 2023 – May 2025</p>
                        </div>

                        <div className="md:w-2/3 mt-3 md:mt-0">
                            <p className="text-gray-700 leading-relaxed">
                                • Contributed to a multidisciplinary research team addressing food insecurity and language barriers within the Vietnamese community in the United States.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Conducted translation work, data annotation, and interview-based research to improve communication tools and community outreach resources.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ This experience deepened my understanding of cultural empathy and human-centered research, which directly influences how I approach product design and user problem-solving.
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
                                • Collaborated with fellow students to plan cultural events, social initiatives, and community engagement activities celebrating Vietnamese identity at BU.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                • Contributed to team discussions and event logistics, helping strengthen cultural visibility and student connection.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                ⇒ Through BUVSA, I learned the value of inclusive design, shared leadership, and understanding diverse perspectives — essential skills for empathetic product management.
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

            {/* Floating Go Back Button */}
            <a
                href="#home"
            >
                <button className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg 
                            hover:bg-green-700 hover:scale-110 hover:shadow-green-400/40 transition 
                            flex items-center justify-center gap-2 z-50">
                    <span className="animate-bounce">↑</span>
                    Home
                </button>
            </a>
        </div>
    );
};

export default Home;