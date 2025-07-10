"use client"

import { useState } from "react"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    preferences: {
      dietary: ["Vegetarian"],
      allergies: ["Nuts"],
      budget: "Medium",
    },
  })

  const orderHistory = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      total: 89.99,
      status: "Delivered",
      items: 12,
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      total: 156.45,
      status: "Delivered",
      items: 8,
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      total: 67.32,
      status: "Processing",
      items: 15,
    },
  ]

  const smartCartHistory = [
    {
      id: "SC-001",
      type: "Weekly Groceries",
      date: "2024-01-15",
      items: 25,
      used: true,
    },
    {
      id: "SC-002",
      type: "Party Essentials",
      date: "2024-01-12",
      items: 18,
      used: true,
    },
    {
      id: "SC-003",
      type: "Healthy Meals",
      date: "2024-01-08",
      items: 22,
      used: false,
    },
  ]

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    alert("Profile updated successfully!")
  }

  const tabs = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "orders", name: "Order History", icon: "📦" },
    { id: "smart-carts", name: "Smart Carts", icon: "🛒" },
    { id: "preferences", name: "Preferences", icon: "⚙️" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Account</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Manage your profile, orders, and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-walmart-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">JD</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{profileData.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Premium Member</p>
                </div>

                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-walmart-green text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                {/* Profile Tab */}
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profile Information</h2>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-walmart-green hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Update Profile
                      </button>
                    </form>
                  </div>
                )}

                {/* Orders Tab */}
                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order History</h2>
                    <div className="space-y-4">
                      {orderHistory.map((order) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order {order.id}</h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {order.date} • {order.items} items
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-walmart-blue dark:text-walmart-green">
                                ${order.total}
                              </p>
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Smart Carts Tab */}
                {activeTab === "smart-carts" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Smart Cart History</h2>
                    <div className="space-y-4">
                      {smartCartHistory.map((cart) => (
                        <div
                          key={cart.id}
                          className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cart.type}</h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                Generated on {cart.date} • {cart.items} items
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  cart.used
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                }`}
                              >
                                {cart.used ? "Used" : "Saved"}
                              </span>
                              <button className="text-walmart-green hover:text-green-600 font-medium">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === "preferences" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shopping Preferences</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Dietary Preferences
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {["Vegetarian", "Vegan", "Gluten-Free", "Keto", "Organic"].map((diet) => (
                            <button
                              key={diet}
                              className={`px-4 py-2 rounded-lg border transition-colors ${
                                profileData.preferences.dietary.includes(diet)
                                  ? "bg-walmart-green text-white border-walmart-green"
                                  : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-walmart-green"
                              }`}
                            >
                              {diet}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Budget Range</h3>
                        <select className="w-full md:w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-walmart-green focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                          <option>Low ($0-50)</option>
                          <option selected>Medium ($50-150)</option>
                          <option>High ($150+)</option>
                        </select>
                      </div>

                      <button className="bg-walmart-green hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
