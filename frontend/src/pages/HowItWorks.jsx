import React from 'react';
import { Button } from '../components/Button';
import { 
  MessageSquare, 
  Brain, 
  ShoppingCart, 
  Truck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Tell Us Your Needs',
      description: 'Simply describe what you need - weekly groceries, party planning, or specific meals. Our AI understands natural language.',
      features: ['Natural language input', 'Voice commands supported', 'Multiple shopping purposes']
    },
    {
      step: '02',
      icon: Brain,
      title: 'AI Creates Your List',
      description: 'Our intelligent system analyzes your request, considers your preferences, and generates a personalized shopping list.',
      features: ['Smart recommendations', 'Dietary considerations', 'Budget optimization']
    },
    {
      step: '03',
      icon: ShoppingCart,
      title: 'Review & Customize',
      description: 'Review your generated cart, make adjustments, and add or remove items. The AI learns from your changes.',
      features: ['Easy customization', 'Real-time updates', 'Learning algorithm']
    },
    {
      step: '04',
      icon: Truck,
      title: 'Checkout & Delivery',
      description: 'Complete your purchase with our streamlined checkout and choose from multiple delivery options.',
      features: ['Fast checkout', 'Multiple payment options', 'Flexible delivery']
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Shopping Made Simple in
            <span className="text-gradient block">Four Easy Steps</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to delivery, our AI-powered platform makes shopping effortless 
            and intelligent. Here's how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 sm:h-12 w-px bg-gradient-to-b from-primary/30 to-transparent hidden lg:block"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl sm:text-4xl font-bold text-primary/20">
                        {step.step}
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className={`${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border">
                      <div className="absolute top-4 right-4 w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{step.step}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">
                            {step.title}
                          </div>
                        </div>
                        
                        {/* Mock Interface Elements */}
                        <div className="space-y-3">
                          {index === 0 && (
                            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                              <div className="text-sm text-gray-600 mb-2">What do you need today?</div>
                              <div className="bg-primary/10 rounded-lg p-2 sm:p-3 text-primary font-medium text-sm sm:text-base">
                                "I need groceries for a family of 4 for the week"
                              </div>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                                <span className="text-xs sm:text-sm">Analyzing preferences...</span>
                                <div className="w-12 sm:w-16 h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div className="w-3/4 h-full gradient-primary rounded-full"></div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500">✓ Dietary restrictions considered</div>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="space-y-2">
                              {['Fresh vegetables', 'Dairy products', 'Protein sources'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                                  <span className="text-xs sm:text-sm truncate mr-2">{item}</span>
                                  <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                                    Edit
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {index === 3 && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-sm sm:text-base">Total: $127.84</span>
                                <Button size="sm" className="gradient-primary text-white border-0 text-xs sm:text-sm">
                                  Checkout
                                </Button>
                              </div>
                              <div className="text-xs text-gray-500">🚚 Delivery: Tomorrow 2-4 PM</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="space-y-4 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Ready to Experience Smart Shopping?
            </h3>
            <p className="text-gray-600">
              Join thousands of users who have transformed their shopping experience with AI
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transform hover:scale-105 transition-all duration-200">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Start Shopping Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
