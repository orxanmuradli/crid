import React from "react";
import { Link } from "react-router-dom";

function Card({ detail }) {
  return (
    <div className="col-4 mt-2" >
      <div className="card">
        <img src={detail?.image} className="card-img-top" alt={detail?.title} />
        <div className="card-body">
          <h5 className="card-title">{detail?.title}</h5>

          <Link to={'/products/${detail?.id}'} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
