import * as React from "react";

const products = [
  { id: 1, name: "Poké Ball", price: 10 },
  { id: 2, name: "Great Ball", price: 20 },
  { id: 3, name: "Ultra Ball", price: 30 },
];

function calculateTotal(cart) {
  return 0;
}

const initialState = [];

function reducer(cart, action) {
  switch (action.type) {
    case "add": {
      const item = cart.find((item) => item.id === action.id);
      if (item) {
        return cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...cart,
        {
          id: action.id,
          name: products.find((p) => p.id === action.id).name,
          quantity: 1,
        },
      ];
    }
    case "update": {
      return cart.map((item) =>
        item.id === action.id
          ? {
              ...item,
              quantity:
                action.adjustment === "increment"
                  ? item.quantity + 1
                  : item.quantity - 1,
            }
          : item
      );
    }
    default:
      return cart;
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = React.useReducer(reducer, initialState);

  const handleAddToCart = (id) => dispatch({ type: "add", id });

  const handleUpdateQuantity = (id, adjustment) => {
    dispatch({
      type: "update",
      id,
      adjustment,
    });
  };

  return (
    <main>
      <h1>Poké Mart</h1>
      <section>
        <div>
          <ul className="products">
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button
                  className="primary"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <aside>
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                <div>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "decrement")}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "increment")}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
            {!cart.length && <li>Cart is empty</li>}
          </ul>
        </div>
        <hr />

        <h3>Total: ${calculateTotal(cart)}</h3>
      </aside>
    </main>
  );
}
