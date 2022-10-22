// import { CartDiv } from "@components/CartDiv";
import { CartDiv } from "@components/CartDiv";
import { useNavigation } from "@react-navigation/native";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  addCartItem: (newIten: Itens) => void;
  itens: Array<Itens>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [itens, setItens] = useState<Itens[]>([]);
  const [show, setShow] = useState(false);

  function addCartItem(newIten: Itens) {
    setItens([...itens, newIten]);
  }


  return (
    <CartContext.Provider value={{ addCartItem, show, setShow, itens }}>
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