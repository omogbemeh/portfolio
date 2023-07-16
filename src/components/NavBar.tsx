import { FC, ReactElement } from "react";

const NavBar: FC = (): ReactElement => {
  return (
    <>
      <nav className="nav">
        <h1 className="logo">Praise Omogbemeh</h1>

        <ul className="nav-list">
          <li className="nav-item">
            <a href="">Home</a>
          </li>
          <li className="nav-item">
            <a href="">About</a>
          </li>
          <li className="nav-item">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
