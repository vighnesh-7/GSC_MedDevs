import { create } from "zustand";

const useUserStore = create((set) => ({
  storeUser: {},
  setStoreUser: (storeUser) => set({ storeUser }),
}));

export default useUserStore;
