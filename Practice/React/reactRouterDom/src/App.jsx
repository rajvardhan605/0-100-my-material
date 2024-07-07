import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dasboard = lazy(()=> import("./components/Dashboard"));
const Landing = lazy(()=> import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>     {/* useNavigate hook must be under browserRouter else it will not work */}
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading...."}><Dasboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading...."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar(){
  const navigate = useNavigate();  {/* hook to be used in place of browser.location.href to prevent reloding and do client side routing */}
  return(
    <div>
      <div className="topBar" style={{background:"yellow"}}>
        <h1>My App</h1>
      </div>
      <div>
        <button onClick={()=>{navigate("/")}}>Landing Page</button>
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
      </div>
    </div>
  );
}

export default App;
