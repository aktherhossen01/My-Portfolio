import { CiSettings } from "react-icons/ci";

const Experience = () => {
    return (
        <div id="experience" className="md:h-[100vh] container mx-auto ">
            <h1 className="text-center text-3xl font-semibold">Technical Skills</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center ">
                <div className="md:w-96 h-64 text-center rounded-xl bg-purple-950 py-10 mt-10 mx-auto">
                    <h1>front end Development</h1>
                   <div className="flex  justify-center items-center p-8 ">
                   <span className="px-9 ">
                        <span>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>html</p>
                        
                        </span>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Css</p>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>React</p>
                    </span>
                    <span>
                       
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Bootstrap</p>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>JavaScript</p>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Tailwind</p>
                    </span>
                   </div>
                </div>
                <div className="md:w-96 h-64 text-center rounded-xl bg-purple-950 py-10 mt-10 mx-auto">
                    <h1>Backend Development</h1>
                   <div className="flex  justify-center items-center p-8 ">
                   <span className="px-9 ">
                        <span>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Node js</p>
                        
                        </span>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>MongoDB</p>
                        
                    </span>
                    <span>
                       
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Firebase</p>
                        <p className="flex items-center py-3"><span className="mr-2"><CiSettings /></span>Express js</p>
                      
                    </span>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;