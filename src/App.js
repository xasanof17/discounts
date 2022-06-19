import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Footer, Navbar} from "./components";
import { Container } from "./data/styles";
import {Home, Netflix, Error, YouTube, Spotify} from "./routes";
import Faq from './components/Faq/Faq';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <main className="main">
                    <Routes>
                        <Route exact path="/" element={< Home />}/>
                        <Route path="/netflix" element={<Netflix />}/>
                        <Route path="/youtube" element={<YouTube />}/>
                        <Route path="/spotify" element={<Spotify />}/>
                        <Route path="/faq" element={<FaqContent />}/>
                        <Route path="*" element={< Error />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

const FaqContent = ()=>{
    return(
        <Container>
            <Faq />
        </Container>
    )
}

export default App;
