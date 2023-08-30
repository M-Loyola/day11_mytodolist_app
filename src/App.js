import { Menu } from "antd";
import { Outlet, NavLink } from "react-router-dom";
import './App.css';

const menuItems = [
  { key: "home", label: "Home", link: "/" },
  { key: "done", label: "Done List", link: "/done" },
  { key: "help", label: "Help", link: "/help" },
];

function App() {
  return (
    <>
      <Menu mode="horizontal" className="nav-bar">
        {menuItems.map(item => (
          <Menu.Item key={item.key}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
      <Outlet />
    </>
  );
}

export default App;
