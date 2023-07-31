import React from "react";

function ShimmerUI() {
  return (
    <>
      <div className="flex flex-wrap ">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="bg-gray-200 h-64 w-48 p-2 m-2">
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
