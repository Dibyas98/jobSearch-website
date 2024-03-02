import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-center p-2 font-semibold py-4">
      <div className="flex w-3/5  xl:justify-between xl:w-1/3">
        <div className="w-20 flex items-center font-bold">
          <p>Logo</p>
        </div>
        <div className="">
          <ul className="flex w-36 justify-between">
            <Link to={"/"}>
              <li>Jobs</li>
            </Link>
            <Link to={"/post-job"}>
              <li>Post Jobs</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
