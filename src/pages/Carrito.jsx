import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useCart from "../context/useCart.js";

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(Number(value || 0));

function CarritoPage() {
  const {
    itemCarrito = [],
    removeFromCart,
    clearCart,
    getTotal,
    updateQuantity,
  } = useCart();

  const total = typeof getTotal === "function" ? getTotal() : 0;

  const handleDecrease = (item) => {
    const nuevaQty = Math.max(0, (Number(item.quantity) || 0) - 1);
    if (nuevaQty === 0) removeFromCart(item.id);
    else updateQuantity(item.id, nuevaQty);
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, (Number(item.quantity) || 0) + 1);
  };

  const handleChange = (item, value) => {
    const qty = Number(value);
    if (Number.isNaN(qty) || qty < 0) return;
    if (qty === 0) removeFromCart(item.id);
    else updateQuantity(item.id, qty);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Tu carrito</h2>

      {(!itemCarrito || itemCarrito.length === 0) ? (
        <div className="alert alert-info">El carrito está vacío.</div>
      ) : (
        <>
          <div className="list-group mb-3">
            {itemCarrito.map((item) => {
              const price = Number(item.price) || 0;
              const qty = Number(item.quantity) || 0;
              const subtotal = price * qty;

              return (
                <div
                  key={item.id}
                  className="list-group-item list-group-item-action d-flex align-items-center gap-3"
                >
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      width={60}
                      height={60}
                      style={{ objectFit: "cover", borderRadius: 6 }}
                      onError={(e) => { e.target.src = ""; e.target.style.opacity = 0.6; }}
                    />
                  ) : (
                    <div style={{ width: 60, height: 60, background: "#f1f1f1", borderRadius: 6 }} />
                  )}

                  <div className="flex-grow-1">
                    <div className="fw-semibold">{item.title}</div>
                    <div className="text-muted">{formatCurrency(price)} unidad</div>

                    <div className="d-flex align-items-center gap-2 mt-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleDecrease(item)}
                        aria-label={`Disminuir cantidad de ${item.title}`}
                        type="button"
                      >
                        −
                      </button>

                      <input
                        className="form-control form-control-sm"
                        style={{ width: 80 }}
                        type="number"
                        min="0"
                        value={qty}
                        onChange={(e) => handleChange(item, e.target.value)}
                        aria-label={`Cantidad de ${item.title}`}
                      />

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleIncrease(item)}
                        aria-label={`Aumentar cantidad de ${item.title}`}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-end me-3">
                    <div className="fw-bold">{formatCurrency(subtotal)}</div>
                    <div className="text-muted" style={{ fontSize: ".85rem" }}>Subtotal</div>
                  </div>

                  <div>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                      type="button"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-outline-secondary me-2" onClick={clearCart} type="button">
                Vaciar carrito
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => window.location.assign("/")}
                type="button"
              >
                Seguir comprando
              </button>
            </div>

            <div className="text-end">
              <div className="mb-1">Total:</div>
              <div className="h4 mb-0">{formatCurrency(total)}</div>
              <button
                className="btn btn-success mt-2"
                disabled={itemCarrito.length === 0}
                type="button"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CarritoPage;
