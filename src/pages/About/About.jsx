import ME from '../../assets/12.jpg'
import akter from '../../assets/akter.jpg'
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import './About.css'
import 'swiper/css/effect-cards';
import 'swiper/css';
import './style.css';


import { EffectCards } from 'swiper/modules';
const About = () => {
    return (
        <div className="py-8" id="about">
            <div className='text-center py-9'>
            <h3 >Get To Know</h3>
            <h1 className='text-3xl font-semibold'>About Me</h1>
            </div>
            <div className="container grid md:grid-cols-2 grid-cols-1 gap-6">
                 <div >
                    
               


<Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  w-[220px]"
      >
        {/* swiperSlider 1 */}
        <SwiperSlide> 
            <img className='w-52 border-4 rounded-xl border-red-600' src={ME} alt="" />
        </SwiperSlide>
           {/* swiperSlider 2 */}
        <SwiperSlide>
        <img className='w-52  border-2 border-blue-800' src={akter

        } alt="" />
        </SwiperSlide>
        
       
      </Swiper> </div>
                <div className="space-y-3">
                    <h1 className='text-3xl font-semibold'> Md Akter Hosen</h1>
                    <p>-I'm Junior Web Developer For MEARN Stack. I Have Learn Start A Few 1 Year Ago. I'm Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code, Html, Css,Bootstrap,Javascript,React,Node Js, MongoDb,Express js, Json etc.I have done many projects and use this technology.I like learning new things every day..</p>
                    <button className='btni flex items-center justify-between'>Get Resume  <span className='ml-2'><FaArrowRight /></span></button>
                    <span className='flex items-center gap-5  mt-7  p-3'>


                    <a className='text-cyan-300 text-2xl' href="https://www.linkedin.com/in/md-akter-3842952a4/" target="_blank"><FaLinkedin
             /></a>
            <a className='text-cyan-400 text-2xl' href="#" target="_blank"><FaFacebook /></a>
            <a className='text-cyan-300 text-2xl' href="#"  target="_blank"><FaGithub /></a>
                    </span>
                </div>
            </div>
          
        </div>
    );
};

export default About;