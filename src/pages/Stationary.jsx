import axios from "axios";
import { useEffect, useState } from "react";
import "./Vegetable.css"; // same stylesheet, shared with the other pages
import Navbar from "../components/Navabr";
import { useCart } from "../context/CartContext";
import ProductList from "../components/ProductList";

function Stationary() {


    return (
        <>
        <Navbar/>
        <div className="veg-page">
            <header className="veg-header">
                <div className="veg-header-inner">
                    <h1 className="veg-title">Stationery</h1>
                    <p className="veg-subtitle">
                        Notebooks, pens, pencils and everything for school and office.
                    </p>
                </div>
            </header>
            <ProductList type ="stationery"/>

           
        </div>
        </>
    );
}

export default Stationary;