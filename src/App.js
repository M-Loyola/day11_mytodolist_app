import TodoList from "./components/TodoList";

function App() {
  return (
    <>
    <div className="nav-bar">
      <nav>
        <ul style={{display:"flex", listStyleType: "none", justifyContent: "space-evenly"}}>
          <li><a  href={'/'}>Home</a></li>
          <li><a  href={'/done'}>Done List</a></li>
          <li><a  href={'/help'}>Help</a></li>
        </ul>
      </nav>
    </div>
    <TodoList />
    </>
  );
}

export default App;