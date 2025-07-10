"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"

const Products = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Meat", "Bakery", "Snacks", "Beverages"]

  const products = [
    { id: 1, name: "Fresh Apples", price: 4.99, image: "/placeholder.svg?height=200&width=200", category: "Fruits" },
    { id: 2, name: "Bananas", price: 2.49, image: "/placeholder.svg?height=200&width=200", category: "Fruits" },
    {
      id: 3,
      name: "Organic Carrots",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Vegetables",
    },
    {
      id: 4,
      name: "Fresh Spinach",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Vegetables",
    },
    { id: 5, name: "Organic Milk", price: 3.49, image: "/placeholder.svg?height=200&width=200", category: "Dairy" },
    { id: 6, name: "Greek Yogurt", price: 5.99, image: "/placeholder.svg?height=200&width=200", category: "Dairy" },
    { id: 7, name: "Chicken Breast", price: 8.99, image: "/placeholder.svg?height=200&width=200", category: "Meat" },
    { id: 8, name: "Ground Beef", price: 6.99, image: "/placeholder.svg?height=200&width=200", category: "Meat" },
    {
      id: 9,
      name: "Whole Grain Bread",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Bakery",
    },
    { id: 10, name: "Croissants", price: 4.49, image: "/placeholder.svg?height=200&width=200", category: "Bakery" },
    { id: 11, name: "Potato Chips", price: 3.99, image: "/placeholder.svg?height=200&width=200", category: "Snacks" },
    { id: 12, name: "Mixed Nuts", price: 7.99, image: "/placeholder.svg?height=200&width=200", category: "Snacks" },
    {
      id: 13,
      name: "Orange Juice",
      price: 4.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Beverages",
    },
    {
      id: 14,
      name: "Sparkling Water",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "Beverages",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover fresh, quality products for all your needs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-walmart-green text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm text-walmart-green font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-walmart-blue dark:text-walmart-green">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-walmart-green hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-300">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
