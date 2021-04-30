import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{ margin: "10px" }}>
      <Link to="/" className="item">
        Streamer
      </Link>
      <Link to="/streams/new">
        <button className="ui button primary basic ">NEW</button>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
