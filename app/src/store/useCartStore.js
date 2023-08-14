import { create } from "zustand"

export const useCartStore = create((set) => ({
    cartItems: [],
    setCartItems: (newItem) => set(() => ({cartItems: newItem }))
}))