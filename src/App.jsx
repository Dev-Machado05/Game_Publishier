import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from './pages/Login';

//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⢶⣾⠻⣦⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠙⢶⡾⠃⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡋⠀⠀⠀⢀⣴⠟⢷⣄⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠻⣦⣀⣴⠟⠁⠀⠀⠙⢷⣄⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠛⢷⡀⠀⠀⠀⠀⠀⠙⣷⣄⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⢸⡇⠀⠀⠀⠀⢀⣴⠏⣹⠇
//⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⣼⠃⠀⠀⢀⣴⠟⢁⡼⠋⠀
//⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⣾⠃⢀⣤⠾⠋⣡⡶⠋⠀⠀⠀
//⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠻⣾⣋⣡⡴⠟⠉⠀⠀⠀⠀⠀
//⢠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
//⠈⠻⣦⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
return (
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);