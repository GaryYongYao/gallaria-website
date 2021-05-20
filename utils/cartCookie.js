import { useContext, createContext } from 'react'

export function CartNumber({ invert }) {
  const { cartAmount } = useContext(CartContext)

  return (
    <span className={`cart-number${invert ? ' inverted' : ''}`} style={{ transform: 'translate(-55%, -15%)' }}>
      {cartAmount}
    </span>
  )
}

export const CartContext = createContext()
