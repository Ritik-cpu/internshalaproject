import React, { useState } from "react";
import data from "./data";

export default function Section() {
  const [value, setValue] = useState(0);
  const {questions,tabs} = data[value];

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="my-8">
        {data.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`font-medium m-2 text-gray-600 capitalize ${index === value && "text-[#06286E] underline underline-offset-8 "} `}
            >
              {item.tabs}
            </button>
          );
        })}
      </div>


      <video  controls>
  <source src={questions} type="video/mp4"/>
  <source src={questions} type="video/ogg"/>
  Your browser does not support HTML video.
</video>
    </div>
  );
}
