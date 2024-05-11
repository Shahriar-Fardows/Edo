import Content from "./Content/Content";
import CountryData from "./CountryData/CountryData";
import Sponsored from "./Sponsored/Sponsored";

const Home = () => {
    return (
        <div>
            <CountryData/>
            <Content/>
           <Sponsored/>
        </div>
    );
};

export default Home;