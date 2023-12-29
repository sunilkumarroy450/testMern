import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="w-full h-full flex flex-row m-0 p-0">
      <div className="w-[250px] h-full bg-red-300">
        <Sidebar />
      </div>
      <div className="bg-blue-200 w-full h-full">
        <Routes>
          {routes?.map((el, i) => (
            <Route path={el?.link} element={el?.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
