import { Route, Routes } from "react-router-dom";
import Nav from "./nav";
import HomePage from "../Pages/Home.Page";
import AboutPage from "../Pages/About.Page";
import Projects from "../Pages/Projects.Page";
import Contact from "../Pages/Contact.Page";
import NotFound from "../Pages/NotFound.Page";


const ViewControl = () => {
    return(
    <Routes>
        <Route path='/' element={<Nav/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>
    )
}

export default ViewControl