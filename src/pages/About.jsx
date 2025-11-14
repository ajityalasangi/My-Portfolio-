import ajit_avatar from '../assets/ajit_avatar.jpg'
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaLanguage } from 'react-icons/fa'
import { IoMdArrowRoundBack } from "react-icons/io";
import {NavLink} from 'react-router-dom';

function About (){
    return(
        <section className="max-w-6xl mx-auto px-6 py-16">
            <NavLink to="/" end className=" inline-block text-gray-600 hover:text-indigo-600 text-2xl">
                <IoMdArrowRoundBack />
            </NavLink>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Left: avatar */}
                <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-full bg-indigo-100 flex items-center justify-center">
                        <img src={ajit_avatar} alt="Ajit avatar" className="w-56 h-56 rounded-full object-cover" />
                    </div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Me</h1>
                    <p className="mt-4 text-gray-700 max-w-2xl leading-relaxed">
                        I’m Ajit Sangmesh Yalasangi, a passionate Web Developer and Computer Science student. I specialize in building
                        modern, responsive websites using React.js, Tailwind CSS, and Node.js. I enjoy crafting clean UIs, optimizing
                        user experiences, and bringing creative ideas to life through code.
                    </p>

                    {/* Info cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="font-medium">India</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Education</p>
                                <p className="font-medium">B-Tech in Computer Science (2025)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <FaBriefcase />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Role</p>
                                <p className="font-medium">Web Developer / Freelancer</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                <FaLanguage />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Languages</p>
                                <p className="font-medium">English, Hindi, Kannada, Marathi</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills chips */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        {['React', 'Node.js', 'MySQL', 'JavaScript', 'Tailwind CSS'].map((skill) => (
                            <span key={skill} className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;