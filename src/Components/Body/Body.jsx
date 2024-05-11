import React from "react";
import { FaDownload } from "react-icons/fa";
import Editor from "../../Editor/Editor";

export default function Body() {
 const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#B5EAD7', '#C7CEEA'];

 // About information
 const info = {
   basicInfo: "basic info",
   workexp: "workexp",
   project: "project",
   education: "education",
   certification: "certification",
   skills: "skills",
   languages: "languages",
   interests: "interests",
   other: "other",
 };

 return (
   <div className="w-full flex flex-col items-center mx-auto ">
     <p className="font-bold text-xl md:text-3xl text-center mb-8 text-white">Resume Builder</p>
     <div className="flex justify-between items-center gap-8">
       <div className="w-100 flex gap-40px  justify-between items-center">
         {colors.map((color, index) => (
           <div
             key={index}
             className="w-8 h-8 mx-2 flex rounded-full shadow-md"
             style={{ backgroundColor: color }}
           ></div>
         ))}
       </div>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
         <FaDownload className="mr-2" /> Download
       </button>
     </div>
     <Editor section={info}></Editor>
   </div>
 );
}