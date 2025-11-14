import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Contact(){
    return(
        <>
            <NavLink to="/" end className=" inline-block text-gray-600 hover:text-indigo-600 text-2xl m-5">
                <IoMdArrowRoundBack />
            </NavLink>
            <header className="flex flex-col items-center my-10 gap-2.5">
                <h1 className="text-5xl font-bold">Get in Touch</h1>
                <p className="text-2xl text-gray-600 text-center max-w-2xl">Feel free to reach out for collaborations, freelance work or just to say hello!</p>
            </header>

            <section className="max-w-6xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* left: contact cards */}
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Address</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3"><CiMail className="text-xl text-indigo-600 mt-1"/> <span>ajityalasangi@gmail.com</span></li>
                                <li className="flex items-start gap-3"><CiPhone className="text-xl text-indigo-600 mt-1"/> <span>+91 9309850011</span></li>
                                <li className="flex items-start gap-3"><CiLocationOn className="text-xl text-indigo-600 mt-1"/> <span>Bangalore, India</span></li>
                                <li className="flex items-start gap-3"><MdOutlineEventAvailable className="text-xl text-indigo-600 mt-1"/> <span>Open for freelance & internship opportunities</span></li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Open for freelance & internship work</h3>
                            <p className="text-gray-700 mb-4">Connect with me on social platforms</p>
                            <div className="flex items-center gap-3">
                                <a href="https://www.linkedin.com/in/ajit-yalasangi-517329276/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-indigo-50 text-indigo-600">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/ajityalasangi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* right: contact form */}
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" className="mt-1 block w-full border-gray-200 rounded-md shadow-sm p-2" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" className="mt-1 block w-full border-gray-200 rounded-md shadow-sm p-2" placeholder="you@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" className="mt-1 block w-full border-gray-200 rounded-md shadow-sm p-2" placeholder="Subject" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea className="mt-1 block w-full border-gray-200 rounded-md shadow-sm p-2 h-40" placeholder="Write your message..." />
                            </div>

                            <div>
                                <button type="submit" className="w-full md:w-auto bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contact;