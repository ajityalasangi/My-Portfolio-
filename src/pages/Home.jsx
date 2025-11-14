import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import ajit_avatar from '../assets/ajit_avatar.jpg';
function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            {/* ABOUT PREVIEW */}
            <section id="about" className="px-6 md:px-20 py-16">
                <h2 className="text-3xl md:text-4xl font-semibold pb-4">About Me</h2>
                <p className="text-gray-700 max-w-3xl leading-relaxed">
                    I’m Ajit Sangmesh Yalasangi, a passionate Web Developer and Computer Science student.
                    I specialize in building modern, responsive websites using React.js, Tailwind CSS, 
                    and Node.js. I focus on creating clean user interfaces and smooth user experiences.
                </p>
                <a href="/about">
                    <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                    Read More →
                    </button>
                </a>
            </section>

            {/* SKILLS */}
            <section id="skills" className="px-6 md:px-20 py-16 bg-blue-50 rounded-lg m-4 md:m-10">
                <h2 className="text-3xl md:text-4xl font-semibold pb-6">Skills</h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
                    <FaReact className="text-4xl text-indigo-600" />
                    <FaNodeJs className="text-4xl text-green-600" />
                    <FaJs className="text-4xl text-yellow-500" />
                    <SiTailwindcss className="text-4xl text-blue-500" />
                    <FaHtml5 className="text-4xl text-orange-600" />
                    <FaCss3Alt className="text-4xl text-blue-600" />
                    <FaJava className="text-4xl text-red-500" />
                    <SiMysql className="text-4xl text-indigo-800" />
                    <FaGithub className="text-4xl text-gray-800" />
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section id="projects" className="px-6 md:px-20 py-16">
                <h2 className="text-3xl md:text-4xl font-semibold pb-8">Featured Projects</h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Project 1 */}
                    <div className="p-6 bg-white rounded-xl shadow-md border">
                        <img
                            src={ajit_avatar}
                            alt="Project 1"
                            className="rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Portfolio Website</h3>
                        <p className="text-gray-600 my-2">
                            A modern and responsive personal portfolio website built using React & Tailwind CSS.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">React</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Tailwind</span>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Demo</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Code</button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="p-6 bg-white rounded-xl shadow-md border">
                        <img
                            src={ajit_avatar}
                            alt="Project 2"
                            loading="lazy"
                            className="rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Anilove</h3>
                        <p className="text-gray-600 my-2">
                            User friendly e-commerce website for buying and selling products for animal lovers built with HTML, CSS, and JavaScript.
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">HTML</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">CSS</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">JavaScript</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">React</span>

                        </div>
                        <div className="flex gap-3 mt-4">
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Demo</button>
                            <a href="https://github.com/ajityalasangi/Anilove">
                                <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Code</button>
                            </a>
                            
                        </div>
                    </div>

                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section id="stats" className="px-6 md:px-20 py-16 bg-blue-50 rounded-lg m-4 md:m-10 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold pb-6">Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-4xl font-bold text-indigo-600">10+</h3>
                        <p className="text-gray-700">Projects Completed</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-indigo-600">1+</h3>
                        <p className="text-gray-700">Years Experience</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-indigo-600">5+</h3>
                        <p className="text-gray-700">Tech Stacks Mastered</p>
                    </div>

                </div>
            </section>

            {/* CONTACT CTA */}
            <section id="contact" className="px-6 md:px-20 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">Have a project in mind?</h2>
                <p className="text-gray-600 mt-2">Let’s work together and build something amazing.</p>
                <a href="/contact">
                    <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 transition">
                    Contact Me
                </button>
                </a>
                
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-100 py-4 text-center text-gray-600 mt-10">
                © 2025 Ajit Yalasangi — All Rights Reserved.
            </footer>
        </>
    );
}

export default Home;
