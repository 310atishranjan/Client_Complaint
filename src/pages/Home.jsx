import Footer from "@/components/Footer"
import FeaturesPage from "@/components/HomePageContent/FeaturesPage";
import FirstPage from "@/components/HomePageContent/FirstPage";
import SecondPage from "@/components/HomePageContent/SecondPage";
import SendQuery from "@/components/HomePageContent/SendQuery";


const Home = () => {

  return (
      <div className="w-screen">
      <div><FirstPage/></div>
      <div><SecondPage/></div>
      <div><FeaturesPage/></div>
      <div><SendQuery/></div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
