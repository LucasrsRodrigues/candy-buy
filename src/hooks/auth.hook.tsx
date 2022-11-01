import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  token: string;
  phone: string;
  password: string;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthState {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({} as AuthState);

  const signIn = useCallback(async () => {
    const user = {
      id: 'c23d2527-c1a2-4da6-ac7c-97f9ec24ad20',
      name: 'lucas rodrigues santos',
      email: 'email@email.com',
      cpf: '510.669.200-87',
      token: 'b1213ee0-4e76-11ed-bdc3-0242ac120002',
      password: '123'
    };

    const access_token = 'd26ef2178a6ba55c3b5c839b834646dc';

    await AsyncStorage.multiSet([
      ['@DokiDoki:token', access_token],
      ['@DokiDoki:user', JSON.stringify(user)],
    ]);

    setData({ user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@DokiDoki:token',
      '@DokiDoki:user'
    ]);

    setData({} as AuthState);
  }, []);

  useEffect(() => {
    async function loadStoragedData() {

      const [token, user] = await AsyncStorage.multiGet([
        '@DokiDoki:token',
        '@DokiDoki:user'
      ]);

      if (token[1] && user[1]) {
        setData({ user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {
  AuthProvider,
  useAuth
}