const SecondPage = () => {
  return (
    <div className="h-50 flex-col bg-violet-300 text-border">
        <div className="md:text-center text-2xl text-white font-bold text-center ">
            <h2 className="">Online Complaint Registration <br/>
            and Management System</h2>
        </div>
        <div className="md:flex-row flex justify-around flex-col ">
            <div className=""><img src='./second.png' className="md:flex w-50 pb-2 mt-2 mx-auto"></img></div>
            <div className="text-center"><p className="md:mt-12 ml-2 text-1xl text-white">Using This Complaint Portal,one can easily register complaint,easily track it.<br/>
                it also help authorities to collect all of their client complaints <br/>
               into an one system where they can easily clasify,assign,track,<br/>and address them all
              without facing issues.
            </p></div>
        </div>
    </div>
  )
}

export default SecondPage