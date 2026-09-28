import './App.css'
import About from './components/About.jsx'
import Sidebar from "./components/Sidebar.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contacts from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Involvements from "./components/Involvements.jsx";



export default function App() {

    return(
        <div className={"Header"}>
        <h1> Jan's Digital Home </h1>

            <About />

            <Sidebar />

            <Experience/>
            <Projects />
            <Involvements />
            <Skills />

            <Contacts />


        </div>

        )





}

