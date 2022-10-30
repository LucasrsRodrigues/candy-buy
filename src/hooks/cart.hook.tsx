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
  quantity: number;
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
  const [quantity, setQuantity] = useState(0);

  function addCartItem(newIten: Itens) {
    if (!newIten.hasOwnProperty('quantity')) {
      Object.assign(newIten, {
        quantity: 1
      });
    }

    if (itens.length <= 0) {
      const newArr = Array(newIten);
      setItens(newArr);
      addQuantity();
      return;
    }

    const newItemMap = itens.map(item => {
      return item.id === newIten.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    addQuantity();
    setItens(newItemMap);
  }

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <CartContext.Provider value={{ addCartItem, show, setShow, itens, quantity }}>
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