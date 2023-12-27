import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="site-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/option1basic">Assemeent Link</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
