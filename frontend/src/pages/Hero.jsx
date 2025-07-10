import React from 'react';
import { Button } from '../components/Button';
import { ShoppingCart, Sparkles, Clock, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>AI-Powered Shopping Experience</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Cart for
                <span className="text-gradient block">Intelligent Shopping</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Experience the future of shopping with our AI-powered smart cart. Get personalized recommendations, 
                automated grocery lists, and party planning assistance - all in one intelligent platform.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">AI Recommendations</h3>
                  <p className="text-sm text-gray-600">Personalized product suggestions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Quick Planning</h3>
                  <p className="text-sm text-gray-600">Instant meal & party planning</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Smart Shopping
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
                Learn How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Your Smart Cart</h3>
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">Weekly Groceries</div>
                        <div className="text-xs text-gray-500">AI-curated essentials</div>
                      </div>
                      <div className="text-sm font-semibold text-primary">$89.99</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">Party Essentials</div>
                        <div className="text-xs text-gray-500">For 12 guests</div>
                      </div>
                      <div className="text-sm font-semibold text-primary">$156.50</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">Healthy Meals</div>
                        <div className="text-xs text-gray-500">5-day meal prep</div>
                      </div>
                      <div className="text-sm font-semibold text-primary">$67.25</div>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary text-white border-0">
                    Generate My Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 