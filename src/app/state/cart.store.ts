import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { computed } from '@angular/core';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    loading: boolean;
}

const initialState: CartState = {
    items: [],
    loading: false,
};

export const CartStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((store) => ({
        totalItems: computed(() => store.items().reduce((acc, item) => acc + item.quantity, 0)),
        totalPrice: computed(() => store.items().reduce((acc, item) => acc + (item.price * item.quantity), 0)),
    })),
    withMethods((store) => ({
        addItem(item: CartItem) {
            const currentItems = store.items();
            const existingItem = currentItems.find((i) => i.id === item.id);

            if (existingItem) {
                patchState(store, {
                    items: currentItems.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                });
            } else {
                patchState(store, { items: [...currentItems, { ...item, quantity: 1 }] });
            }
        },
        removeItem(id: string) {
            patchState(store, {
                items: store.items().filter((item) => item.id !== id),
            });
        },
        clearCart() {
            patchState(store, { items: [] });
        },
    }))
);
