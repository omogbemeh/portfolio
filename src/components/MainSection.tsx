import { FC, ReactElement } from "react";

const MainSection: FC = (): ReactElement => {
  return (
    <>
      <main>
        <div className="hero mt-10">
          <div className="hero-header">
            <div className="hero-image"></div>
            <h2 className="hero-header-text">programmer.</h2>
          </div>
          <p className="hero-bio my-2">
            Web Developer based in Canada{" "}
            <span role="img" aria-label="Canada Flag">
              🇨🇦
            </span>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default MainSection;
