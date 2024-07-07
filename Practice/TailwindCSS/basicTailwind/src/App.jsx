function App() {
  return (
    <>
      {/* flex */}
      <h2>flex</h2>
      <div className="flex justify-between">
        <div className="bg-red-500">Box 1</div>
        <div className="bg-blue-500">Box 2</div>
        <div className="bg-green-500">Box 3</div>
      </div>
      {/* grid with equal length*/}
      <h2>grid with equal length</h2>
      <div className="grid grid-cols-3">
        <div className="bg-red-500">Box 1</div>
        <div className="bg-blue-500">Box 2</div>
        <div className="bg-green-500">Box 3</div>
      </div>
      {/* grid with unequal length*/}
      <h2>grid with unequal length</h2>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-6">Box 1</div>
        <div className="bg-blue-500 col-span-3">Box 2</div>
        <div className="bg-green-500 col-span-1">Box 3</div>
      </div>
      {/* grid with unequal length using flex*/}
      <h2>grid with unequal length using flex</h2>
      <div className="flex">
        <div className="bg-red-500 w-[60%]">Box 1</div>
        <div className="bg-blue-500 w-[30%]">Box 2</div>
        <div className="bg-green-500 w-[10%]">Box 3</div>
      </div>
      {/* responsiveness in grid */}
      <h2>responsiveness in grid</h2>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-10 sm:col-span-6">Box 1</div>
        <div className="bg-blue-500 col-span-10 sm:col-span-3">Box 2</div>
        <div className="bg-green-500 col-span-10 sm:col-span-1">Box 3</div>
      </div>
      {/* background/font color, font size, border radius*/}
      <h2>background/font color, font size, border radius</h2>
      <div className="bg-green-300 text-primary-700 text-xl rounded-lg">
        hello my name is raj
      </div>{" "}
      {/* text color is defined in tailwind.cofig.js */}
    </>
  );
}
export default App;
