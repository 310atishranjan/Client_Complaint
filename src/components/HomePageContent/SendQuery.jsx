import emailjs from 'emailjs-com'
const SendQuery = () => {
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
    <div className='flex-col mb-2 text-center'>
        <hr className=' border-violet-500'/>
        <h2 className='text-2xl'>Send Query</h2>
        <form onSubmit={handleSubmit}>
        <div><input placeholder='Email' type='text' className='text-center rounded-xl mb-2 h-10 border w-60 bg-violet-200'/></div>
        <div><input placeholder='Phone' type='Number'className='text-center rounded-xl mb-2 h-10 border w-60 bg-violet-200'/></div>
        <div><textarea placeholder='Query ' className='text-center rounded-xl mb-2 h-10 border w-60 bg-violet-200'></textarea></div>
        <div><button className=' h-10 w-60 text-center font-bold text-white rounded bg-violet-600'>Send</button></div>
        </form>
    </div>
  )
}

export default SendQuery