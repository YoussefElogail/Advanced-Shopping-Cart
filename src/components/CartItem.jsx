import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import formatCurrency from "./formatCurrency";
import { useShoppingCartContext } from "../context/ChoppingCartContext";
const CartItem = ({ id, quantity }) => {
  const itme = storeItems.find((i) => i.id === id);
  const { removeItemFromCart } = useShoppingCartContext()
  if (itme == null) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-item-center" gap={2}>
      <img
        src={itme.imgUrl}
        alt={itme.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        {itme.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(itme.price)}
        </div>
      </div>
        <div>{itme.price * quantity}</div>
      <Button variant="outline-danger" size="sm" onClick={()=> removeItemFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
