import img from '../../assets/login/login.svg'

const Contact = () => {
    return (
        <div id="contact">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <img className='w-96' src={img} alt="" />
                </div>
                <div className=''>
                    <h1>this is a contact from</h1>

                    <input className='w-7/12 px-3 py-3 mb-4 rounded-lg border items-center   bg-red' type="text" placeholder='Enter Your Name' /> <br />

                    <input className='w-7/12 px-3 items-center  py-3 rounded-lg mb-8 bg-red' type="email" placeholder='Enter Your Email' /> <br />
                    
                    <textarea className='md:w-96 rounded-lg' name="" id=""  rows="5" placeholder='Message'></textarea> <br />
                    <input type="submit" className='btni' value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;