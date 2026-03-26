// src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/comman/Navbar";
import Footer from "./components/comman/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";


// ✅ Layout component (Navbar + Footer always visible)
const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// ✅ Define router with nested routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> }

    ],
  },
]);

// ✅ App component provides the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;