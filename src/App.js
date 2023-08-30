import { Menu } from "antd";
import { Outlet, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Menu mode="horizontal" className="nav-bar">
        <Menu.Item key="home">
          <NavLink to={'/'}>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="done">
          <NavLink to={'/done'}>Done List</NavLink>
        </Menu.Item>
        <Menu.Item key="help">
          <NavLink to={'/help'}>Help</NavLink>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
}

export default App;