import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>CALIPSO | Data Hub</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Ressources</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
