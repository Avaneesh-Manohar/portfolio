import React from "react";
import "./portfolio.css";
function Subportfolio({ img, title, link }) {
  return (
    <div className="Subportfolio">
          <img src={img} alt="hello" width='100%' height='70%'/>
          <p>{title}</p>
          <a href={link} target="_blank">
            Visit Now
          </a>
    </div>
  );
}

export default Subportfolio;
