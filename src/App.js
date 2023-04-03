import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/store" element={<OurStore />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route
                        path="/compare-product"
                        element={<CompareProduct />}
                    />
                    <Route path="/wishlist" element={<WishList />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
