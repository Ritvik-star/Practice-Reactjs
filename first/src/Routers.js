import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams, redirect } from "react-router-dom";


const Routers = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/layout" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/about/:username" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const About = () =>{
    const navigate = useNavigate();
    const { username } = useParams()

    return(
        <div>
            about page {username}
            <button onClick={navigate("/contact")}>move to contact</button>
        </div>
    )
}

const Home = () =>{
    const navigate = useNavigate();


    return(
        <div>
            home page
            <button onClick={navigate("/about")}>move to about</button>
        </div>
    )
}