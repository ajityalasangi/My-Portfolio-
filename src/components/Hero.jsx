import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import heroImg from '../assets/heroimage.png';
function Hero(){
    return(
        <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 py-9 m-4 md:m-10 lg:m-12 bg-blue-50 rounded-lg">
            <div className=" md:w-1/2 p-4">
                <h1 className="text-5xl font-medium pb-2">Hi, I’m Ajit 👋</h1>
                {/* do the typewriter work later for now only typewriter npm module is been installed. Typewriter github repo link: https://github.com/tameemsafi/typewriterjs*/}
                <p className="text-gray-700 pb-4 text-2xl">I build fast, modern, and user-friendly web experiences. </p>
                <a href="/projects">
                    <button className="transition ease-in-out bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">View Projects</button>

                </a>
                <div className="flex gap-3 mt-4">
                    <a href="https://www.linkedin.com/in/ajit-yalasangi-517329276/" target="_blank" aria-label="Open Ajit's LinkedIn" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                        <FaLinkedin className="text-3xl md:text-4xl" />
                    </a>
                    <a href="https://github.com/ajityalasangi" target="_blank" aria-label="Open Ajit's GitHub" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                        <FaGithub className="text-3xl md:text-4xl"/>
                    </a>
                    
                </div>
                
            </div>
            <div className="md:w-1/2 flex items-center justify-center md-justify-end ">
                <img src={heroImg} alt="Hero Image" className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"/>
            </div>
        </section>
    );
}

export default Hero;