import { FC, ReactElement } from "react";
import NavBar from "../../components/NavBar";
import MainSection from "../../components/MainSection";

const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="container">
        <NavBar />
        <MainSection />
      </div>
    </>
  );
};

export default Home;
