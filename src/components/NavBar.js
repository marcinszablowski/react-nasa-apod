import React from "react";
import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">Home</Link>
      </ul>
    </div>
  )
}