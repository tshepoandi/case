import Nav from "./Layout/Nav";

import "./App.css";
import Hero from "./Layout/Hero";
import FeatureStories from "./Layout/FeaturedStories";
import Interviews from "./Layout/Interviews";
import Reviews from "./Layout/Reviews";


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureStories />
      <Interviews />
      <Reviews/>
      
    </>
  );
}

export default App;
