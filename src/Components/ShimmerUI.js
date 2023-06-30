import React from "react";

function ShimmerUI() {
  return (
    <>
      <div className="shimmer-container">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-title"></div>
            </div>
          ))}

        {/* <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>
        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div>

        <div className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
        </div> */}
      </div>
    </>
  );
}

export default ShimmerUI;
