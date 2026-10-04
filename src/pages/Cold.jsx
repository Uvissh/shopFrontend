import axios from "axios";
import { useEffect, useState } from "react";
import "./Vegetable.css"; // same stylesheet, shared with the other pages
import Navbar from "../components/Navabr";
import { useCart } from "../context/CartContext";
import ProductList from "../components/ProductList";

function Cold() {


    return (
        <>
        <Navbar/>
        <div className="veg-page">
            <header className="veg-header">
                <div className="veg-header-inner">
                    <h1 className="veg-title">Cold Drinks</h1>
                    <p className="veg-subtitle">
                        Sodas, juices and chilled drinks, kept cold and ready to take home.
                    </p>
                </div>
            </header>
            <ProductList type ="cold_drinks"/>

            
        </div>
        </>
    );
}

export default Cold;