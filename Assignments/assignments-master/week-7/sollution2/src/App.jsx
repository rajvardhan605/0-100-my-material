import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-orange-600");
  return (
    <div className={`${bgColor} h-screen relative`}>
      <div className="flex justify-center absolute inset-x-0 bottom-10">
        <button
          type="button"
          className=" mr-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => setBgColor("bg-red-600")}
        >
          Red
        </button>
        <button
          type="button"
          className=" ml-1 mr-1 focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
          onClick={() => setBgColor("bg-yellow-500")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="ml-1 mr-1 focus:outline-none text-white bg-black hover:bg-black focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
          onClick={() => setBgColor("bg-black")}
        >
          Black
        </button>
        <button
          type="button"
          className="ml-1 mr-1 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purle-700 dark:focus:ring-purple-900"
          onClick={() => setBgColor("bg-purple-600")}
        >
          Purple
        </button>
        <button
          type="button"
          className="ml-1 mr-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
          onClick={() => setBgColor("bg-green-600")}
        >
          Green
        </button>
        <button
          type="button"
          className="ml-1 mr-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          onClick={() => setBgColor("bg-blue-600")}
        >
          Blue
        </button>
        <button
          type="button"
          className="ml-1 focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900"
          onClick={() => setBgColor("bg-orange-600")}
        >
          Default
        </button>
      </div>
    </div>
  );
}

export default App;
