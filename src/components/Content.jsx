import React from 'react';
import Verb from "../modules/Verb";
import Add from "../modules/Add";
import Index from "../modules";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Content() {
    return (
        <>
            <Router>
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add New</Link></li>
                        <li><Link to="/verb">Verb</Link></li>
                    </ul>
                </header>
                <main className="w-5/6 mx-auto">
                    <Routes>
                        <Route exact path="/" element={<Index/>}/>
                        <Route exact path="/add" element={<Add/>}/>
                        <Route exact path="/verb" element={<Verb/>}/>
                    </Routes>
                </main>
            </Router>
        </>
    )
}
