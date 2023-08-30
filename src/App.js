import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="nav-bar">
        <nav>
          <ul style={{ display: "flex", listStyleType: "none", justifyContent: "space-evenly" }}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/done'}>Done List</NavLink></li>
            <li><NavLink to={'/help'}>Help</NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;