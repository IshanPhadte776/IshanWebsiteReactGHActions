import React, { useEffect, useState } from "react";
import profilePic from "./profilePicture.png";

function Hero() {
  return (
    <div className="relative">

      <div>
        <div>
          {" "}
          {/* Adjusted max width */}
          <div className="flex justify-center mt-4 ">
          <img
            src={profilePic}
            className="w-1/8 xs:w-1/6 sm:w-1/5 md:w-1/5 lg:w-2/5"
            alt="Profile"
          />
          </div>
          <h1 className="text-4xl font-bold text-center my-4">Ishan Phadte</h1>
          <div className="text-lg text-justify">
            <div className="mb-2 mx-4">
              <p>
                Hello, My name is Ishan Phadte. I am a 3rd-year Computer Science
                student at the University of Ottawa. I am a great software
                engineer because I possess exceptional problem-solving skills.
              </p>
            </div>
            <div className="mb-2 mx-4 text-center">
              <p className="text-justify">
                I am specialized in Full-Stack Development and Cloud Computing. I have created various full-stack projects such as this React Website. I am also an AWS Certified Cloud Practitioner and have developed a Chatbot using various cloud services. Additionally, I have done freelancing work for a small business where I developed a website to display content and send email notifications.
              </p>
            </div>

            <div className="flex justify-center mt-4">
            <button
          onClick={() =>
            window.open(
              "https://github.com/IshanPhadte776/IshanPhadte776/blob/main/IshanPhadteResume.pdf",
              "_blank"
            )
          }
          className="bg-blue-500 text-white border border-transparent rounded-full py-2 px-4 text-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Resume
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
