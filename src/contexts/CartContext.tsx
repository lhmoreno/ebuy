import type { Product } from '../@types/Product'

import { ReactNode, useEffect, useState, createContext } from 'react'

import { listFilteredProducts } from '../utils/products'

export interface ProductCartProps extends Product {
  quanty: number
}

interface CartContextProps {
  products: ProductCartProps[]
  addProduct: (product_id: number) => void
  onChangeProductQuanty: (product_id: number, quanty: number) => void
  deleteProduct: (product_id: number) => void
  subtotal: number
  delivery: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({
  products: [],
  addProduct: () => {},
  onChangeProductQuanty: () => {},
  deleteProduct: () => {},
  subtotal: 0,
  delivery: 0
} as CartContextProps)

export function CartContextProvider(props: CartContextProviderProps) {
  const [products, setProducts] = useState<ProductCartProps[]>([])
  const [subtotal, setSubtotal] = useState(0)

  function updteCart(ids: number[]) {
    if (ids.length !== 0) {
      (async () => {
        const productsStore = await listFilteredProducts({ id: ids })
        
        let initialSubtotal = 0
        const initialProducts: ProductCartProps[] = productsStore.map((product,) => {
          initialSubtotal += product.price
          return { ...product, quanty: 1 }
        })

        setProducts(initialProducts)
        setSubtotal(initialSubtotal)
      })()
    }
  }

   useEffect(() => {
    const cartStorage = localStorage.getItem('cart')
    const ids = cartStorage ? JSON.parse(cartStorage) as number[] : []
    updteCart(ids)
  }, [])

  function addProduct(product_id: number) {
    const cartStorage = localStorage.getItem('cart')
    const ids = cartStorage ? JSON.parse(cartStorage) as number[] : []
    ids.push(product_id)

    localStorage.setItem('cart', JSON.stringify(ids))

    updteCart(ids)
  }

  function onChangeProductQuanty(product_id: number, quanty: number) {
    if (quanty === 0) {
      const productIndex = products.findIndex(({ id }) => id === product_id)
      if (productIndex < 0 || products[productIndex].quanty === 1) return

      const newProducts = products
      const newSubtotal = subtotal + (1 - newProducts[productIndex].quanty) * newProducts[productIndex].price

      newProducts[productIndex] = {...newProducts[productIndex], quanty: 1}

      setProducts(newProducts)
      setSubtotal(newSubtotal)
    }

    if (quanty > 0 && quanty < 100) {
      const productIndex = products.findIndex(({ id }) => id === product_id)
      if (productIndex < 0) return

      const newProducts = products
      const newSubtotal = subtotal + (quanty - newProducts[productIndex].quanty) * newProducts[productIndex].price

      newProducts[productIndex] = {...newProducts[productIndex], quanty}

      setProducts(newProducts)
      setSubtotal(newSubtotal)
    }
  }

  function deleteProduct(product_id: number) {
    const productIndex = products.findIndex(({ id }) => id === product_id)
    if (productIndex < 0) return

    const newProducts = products.filter(({ id }) => id !== product_id)
    const newSubtotal = subtotal - products[productIndex].quanty * products[productIndex].price

    localStorage.setItem('cart', JSON.stringify(newProducts))

    setProducts(newProducts)
    setSubtotal(newSubtotal)
  }

  return (
    <CartContext.Provider value={{ 
      products, 
      addProduct,
      onChangeProductQuanty, 
      deleteProduct, 
      subtotal, 
      delivery: 0, 
    }}>
      {props.children}
    </CartContext.Provider>
  )
}
