
import "./Vegetable.css";
import Navbar from "../components/Navabr";
import ProductList from "../components/ProductList";

function Vegetable() {
   

    return (
        <>
        <Navbar/>
        <div className="veg-page">
            <header className="veg-header">
                <div className="veg-header-inner">
                    <h1 className="veg-title">Fresh Vegetables</h1>
                    <p className="veg-subtitle">
                        Picked fresh and priced per kilo. Pick up today from the shop.
                    </p>
                </div>
            </header>
            <ProductList type ="vegetables"/>

         
        </div>
        </>
    );
}

export default Vegetable;