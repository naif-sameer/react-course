import { useState } from "react";
import Footer from "./Footer";
import FormSection from "./FormSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Todo from "./Todo";

const Home = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <main style={{height: '2000px'}}>
      <Header />

      <HeroSection />


      <hr />
      <Todo />
      <hr />


      <hr />
      <button onClick={() => setIsShow(!isShow)}>Toggle Form</button>
      <hr />

      {isShow ? <FormSection /> : null}



      <Footer />
    </main>
  );
};

export default Home;
