import React from 'react';
import { Button } from '../components/Button';
import { 
  Utensils, 
  Apple, 
  Shirt as ShirtIcon, 
  Home, 
  Gamepad2, 
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Fresh Groceries',
      icon: Apple,
      description: 'Fresh fruits, vegetables & dairy',
      color: 'bg-green-100 text-green-600',
      products: '2,500+ items'
    },
    {
      id: 2,
      name: 'Ready to Cook',
      icon: Utensils,
      description: 'Meal kits & cooking essentials',
      color: 'bg-orange-100 text-orange-600',
      products: '1,200+ recipes'
    },
    {
      id: 3,
      name: 'Fashion',
      icon: ShirtIcon,
      description: 'Clothing & accessories',
      color: 'bg-purple-100 text-purple-600',
      products: '5,000+ styles'
    },
    {
      id: 4,
      name: 'Home & Living',
      icon: Home,
      description: 'Furniture & home decor',
      color: 'bg-blue-100 text-blue-600',
      products: '3,200+ products'
    },
    {
      id: 5,
      name: 'Electronics',
      icon: Gamepad2,
      description: 'Gadgets & tech accessories',
      color: 'bg-indigo-100 text-indigo-600',
      products: '1,800+ devices'
    },
    {
      id: 6,
      name: 'Health & Beauty',
      icon: Heart,
      description: 'Personal care & wellness',
      color: 'bg-pink-100 text-pink-600',
      products: '900+ products'
    }
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Shop by Category</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Everything You Need in
            <span className="text-gradient block">One Smart Platform</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From daily essentials to special occasions, our AI-powered platform 
            helps you find exactly what you need across all categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {category.description}
                    </p>
                    <div className="text-xs text-gray-500 mb-3">
                      {category.products}
                    </div>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Smart Cart Features */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  AI-Powered Category Intelligence
                </h3>
                <p className="text-gray-600">
                  Our smart system learns your preferences across categories to suggest 
                  the perfect combinations for any occasion.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Cross-category recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Seasonal product suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Budget-optimized shopping</span>
                </div>
              </div>
              
              <Button className="gradient-primary text-white border-0 hover:opacity-90 w-full sm:w-auto">
                Try Smart Recommendations
              </Button>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 sm:p-6">
                <div className="space-y-3">
                  {['Weekly Meal Plan', 'Party for 8 People', 'Home Office Setup'].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex items-center justify-between">
                      <span className="font-medium text-gray-900 text-sm sm:text-base truncate mr-2">{item}</span>
                      <div className="flex -space-x-1 flex-shrink-0">
                        {[1,2,3].map((i) => (
                          <div key={i} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${i === 1 ? 'bg-green-100' : i === 2 ? 'bg-blue-100' : 'bg-purple-100'} border-2 border-white`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
