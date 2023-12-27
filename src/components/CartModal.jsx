import React, { forwardRef, useImperativeHandle, useState } from "react";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref
) {
  const [modalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setModalOpen(true);
    },
    close: () => {
      setModalOpen(false);
    },
  }));

  return (
    <div className={`custom-modal ${modalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={() => ref.current.close()}>
          &times;
        </span>
        <h2>{title}</h2>
        <Cart
          items={cartItems}
          onUpdateItemQuantity={onUpdateCartItemQuantity}
        />
        <form className="modal-actions" method="dialog">
          {actions}
        </form>
      </div>
    </div>
  );
});

export default CartModal;
