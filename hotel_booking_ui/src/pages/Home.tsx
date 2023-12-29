import HomeContainer from "../components/home/Featured";
import FeaturePropertyContainer from "../components/home/FeaturedProperty";
import FooterContainer from "../components/home/Footer";
import MailList from "../components/home/MailList";
import PropertyContainer from "../components/home/PropertyList";
import Header from "./Header";

const Home: React.FC = () => {
   return(
      <div>
         <Header />
         <HomeContainer />
         <PropertyContainer />
         <FeaturePropertyContainer />
         <MailList />
         <FooterContainer />
      </div>
   )
}

export default Home;