import React from "react";

function SubmitBtn({text}) {
  return (
    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2 my-3">
      {text}
    </button>
  );
}

export default SubmitBtn;
