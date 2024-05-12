import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function PizzaCard(props) {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const showAlert = () => {
    alert(`Tu hai ordinato ${quantity} pizze!`);
  };

  return (
    <div className="block">
      <div className="image">
        <img src={props.img} />
      </div>
      <form>
        <label for="diameter">Diametro:</label>
        <select className="diameter" name="diameter" id="diameter">
            <option value="20">20 cm</option>
            <option value="23">23 cm</option>
            <option value="30">30 cm</option>
            <option value="32">32 cm</option>
        </select>
        </form>
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="description">{props.text}</div>
        <div className="price">{props.price}</div>
      </div>
      <div className="selector">
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
        <button className="order-button" onClick={showAlert}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Order
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;