import AllContent from "./Content/AllContent";
// import CountryData from "./CountryData/CountryData";
import CountryDatas from "./CountryData/CountryDatas";
import Sponsored from "./Sponsored/Sponsored";

const Home = () => {
    
    return (
        <div>
            {/* <CountryData/> */}
            <CountryDatas/>
            <AllContent/>
           <Sponsored/>
        </div>
    );
};

export default Home;