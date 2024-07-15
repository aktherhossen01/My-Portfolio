import img1 from '../../assets/11.png'
import img2 from '../../assets/112.png'
import img3 from '../../assets/113.png'

const Portfolio = () => {
    return (
        <div id='project'>
            <h1 className='text-center font-semibold text-3xl py-4'>Project</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
            <div className="md:w-96 relative h-96 rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[1000ms]" style={{ backgroundImage: `url(${img1})` }}>
                    <button className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute left-2 top-2">Vsite</button>
                    </div>


            <div className="md:w-96 relative h-96 rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[2000ms]" style={{ backgroundImage: `url(${img2})` }}>
                    <button className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute left-2 top-2">Vsite</button>
                    </div>


            <div className="md:w-96 relative h-96 rounded-lg bg-no-repeat bg-top bg-cover hover:bg-bottom ease-out duration-[100ms]" style={{ backgroundImage: `url(${img3})` }}>
                    <button className="btn bg-black bg-opacity-50 text-[#5ad5ee] border-[#5ad5ee] hover:text-black hover:bg-[#5ad5ee] absolute left-2 top-2">Vsite</button>
                    </div> 

            
            
            </div>
        </div>
    );
};

export default Portfolio;