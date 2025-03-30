import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { BrowserRouter, Outlet, Route, Routes, createBrowserRouter } from "react-router-dom";
// import ErrorElement from "./page/ErrorElement.jsx";
import Layout from "./components/Layout";
import Home from "./page/Home.jsx";
import Archive from "./page/Archive.jsx";
import Category from "./page/Category.jsx";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import SingleStory from "./page/SingleStory.jsx";
import axios from "axios";

createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        hello <Outlet /> end{" "}
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "archive", element: <Archive /> },
    ],
  },
]);

axios.defaults.baseURL="http://localhost:3001"
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f6214b",
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="archive"
              element={
                <Layout>
                  <Archive />
                </Layout>
              }
            />
            <Route
              path="category"
              element={
                <Layout>
                  <Category />
                </Layout>
              }
            />
            <Route
              path="about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="postType"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/story/:id"
              element={
                <Layout>
                  <SingleStory />
                </Layout>
              }
            />
          </Routes>
          {/* <RouterProvider router={router} /> */}
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
