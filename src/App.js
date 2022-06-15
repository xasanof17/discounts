import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components";
import {Home, Netflix, Error, YouTube, Faq} from "./routes";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <main className="main">
                    <Routes>
                        <Route exact path="/" element={< Home />}/>
                        <Route exact path="/netflix" element={<Netflix />}/>
                        <Route exact path="/youtube" element={<YouTube />}/>
                        <Route exact path="/Faq" element={<Faq />}/>
                        <Route path="*" element={< Error />}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
