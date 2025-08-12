import { useContext } from "react";
import cartContext from "./cartContext";

export const useCart = () => {useContext(cartContext)};