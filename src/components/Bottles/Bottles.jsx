import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleAddToCard = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h3>Cart Added Qty : {cart.length}</h3>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCard={handleAddToCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;