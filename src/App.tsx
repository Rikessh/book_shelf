import { Outlet } from "react-router-dom";
import "./App.css";
import { SideBar } from "./component/ui/sidebar";
import { SearchInput } from "./component/ui/searchInput";

function App() {
  return (
    <>
      <SideBar />
      <div>
        <SearchInput />
        <Outlet />
      </div>
    </>
  );
}

export default App;
