import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Left from './component/Left';
import About from './component/About';
import Education from './component/Education';
import Contact from './component/Contact';
import Skills from './component/Skills';
import GoToTop from './component/GoToTop';
import Footer from './component/Footer';
import Work from './component/Work';
import Pythoncertificate from './component/Pythoncertificate';
// import LifeSkillCert from './LifeSkillCert';
import LifeCert from './LifeCert';
import JavaCert from './JavaCert';
import JavaWorkshop from './component/JavaWorkshop';
import WebCert from './WebCert';
import Exploremore from './component/Exploremore';
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

function App() {
  return (

 
        <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Left />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<Work />} />
              <Route path="/education" element={<Education/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/Pythoncertificate" element={<Pythoncertificate/>}/>
              <Route path="/LifeCert" element={<LifeCert/>}/>
              <Route path="/JavaCert" element={<JavaCert/>}/>
              <Route path="/JavaWorkshop" element={<JavaWorkshop/>}/>
              <Route path="/WebCert" element={<WebCert/>}/>
              <Route path="/Exploremore" element={<Exploremore/>}/>
            </Routes>
        </BrowserRouter>
        
        <Footer/>
        <GoToTop/>
      </div>
  );
}

export default App;
