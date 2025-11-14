import {NavLink} from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: "A responsive portfolio website to showcase my work and skills.",
    tags: ['React', 'CSS'],
    demo: '#',
    code: '#'
  },
  {
    id: 2,
    title: 'Anilove- E-Commerce Platform',
    description: "An online platform for browsing and purchasing animal related products.",
    tags: ['React', 'Node.js', 'Express'],
    demo: '#',
    code: '#'
  },
  {
    id: 3,
    title: 'Investimatch',
    description: "A web-application for investors to connect with startups.",
    tags: ['React', 'Firebase'],
    demo: '#',
    code: '#'
  },
  {
    id: 4,
    title: 'Event Planner',
    description: "A web application to plan and organize events efficiently.",
    tags: ['React.js', 'MySQL'],
    demo: '#',
    code: '#'
  }
]

function Projects(){
    return(
    <>
        <NavLink to="/" end className=" inline-block text-gray-600 hover:text-indigo-600 text-2xl m-5">
            <IoMdArrowRoundBack />
        </NavLink>
        <section className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-2">Projects</h2>
            <p className="text-gray-600 mb-8">Some of the projects I've worked on.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <article key={project.id} className="bg-white rounded-xl shadow-sm border p-6">
                        <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            {/* placeholder image / screenshot */}
                            <span className="text-gray-400">Preview</span>
                        </div>

                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-800">{tag}</span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">View Project</a>
                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200">Code</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </>
    )
}

export default Projects;