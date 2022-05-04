import "./Homepage.css";
import {
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
  MailList,
  Navbar,
  Footer,
} from "../../components";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />

        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
