const Bottle = ({bottle, handleAddToCard}) => {

    const {name, img, price} = bottle;

    return (
        <div style={{padding:'20px', border:'2px solid tomato', borderRadius:'10px', background:'white', color:'black'}}>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price : ${price}</h3>
            <button onClick={ () => handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;