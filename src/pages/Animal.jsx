
import Navbar from "../components/Navabr";
import "./Vegetable.css"; // same stylesheet, shared with the Vegetable page

import ProductList from "../components/ProductList";

function Animal() {


    return (
        <>
        <Navbar />
        <div className="veg-page">
            <header className="veg-header">
                <div className="veg-header-inner">
                    <h1 className="veg-title">Animal Food</h1>
                    <p className="veg-subtitle">
                        Feed for dogs, cats, birds, fish and farm animals, all in one place.
                    </p>
                </div>
            </header>
            <ProductList type="animal_food"/>

           
        </div>
        </>
    );
}

export default Animal;