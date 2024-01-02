
import React, { useRef, useContext } from "react";
import CartModal from "./CartModal";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Header() {
  const modal = useRef();
  const{ items } = useContext(CartContext)

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleCloseCartClick() {
    modal.current.close();
  }

  const handleCheckout = () => {
    // Simulate a successful checkout
    console.log("Checkout successful!");
    modal.current.close();

    // Add your actual checkout logic here
    // For example, you might want to:
    // - Send an order to the server
    // - Process payment
    // - Update inventory
    // - Redirect to a confirmation page
  };

  const modalActions = (
    <>
      <button onClick={handleCloseCartClick}>Close</button>
      {cartQuantity > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </>
  );

  return (
    <>
      <CartModal
        ref={modal}
        
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          {/* Replace the image source with your logo */}
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
