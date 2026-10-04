
import "./Vegetable.css"; // same stylesheet, shared with the other pages
import Navbar from "../components/Navabr";
import ProductList from "../components/ProductList";

function Grocery() {


    return (
        <>
          
        <Navbar/>
        <div className="veg-page">
            <header className="veg-header">
                <div className="veg-header-inner">
                    <h1 className="veg-title">Grocery</h1>
                    <p className="veg-subtitle">
                        Rice, flour, pulses, oil, spices and everyday kitchen staples.
                    </p>
                </div>
              
            </header>
              <ProductList type="grocery"/>  

        </div>
        </>
    );
}

export default Grocery;