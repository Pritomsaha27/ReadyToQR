import React from "react";
import QRCode from "react-qr-code";

function HomePage() {
  return (
    <>
      <p>home page</p>

      <QRCode
        className=""
        size={300}
        value={"https://pixelperfectapp.netlify.app/"}
        viewBox={`0 0 256 256`}
      />
    </>
  );
}

export default HomePage;
