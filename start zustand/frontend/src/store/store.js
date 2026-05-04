import { create } from "zustand";
import { produce } from 'immer';

const initialState = {
  user: {
    id: "user123",
    friends: ["jack", "jessica", "colin", "paulo"],
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
      },
    },
  },
  cart: [],
};

export const useStore = create((set) => ({
  ...initialState,
  updateAddressStreet: (street) =>
    set(
      produce((state) => {
        state.user.profile.address.street = street;
      })
    ),
  addItem: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  removeItem: (index) =>
    set((state) => ({
      cart: state.cart.filter((_, i) => i !== index),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
}));