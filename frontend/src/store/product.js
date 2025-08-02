import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success: false, message: "Please fill in all fields."}
        }
        const res = await fetch('/api/products', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProduct)
        })
        if(!res.ok){
            return {success: false, message: "Something failed."}
        }
        const data = await res.json();
        set((state) => ({products: [...state.products, data.data]}))
        return {success: true, message: "Product created successfully."}
    },
    fetchProducts: async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        set({products: data.data})
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE"
        })
        if(!res.ok){
            const errorJson = await res.json()
            return {success: false, message: errorJson.message}
        }
        const data = await res.json();
        
        set(state => ({products: state.products.filter(product => product._id !== pid)}))
        return {success: true, message: data.message}
    },
    updateProduct: async (pid, product) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(!res.ok){
            const errorJson = await res.json();
            return {success: false, message: errorJson.message}
        }
        const data = await res.json();
        set(state => ({
            products: state.products.map(product => product._id === pid ? data.data : product)
        }))
    }
})) 

