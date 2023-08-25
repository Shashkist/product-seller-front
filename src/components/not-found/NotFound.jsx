import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
            <span className="display-1">
                404
            </span>
            <div className="mb-4 lead">
                The page is not found
            </div>
            <Link to ="/home" className="btn btn-link">
                back to home
            </Link>
            
        </div>
      </div>
    </div>
  );
}

export default NotFound;
