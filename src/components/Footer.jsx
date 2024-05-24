import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
function Footer() {
    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_lwvpztg','template_9u3o6i9',e.target,'ANIR0B2x1WchsHeyo').then(res=>{
          console.log(res);
        }).catch(error=>
          console.log(error)
        )
        e.target.reset();
    }
    return (
        <footer className='bg-violet-400 text-white'>
            <div className='md:flex-row flex justify-around flex-col'>
            <hr/>
            <div className='flex flex-col mb-2 '>
             <h4 className='flex flex-col items-center'>Complaints
                The Only Place where Your <br/> Complaint are precious to us!<br/> </h4>
            </div>
            <div className="flex-col items-center">
                <h1 className='flex flex-col items-center font-extrabold'>Quick Links</h1>
                <ul>
                    <li><Link to='/' className="flex flex-col items-center mb-4">Home</Link></li>
                </ul>
            </div>
            <div className="flex flex-col mb-4 items-center">
                <h4>Contact</h4>
                <div className='flex'>
                    <FaPhone/>
                    <span>777-777-7777</span>
                </div>
                <div className='flex'>
                    <MdEmail/>
                    <span>care@gmail.com</span>
                </div>
                <div className='flex'>
                    <FaLocationArrow/>
                    <span>Nabinagar Aurangabad Bihar</span>
                </div>
            </div>
            {/* <div className='flex flex-col mb-2 items-center'>
                <h2>Send Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'><input placeholder='Email' type='text' className='rounded'/></div>
                    <div className='mb-2'><input placeholder='Phone' type='Number' className='rounded'/></div>
                    <div><textarea placeholder='Query' className='rounded'></textarea></div>
                    <div className='text-center text-white rounded bg-violet-600 w-10 items-center'><button>Send</button></div>
                </form>
            </div> */}
            </div>
            <div className='bg-violet-500 text-1xl text-center text-white col-span-full'><p>&copy; 2024 All Right Reserved</p></div>
        </footer>
    );
}

export default Footer;
