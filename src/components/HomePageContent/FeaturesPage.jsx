const FeaturesPage = () => {
  return (
    <div>
        <div className='text-2xl font-bold text-center'><h1>Features of Complaint Portal</h1></div>
        <div className='md:flex-row flex mt-10 ml-10 justify-around flex-col-reverse items-center' >
        <ul className='text-1xl font-bold mb-2'>
            <li> Centralized Complaint Tracking </li>
            <li>Good User Experience</li>
            <li>Status Update</li>
            <li>Customer Feedback</li>
            <li>Mobile Accessibility</li>
        </ul>
            <div className='md:w-60 mb-2 w-40 mr-10'><img src="./third.png" alt="" /></div>
        </div>
    </div>
  )
}

export default FeaturesPage