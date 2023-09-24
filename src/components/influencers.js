import React from "react";
import Influencer from "./indfuencer";

export default function Influencers({ names }) {
  return (
    <React.Fragment>
      <h1 className="mt-3 mb-2" style={{ textAlign: "center" }}>
        Influencers{" "}
      </h1>
      <div className="row ms-5  pt-3 pb-3 ">
        {/* <div className="col-lg-4 col-md-6 "> */}
        {names.map((name) => (
          <Influencer
            key={name.place}
            place={name.place}
            imageUrl={name.imageUrl}
            title={name.title}
            description={name.description}
            link={name.link}
          />
        ))}
        {/* </div> */}
      </div>
    </React.Fragment>
  );
}
