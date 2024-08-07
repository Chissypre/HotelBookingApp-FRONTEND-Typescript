import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { validateToken } from "../api/register";
import { loadStripe, Stripe } from "@stripe/stripe-js";


const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || ""

interface AppContext {
  isLoggedIn: boolean;
  stripePromise:Promise<Stripe | null>
}

const AppContext = createContext<AppContext | undefined>(undefined);
const stripePromise = loadStripe(STRIPE_PUB_KEY)
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery("validateToken", validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider value={{ isLoggedIn: !isError, stripePromise }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
