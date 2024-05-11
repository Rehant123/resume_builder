import React from "react";
import resumeSvg from "../../assets/resume.svg";

function Header() {
  return (
    <div className="flex justify-evenly items-center gap-8 p-12 bg-[#eefcff] min-h-[85vh]">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4">
          A <span className="bg-gradient-to-r from-[#239ce2] to-[#1369b9] bg-clip-text text-transparent">Resume</span> that stands out!
        </p>
        <p className="text-4xl font-bold">
          Make your own resume. <span className="bg-gradient-to-r from-[#239ce2] to-[#1369b9] bg-clip-text text-transparent">It's free</span>
        </p>
      </div>
      <div>
        <img src={resumeSvg} alt="Resume" className="w-96" />
      </div>
    </div>
  );
}

export default Header;