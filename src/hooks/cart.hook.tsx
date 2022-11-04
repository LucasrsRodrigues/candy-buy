import { CartDiv } from "@components/CartDiv";
import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  addItemCart: (product: Itens) => void;
  cartItems: Array<CartItemsProps>;
  getSubtotalPrice: () => number;
  getQuantityItens: () => number;
  getTotal: () => number;
  getShipping: () => number;
  handleShowCart: (state: boolean) => void;
  deleteHandler: (id: string) => void;
  quantityHandler: (action: "more" | "less", id: string) => void;
  showCart: boolean;
}

interface Itens {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartItemsProps {
  product: Itens;
  quantity: number;
}

const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);
  const [shipping, setShipping] = useState(10);
  const [showCart, setShowCart] = useState(true);

  function quantityHandler(action: 'more' | 'less', id: string) {
    const newItems = [...cartItems]; // clone the array 

    let currentQty = newItems.find(iten => iten.product.id === id);

    if (currentQty) {
      if (action === 'more') {
        currentQty.quantity = currentQty.quantity + 1;
      } else if (action === 'less') {
        if (currentQty.quantity === 1) {
          deleteHandler(currentQty.product.id);
          return;
        }

        currentQty.quantity = currentQty.quantity > 1 ? currentQty.quantity - 1 : 1;
      }
    }
    setCartItems(newItems);
  }

  function addItemCart(product: Itens) {
    const newItem = [...cartItems];

    if (newItem.find(iten => iten.product.id === product.id)) {
      quantityHandler("more", product.id);
      return;
    }

    newItem.push({ product, quantity: 1 });

    setCartItems(newItem);
  }

  const getSubtotalPrice = useCallback(() => {
    if (cartItems) {
      return cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
    }
    return 0;
  }, [cartItems]);

  const getQuantityItens = useCallback(() => {
    if (cartItems) {
      return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }
    return 0;
  }, [cartItems]);

  const deleteHandler = useCallback((id: string) => {
    let updatedCart = [...cartItems];
    const indexSelected = updatedCart.findIndex(element => element.product.id === id);

    updatedCart.splice(indexSelected, 1);
    setCartItems(updatedCart);
  }, [cartItems]);

  function handleShowCart(state: boolean) {
    setShowCart(state);
  }

  const getTotal = useCallback(() => {
    let total = getSubtotalPrice() + shipping;

    return total;
  }, [shipping, getSubtotalPrice]);

  const getShipping = useCallback(() => {
    return shipping;
  }, []);

  return (
    <CartContext.Provider value={{ addItemCart, cartItems, handleShowCart, showCart, getTotal, getShipping, getSubtotalPrice, getQuantityItens, quantityHandler, deleteHandler }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}

export {
  CartProvider,
  useCart
}