import FirstSection from "@/components/sections/first/FirstSection";
import SecondSection from "@/components/sections/second/SecondSection";

const css = `
  .home__container section {
    width: 95%;
    max-width: 1200px;
    margin: 26px auto;
  }
`;

const Home = () => {
  return (
    <div className="home__container">
      <style>{css}</style>
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default Home;
