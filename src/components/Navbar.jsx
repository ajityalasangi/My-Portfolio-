import {NavLink} from 'react-router-dom';

function Navbar (){
    return (
        <nav className="flex items-center px-6 py-4">
            <h1 className="text-3xl font-bold">Ajit.Dev</h1>
            <div className="hidden sm:flex flex-1 justify-center gap-8 text-lg">
                {/* <a href="#" className="transition text-gray-700 hover:text-indigo-600 ">Home</a> */}
                <NavLink to="/" end className={({isActive})=>isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Home</NavLink>
                <NavLink to="/contact" className={({isActive})=>isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Contact</NavLink>
                <NavLink to="/about" className={({isActive})=>isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>About</NavLink>
                <NavLink to="/projects" className={({isActive})=>isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Projects</NavLink>
                
            </div>
            <a href="/resume.pdf" download >
                <button className="transition ease-in-out ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ">Download Resume</button>
            </a>
            
        </nav>
    );
}

export default Navbar; 