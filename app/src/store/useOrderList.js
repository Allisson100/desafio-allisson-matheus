import { create } from "zustand"

export const useOrderList = create((set) => ({
    orderList: [],
    setOrderList: (newOrder) => set((state) => ({orderList: newOrder }))
}))