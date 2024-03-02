import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import PostJob from "./pages/PostJob";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AllFunc from "./function/AllFunc";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/post-job",
          element: <PostJob></PostJob>,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <AllFunc>
          <RouterProvider router={route}></RouterProvider>
        </AllFunc>
      </Provider>
    </>
  );
}

export default App;
