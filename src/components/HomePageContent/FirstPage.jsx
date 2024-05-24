import { useAuth } from "@/context/UserContext";
import { useNavigate } from "react-router-dom/dist";

const FirstPage = () => {
    const { role } = useAuth();
    const nav=useNavigate();
  return (
      <div className="md:flex-row flex justify-around mt-20 mb-5 flex-col-reverse items-center"> 
        <div className="flex-col">
          <h2 className="font-extrabold text-violet-800 mb-9 mt-9 text-2xl">Online Complaint Portal</h2>
          <p className="mb-10">The Only Place where Your Complaint are precious to us!<br />
            if you have a complaint against any department area <br /> you are at right place
          </p>
          <button className="bg-violet-600 w-55 text-white font-bold py-1 px-5 rounded" onClick={()=> {role ? nav('/register'):nav('/login-user')}}>Register Complaint</button>
        </div>
        <div className="">
          <img src="./first.png" alt="images" className="doc-logo"></img>
        </div>
      </div>
  )
}

export default FirstPage