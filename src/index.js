import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelpPage } from './pages/HelpPage';
import TodoList from './components/TodoList';
import { DoneList } from './components/DoneList';
import { TodoItemDetail } from './components/TodoItemDetail';
import { ErrorPage } from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <TodoList />
      },
      {
        path:  "/done", 
        element: <DoneList />
      },
      {
        path:  "/done/:id", 
        element: <TodoItemDetail />
      },
      {
        path: "/help",
        element: <HelpPage />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
