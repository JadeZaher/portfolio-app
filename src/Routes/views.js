import { Route, Routes } from "react-router-dom";
import Nav from "./nav";

const Views = () => {
    return(
    <Routes>
        <Route path='/' element={<Nav/>}>
        <Route path="/about" element={<h1>About</h1>} />
            <Route path="/projects" element={<h1>projects</h1>} />
            <Route path="/blogs" element={<h1>Blog</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
    </Routes>
    )
}

export default Views