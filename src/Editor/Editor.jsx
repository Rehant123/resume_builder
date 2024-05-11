import React, { useState } from 'react';
import InputControl from '../Components/InputControl/InputControl';
const Editor = (props) => {
  const section = props.section;
  const [activeSection, setActiveSection] = useState(Object.keys(section)[0]);

  const handleClick = (key) => {
    setActiveSection(key);
  };

  return (
    <div className="container flex flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="sidebar bg-gray-800 text-white w-1/4">
        <div className="p-4">
          <h1 className="text-lg font-bold mb-4">Sections</h1>
          {/* Sidebar content */}
          <div className="flex flex-col gap-2">
            {Object.keys(section)?.map((x) => (
              <div
                className={`section cursor-pointer p-2 rounded-md ${
                  activeSection === x ? 'bg-blue-500' : 'hover:bg-blue-500'
                }`}
                key={x}
                onClick={() => handleClick(x)}
              >
                {section[x]}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className=''>
        <InputControl placeholder = "enter title" label = "title"/>
      </div>
    </div>
  );
};

export default Editor;
