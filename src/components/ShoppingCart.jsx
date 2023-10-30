import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ChoppingCartContext"
import CartItem from "./CartItem"
import formatCurrency from "./formatCurrency"

const ShoppingCart = ({isOpen}) => {
  const {cartItems , closeCart } = useShoppingCartContext()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header  closeButton>
        <Offcanvas.Title>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
        {cartItems.map((item)=>(
          <CartItem key={item.id} {...item} />
        ))}
        {formatCurrency(cartItems.reduce((total , cartItems)=>{
          c
        },0))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart