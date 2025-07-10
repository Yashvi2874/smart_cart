import React from 'react';
import { Button } from '../components/Button';
import { 
  Brain, 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const SmartFeatures = () => {
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

  return (
    <section id="smart-cart" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Smart Cart Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Intelligence That
            <span className="text-gradient block">Transforms Shopping</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven shopping that adapts to your lifestyle, 
            saves time, and optimizes your budget.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
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

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
            <Brain className="w-5 h-5 mr-2" />
            Experience Smart Shopping
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
