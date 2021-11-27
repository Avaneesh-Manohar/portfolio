import React from "react";
import Subportfolio from "./Subportfolio";
import Footer from "./Footer";
import Nav from "./Nav";
import './portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <Nav />
      <div className="container">
        <h1>My Projects</h1>
        <div className="cardContainer">
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1634023441421-screenshot.JPG"
            }
            title={"Linkedin"}
            link={"https://Linkedin.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/5ef8546dfb24597cc52bd0ae/classroom/original/1635944071683-kfc.png"
            }
            title={"KFC"}
            link={"https://KFC.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1632575722365-screenshot.JPG"
            }
            title={"Netflix"}
            link={"https://Netflix.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/5ef8546dfb24597cc52bd0ae/classroom/original/1635944671021-analog.png"
            }
            title={"Analog Clock"}
            link={"https://Analog-Clock.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1633620452791-screenshot.JPG"
            }
            title={"Wildlife Photography"}
            link={"https://Wildlife-Photography.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1635512113988-capture.JPG"
            }
            title={"Color Guessing Game"}
            link={"https://Color-Guessing-Game.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1635512113988-capture.JPG"
            }
            title={"Color Guessing Game"}
            link={"https://Color-Guessing-Game.avaneeshmanohar.repl.co"}
          />
          <Subportfolio
            img={
              "https://ck12live.s3.ap-south-1.amazonaws.com/user/607282bd1240b078c833bfad/classroom/original/1635512113988-capture.JPG"
            }
            title={"Color Guessing Game"}
            link={"https://Color-Guessing-Game.avaneeshmanohar.repl.co"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
