// import { CartDiv } from "@components/CartDiv";
import { CartDiv } from "@components/CartDiv";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  addCartItem: (newIten: Itens) => void;
  quantityItens: number;
  itens: Array<Itens>;
}

interface Itens {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [quantityItens, setQuantityItens] = useState(0);
  const [itens, setItens] = useState<Itens[]>([]);

  function addCartItem(newIten: Itens) {
    setItens([...itens, newIten]);
    setQuantityItens(quantityItens++);
  }

  return (
    <CartContext.Provider value={{ addCartItem, quantityItens, itens }}>
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