import React from "react";
import QRCode from "react-qr-code";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
function HomePage() {
  return (
    <>
    <div className="flex h-96  mt-20 container mx-auto">
    <div className="w-1/2 border p-10 border-white">
    <div className="flex justify-center gap-4">
    <p className="flex items-center border rounded-lg w-20 justify-center gap-2 "><BsChatSquareTextFill />Text</p>
    <p className="flex items-center border rounded-lg w-20 justify-center gap-2 "><FaLink />Link</p>
    <p className="flex items-center border rounded-lg w-20 justify-center gap-2 "><AiFillMessage />SMS</p>
    <p className="flex items-center border rounded-lg w-20 justify-center gap-2 "><MdEmail />Email</p>
    </div>
    </div>
    <div className="w-1/2 border border-white">
    <QRCode
        className=" m-auto mt-20"
        size={200}
        value={"https://pixelperfectapp.netlify.app/"}
      />
    </div>
    </div>
    </>
  );
}

export default HomePage;
