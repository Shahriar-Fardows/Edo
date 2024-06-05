import AllContent from "./Content/AllContent";
import CountryData from "./CountryData/CountryData";
import Sponsored from "./Sponsored/Sponsored";

const Home = () => {
    
    return (
        <div>
            <CountryData/>
            <AllContent/>
           <Sponsored/>
        </div>
    );
};

export default Home;