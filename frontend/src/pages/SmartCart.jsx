import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  Brain, 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Sparkles,
  CheckCircle,
  ShoppingCart,
  Trash2,
  Plus,
  Minus
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

const SmartFeatures = () => {
  const [activeTab, setActiveTab] = useState('cart'); // 'cart' or 'features'
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, loading } = useCart();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Our advanced AI analyzes your preferences, dietary needs, and shopping history to suggest the perfect products.',
      color: 'bg-blue-100 text-blue-600',
      benefits: ['Personalized suggestions', 'Learn from your habits', 'Smart alternatives']
    },
    {
      icon: Calendar,
      title: 'Weekly Grocery Planning',
      description: 'Generate complete weekly grocery lists based on your meal preferences, family size, and dietary requirements.',
      color: 'bg-green-100 text-green-600',
      benefits: ['Meal planning made easy', 'Nutritionally balanced', 'Reduce food waste']
    },
    {
      icon: Users,
      title: 'Party & Event Planning',
      description: 'Planning a party? Tell us the occasion and guest count, and we\'ll create the perfect shopping list.',
      color: 'bg-purple-100 text-purple-600',
      benefits: ['Complete party packages', 'Guest count optimization', 'Theme-based suggestions']
    },
    {
      icon: TrendingUp,
      title: 'Smart Budget Optimization',
      description: 'Get the best value for your money with our intelligent price comparison and budget management tools.',
      color: 'bg-orange-100 text-orange-600',
      benefits: ['Price comparison', 'Budget tracking', 'Deal notifications']
    }
  ];

  const stats = [
    { icon: Clock, value: '75%', label: 'Time Saved', color: 'text-blue-600' },
    { icon: DollarSign, value: '30%', label: 'Money Saved', color: 'text-green-600' },
    { icon: CheckCircle, value: '95%', label: 'User Satisfaction', color: 'text-purple-600' },
    { icon: TrendingUp, value: '2x', label: 'Shopping Efficiency', color: 'text-orange-600' }
  ];

  const samplePrompts = [
    {
      label: 'Groceries for a month for 4 people',
      products: [
        { _id: '1', name: 'Fresh Apples', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop' },
        { _id: '2', name: 'Bananas', price: 2.49, imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop' },
        { _id: '3', name: 'Organic Carrots', price: 3.99, imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop' },
        { _id: '4', name: 'Fresh Spinach', price: 2.99, imageUrl: 'https://t4.ftcdn.net/jpg/13/16/86/27/240_F_1316862704_REIf0jiBBAgUjQokpyvNN1pdd5NwjHFf.jpg' },
        { _id: '5', name: 'Organic Milk', price: 3.49, imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
        { _id: '6', name: 'Greek Yogurt', price: 5.99, imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop' },
        { _id: '7', name: 'Chicken Breast', price: 8.99, imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop' },
        { _id: '8', name: 'Ground Beef', price: 6.99, imageUrl: 'https://imgs.search.brave.com/bn1xvCUKwj14gynmEuc1JFd0Ayb_-fJ9Zuw0tY9w30U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzE0LzAxLzg4/LzM2MF9GXzE1MTQw/MTg4NjBfQ3h6MGRL/dHRTSjFQZFg5NUFZ/TEtTdVZGMmsxRnVV/UmouanBn' },
        { _id: '9', name: 'Whole Grain Bread', price: 2.99, imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop' },
        { _id: '10', name: 'Croissants', price: 4.49, imageUrl: 'https://imgs.search.brave.com/9PWHTeJti37-9c-bBmpHv02o3z4X1o1bjxcpjBQlnGs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhL2ZkM2Fh/OGFmNTI2OGYyMDBh/ODhkYzhhYjQ3OGFi/MzAwMmFkOGU5NzYv/MF8wXzUwNzJfNDE4/My9tYXN0ZXIvNTA3/Mi5qcGc_d2lkdGg9/NDY1JmRwcj0xJnM9/bm9uZSZjcm9wPW5v/bmU' },
        { _id: '11', name: 'Potato Chips', price: 3.99, imageUrl: 'https://imgs.search.brave.com/LuLvykkSDm4EjQtppGFs-vWxezlEOaOYXjgdJMcqEr8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTg3LzgzOC9zbWFs/bC9wb3RhdG8tY2hp/cHMtZGVsaWNpb3Vz/LWJicS1zZWFzb25p/bmctc3BpY3ktZm9y/LWNyaXBzLXRoaW4t/c2xpY2UtZGVlcC1m/cmllZC1zbmFjay1m/YXN0LWZvb2QtcGhv/dG8uanBn' },
        { _id: '12', name: 'Mixed Nuts', price: 7.99, imageUrl: 'https://imgs.search.brave.com/EpoQGyQH5CraMV1UdCQEhvZ9OR9Q-7B8jU6j2DqNOoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZGVs/aWNpb3VzLW1peGVk/LW51dHMtd2hpdGUt/Ym93bC10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kXzg0NDQzLTMx/MTQxLmpwZz9zZW10/PWFpc19oeWJyaWQ' },
        { _id: '13', name: 'Orange Juice', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop' },
        { _id: '14', name: 'Sparkling Water', price: 2.99, imageUrl: 'https://imgs.search.brave.com/9oXMgAGTXTdhrgkVBuG8d8SSiPXeWkNWIN45VbmdV6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzg3LzI5Lzg3/LzM2MF9GXzEwODcy/OTg3OTJfWE42WmhM/Wk5NSGpVTEYwQVhT/ZmF5V2x5WktvNEhH/clcuanBn' },
        { _id: '15', name: 'Pasta', price: 2.49, imageUrl: 'https://imgs.search.brave.com/u-UfjalVYCSjpReOrfto2zoLnM0AT_0MmtyI5UiqVKI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/NzIxLzE4Ny9zbWFs/bC9yYXctcGFzdGEt/c3BhZ2hldHRpLXVu/Y29va2VkLW1hY2Fy/b25pLWJhY2tncm91/bmQtZ3JvdXAtZm9v/ZC1pbmdyZWRpZW50/LWl0YWxpYW4taGVh/bHRoeS1nZW5lcmF0/aXZlLWFpLXBob3Rv/LmpwZw' },
        { _id: '16', name: 'Tomato Sauce', price: 1.99, imageUrl: 'https://imgs.search.brave.com/5tFoQ0OlMcKGgDBWnRee89_K_WOLTQFeQ1UYjUzFao0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MTI1MDM2NS9waG90/by90b21hdG8tc2F1/Y2Utd2l0aC1mcmVz/aC10b21hdG9lcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZldmSFNpUVM5VlZK/R0dHRlp2cDBDSU9M/TGo0b2hNQmx1SHVf/aVNfSWU1Zz0' },
      ]
    },
    {
      label: 'Host a party for 10 people',
      products: [
        { _id: '11', name: 'Potato Chips', price: 3.99, imageUrl: 'https://imgs.search.brave.com/LuLvykkSDm4EjQtppGFs-vWxezlEOaOYXjgdJMcqEr8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTg3LzgzOC9zbWFs/bC9wb3RhdG8tY2hp/cHMtZGVsaWNpb3Vz/LWJicS1zZWFzb25p/bmctc3BpY3ktZm9y/LWNyaXBzLXRoaW4t/c2xpY2UtZGVlcC1m/cmllZC1zbmFjay1m/YXN0LWZvb2QtcGhv/dG8uanBn' },
        { _id: '12', name: 'Mixed Nuts', price: 7.99, imageUrl: 'https://imgs.search.brave.com/EpoQGyQH5CraMV1UdCQEhvZ9OR9Q-7B8jU6j2DqNOoA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvZGVs/aWNpb3VzLW1peGVk/LW51dHMtd2hpdGUt/Ym93bC10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kXzg0NDQzLTMx/MTQxLmpwZz9zZW10/PWFpc19oeWJyaWQ' },
        { _id: '13', name: 'Orange Juice', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop' },
        { _id: '14', name: 'Sparkling Water', price: 2.99, imageUrl: 'https://imgs.search.brave.com/9oXMgAGTXTdhrgkVBuG8d8SSiPXeWkNWIN45VbmdV6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzg3LzI5Lzg3/LzM2MF9GXzEwODcy/OTg3OTJfWE42WmhM/Wk5NSGpVTEYwQVhT/ZmF5V2x5WktvNEhH/clcuanBn' },
        { _id: '10', name: 'Croissants', price: 4.49, imageUrl: 'https://imgs.search.brave.com/9PWHTeJti37-9c-bBmpHv02o3z4X1o1bjxcpjBQlnGs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhL2ZkM2Fh/OGFmNTI2OGYyMDBh/ODhkYzhhYjQ3OGFi/MzAwMmFkOGU5NzYv/MF8wXzUwNzJfNDE4/My9tYXN0ZXIvNTA3/Mi5qcGc_d2lkdGg9/NDY1JmRwcj0xJnM9/bm9uZSZjcm9wPW5v/bmU' },
        { _id: '7', name: 'Chicken Breast', price: 8.99, imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop' },
      ]
    },
    {
      label: 'Make pasta for dinner',
      products: [
        { _id: '3', name: 'Organic Carrots', price: 3.99, imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop' },
        { _id: '4', name: 'Fresh Spinach', price: 2.99, imageUrl: 'https://t4.ftcdn.net/jpg/13/16/86/27/240_F_1316862704_REIf0jiBBAgUjQokpyvNN1pdd5NwjHFf.jpg' },
        { _id: '15', name: 'Pasta', price: 2.49, imageUrl: 'https://imgs.search.brave.com/u-UfjalVYCSjpReOrfto2zoLnM0AT_0MmtyI5UiqVKI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/NzIxLzE4Ny9zbWFs/bC9yYXctcGFzdGEt/c3BhZ2hldHRpLXVu/Y29va2VkLW1hY2Fy/b25pLWJhY2tncm91/bmQtZ3JvdXAtZm9v/ZC1pbmdyZWRpZW50/LWl0YWxpYW4taGVh/bHRoeS1nZW5lcmF0/aXZlLWFpLXBob3Rv/LmpwZw' },
        { _id: '16', name: 'Tomato Sauce', price: 1.99, imageUrl: 'https://imgs.search.brave.com/5tFoQ0OlMcKGgDBWnRee89_K_WOLTQFeQ1UYjUzFao0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MTI1MDM2NS9waG90/by90b21hdG8tc2F1/Y2Utd2l0aC1mcmVz/aC10b21hdG9lcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZldmSFNpUVM5VlZK/R0dHRlp2cDBDSU9M/TGo0b2hNQmx1SHVf/aVNfSWU1Zz0' },
      ]
    }
  ];

  // Store the week prompt's products for custom prompt use
  const weekPromptProducts = [
    { _id: '1', name: 'Fresh Apples', price: 4.99, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop' },
    { _id: '2', name: 'Bananas', price: 2.49, imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop' },
    { _id: '3', name: 'Organic Carrots', price: 3.99, imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop' },
    { _id: '4', name: 'Fresh Spinach', price: 2.99, imageUrl: 'https://t4.ftcdn.net/jpg/13/16/86/27/240_F_1316862704_REIf0jiBBAgUjQokpyvNN1pdd5NwjHFf.jpg' },
    { _id: '5', name: 'Organic Milk', price: 3.49, imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop' },
    { _id: '6', name: 'Greek Yogurt', price: 5.99, imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop' },
    { _id: '9', name: 'Whole Grain Bread', price: 2.99, imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop' },
  ];

  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const { addToCart } = useCart();

  const handleSamplePrompt = async (products) => {
    setIsGenerating(true);
    await clearCart();
    for (const product of products) {
      await addToCart(product);
    }
    setIsGenerating(false);
  };

  const handleCustomPrompt = async () => {
    setIsGenerating(true);
    await clearCart();
    // For demo, match keywords to sample prompts
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('grocery') || lowerPrompt.includes('week')) {
      await handleSamplePrompt(weekPromptProducts);
    } else if (lowerPrompt.includes('party')) {
      await handleSamplePrompt(samplePrompts.find(p => p.label.toLowerCase().includes('party')).products);
    } else if (lowerPrompt.includes('pasta')) {
      await handleSamplePrompt(samplePrompts.find(p => p.label.toLowerCase().includes('pasta')).products);
    } else {
      // Default: add a few random products
      await handleSamplePrompt([samplePrompts[0].products[0], weekPromptProducts[0]]);
    }
    setIsGenerating(false);
  };

  const CartSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">Your Smart Cart</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('features')}
            className="text-gray-600 hover:text-gray-900"
          >
            View Features
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-walmart-green mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cart...</p>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Cart is Empty</h3>
          <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
          <Button
            onClick={() => setActiveTab('features')}
            className="bg-walmart-green hover:bg-green-600 text-white"
          >
            Explore Features
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-4 flex items-center space-x-4"
            >
              <img
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-600">${item.price} each</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                  disabled={loading}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                  disabled={loading}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-right">
                <p className="font-bold text-walmart-green">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(index)}
                  disabled={loading}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-walmart-green">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex space-x-3">
              <Button
                onClick={clearCart}
                disabled={loading}
                variant="outline"
                className="flex-1"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
              <Button className="flex-1 bg-walmart-green hover:bg-green-600">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const FeaturesSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">Smart Features</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTab('cart')}
          className="text-gray-600 hover:text-gray-900"
        >
          View Cart ({cartItems.length})
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-6 sm:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Proven Results
          </h3>
          <p className="text-gray-600">
            See the impact our smart cart has on users' shopping experience
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gray-100 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section id="smart-cart" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prompt Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-center">Generate Your Smart Cart</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {samplePrompts.map((promptObj, idx) => (
              <Button
                key={idx}
                size="sm"
                className="bg-walmart-green text-white hover:bg-green-600"
                disabled={isGenerating}
                onClick={() => handleSamplePrompt(promptObj.products)}
              >
                {promptObj.label}
              </Button>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-72"
              placeholder="Enter your own prompt (e.g. I want to make pasta)"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              disabled={isGenerating}
            />
            <Button
              className="bg-walmart-green text-white hover:bg-green-600"
              disabled={isGenerating || !prompt.trim()}
              onClick={handleCustomPrompt}
            >
              Generate
            </Button>
          </div>
          {isGenerating && <div className="text-center text-gray-500 mt-2">Generating your cart...</div>}
        </div>
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Smart Cart</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Your Intelligent
            <span className="text-gradient block">Shopping Assistant</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven shopping that adapts to your lifestyle, 
            saves time, and optimizes your budget.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'cart'
                  ? 'bg-white text-walmart-green shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Your Cart ({cartItems.length})
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'features'
                  ? 'bg-white text-walmart-green shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Smart Features
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'cart' ? <CartSection /> : <FeaturesSection />}
      </div>
    </section>
  );
};

export default SmartFeatures;
