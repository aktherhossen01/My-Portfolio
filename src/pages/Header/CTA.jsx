import cv from '../../assets/my pertional scic.pdf'

const CTA = () => {
    return (
        <div className=''>
           <a className='btni' href={cv} download>Download CV</a> 
           <a className='btni ml-4 bg-cyan-400 text-white' href="#contact">Lest task</a> 
        </div>
    );
};

export default CTA;