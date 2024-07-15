

const Testimonials = () => {
    return (
        <div id="education" className="md: h-[100vh] mt-16">
            <h1 className="text-center py-5 font-semibold text-3xl">Education</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
                <div className="border w-8/12 mx-auto p-8 space-y-3 btni">
                    <h1 className="text-1xl">Secondary School Certificate (SSC)</h1>
                    <p>Institute: Lalmohon islamia kamil madrasha</p>
                    <p>GPA 4:28</p>
                    <p>Group : Science</p>
                </div>
                <div className="border w-8/12 mx-auto p-8 space-y-3 btni">
                    <h1>Diploma in Engineering</h1>
                    <p>Institute: Patuakhali Polytechnic institute</p>
                    <p>CGPA: 3:60</p>
                    <p>Computer Technology</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;