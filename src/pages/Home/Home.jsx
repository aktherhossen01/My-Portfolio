import Navbar from "../Navbar/Navbar";

import '../../../src/index.css'
import Header from '../Header/Header';
import About from "../About/About";
import Experience from "../Experience/Experience";
import Testimonials from "../Testimonials/Testimonials";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";



const Home = () => {
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <About></About>
           
           <Experience></Experience>
           <Portfolio></Portfolio>
           <Testimonials></Testimonials>
           <Contact></Contact>
       
        </div>
    );
};

export default Home;