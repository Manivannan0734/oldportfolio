
import Parallax from "../../components/Parallax"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"
import Card2 from "../../components/Card2"
import Card3 from "../../components/Card3"
export default function Home() {
  return (
    <>
     
       <Parallax   />
       <Cards 
       description="This is the card description" 
       imageUrl="/images/about.png"/>

       <Card2
       description="This is the card description" 
       imageUrl="/images/project.png"/>

      <Card3 
       description="This is the card description" 
       imageUrl="/images/certi.png"/>

        <Footer/>
       
    </>
  )
}
