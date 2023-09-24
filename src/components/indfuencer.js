import React from "react";

export default function Influencer(props) {
  return (
    <React.Fragment>
      <div
        className="card col-lg-4 col-md-6"
        style={{
          width: "37rem",
          margin: "50px",
          boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)",
        }}
      >
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 style={{ textAlign: "center" ,fontSize:"20px", fontWeight:"bolder"}} className="card-title">
            {props.title}
          </h4>
          <h5 style={{ fontSize:"15px", fontWeight:"bold"}} >{props.place}</h5>
          <p className="card-text" style={{ fontSize:"15px", fontWeight:"normal"}}>{props.description}</p>
          <br />
          <a href={props.link} className="btn btn-dark" style={{ fontSize:"15px", fontWeight:"normal"}}>
            Subscribe
          </a>

          <a href={props.link} className="btn btn-outline-primary ms-5" style={{ fontSize:"15px", fontWeight:"normal"}}>
            {props.place}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
