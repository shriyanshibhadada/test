import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import _ from "lodash";
import cAbbr from "country-json/src/country-by-abbreviation.json";
import cName from "country-json/src/country-by-name.json";
import cCity from "country-json/src/country-by-capital-city.json";
import cFlag from "country-json/src/country-by-flag.json";
import cPopu from "country-json/src/country-by-population.json";
import cGov from "country-json/src/country-by-government-type.json";
import cTemp from "country-json/src/country-by-yearly-average-temperature.json";

const Home = () => {
  var res = _(cAbbr)
    .concat(cName)
    .groupBy("country")
    .map(_.spread(_.assign))
    .value();
  res = _(res).concat(cCity).groupBy("country").map(_.spread(_.assign)).value();
  res = _(res).concat(cFlag).groupBy("country").map(_.spread(_.assign)).value();
  res = _(res).concat(cPopu).groupBy("country").map(_.spread(_.assign)).value();
  res = _(res).concat(cGov).groupBy("country").map(_.spread(_.assign)).value();
  res = _(res).concat(cTemp).groupBy("country").map(_.spread(_.assign)).value();
  // console.log(res);
  const [rightBar, setrightBar] = useState(true);

  const handleClick = () => {
    setrightBar(!rightBar);
  };

  const ShowSidebar = () => {
    return (
      <div className="col-3">
        <Sidebar />
      </div>
    );
  };
  return (
    <div className="col">
      <div className="row">
        <Navbar handleClick={handleClick} />
      </div>
      <div className="row">
        {rightBar ? <ShowSidebar /> : ""}
        <div className="col">
          <div className="row">
            <Search res={res} />
          </div>
          <div className="row">
            <Info res={res} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
