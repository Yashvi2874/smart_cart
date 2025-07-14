"use client"

import { createContext, useContext, useState, useEffect } from "react"
import apiService from "../services/api.js"

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load cart from backend on component mount
  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = async () => {
    try {
      setLoading(true)
      setError(null)
      const cartData = await apiService.getCart()
      setCartItems(cartData)
    } catch (err) {
      console.error('Failed to load cart:', err)
      setError('Failed to load cart')
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (product) => {
    try {
      setLoading(true)
      setError(null)
      await apiService.addToCart(product)
      await loadCart() // Reload cart to get updated state
    } catch (err) {
      console.error('Failed to add to cart:', err)
      setError('Failed to add item to cart')
    } finally {
      setLoading(false)
    }
  }

  const removeFromCart = async (index) => {
    try {
      setLoading(true)
      setError(null)
      await apiService.removeFromCart(index)
      await loadCart() // Reload cart to get updated state
    } catch (err) {
      console.error('Failed to remove from cart:', err)
      setError('Failed to remove item from cart')
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (index, quantity) => {
    try {
      setLoading(true)
      setError(null)
      await apiService.updateCartItem(index, quantity)
      await loadCart() // Reload cart to get updated state
    } catch (err) {
      console.error('Failed to update quantity:', err)
      setError('Failed to update quantity')
    } finally {
      setLoading(false)
    }
  }

  const clearCart = async () => {
    try {
      setLoading(true)
      setError(null)
      await apiService.clearCart()
    setCartItems([])
    } catch (err) {
      console.error('Failed to clear cart:', err)
      setError('Failed to clear cart')
    } finally {
      setLoading(false)
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        loading,
        error,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
