import Banner from "../Banner/Banner";
import FAQSection from "./FAQSection";
import GetInTouch from "./GetInTouch";
import HomeMenu from "./HomeMenu";
import HowDoRefer from "./HowDoRefer";
import ReferralBenefits from "./ReferralBenefits";

const Home = () => {
  return (
    <div>
     <HomeMenu></HomeMenu>
      <Banner></Banner>
      <HowDoRefer></HowDoRefer>
      

      <ReferralBenefits></ReferralBenefits>
    
      <h2 className="text-center text-3xl font-semibold"> Frequently Asked <span className="text-blue-500">Questions</span></h2>
      <FAQSection></FAQSection>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
