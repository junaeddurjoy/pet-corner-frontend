import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Popular from "../Popular/Popular";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Featured></Featured>
        </div>
    );
};

export default Home;