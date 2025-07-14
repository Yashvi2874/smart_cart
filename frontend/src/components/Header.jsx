import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User, LogOut } from 'lucide-react';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SignInModal from './SignInModal';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, signOut, isAuthenticated } = useAuth();

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Categories', id: 'categories' },
    { name: 'Products', id: 'products' },
    { name: 'SMARTCART', id: 'smart-cart' },
    { name: 'How it Works', id: 'how-it-works' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">SMARTCART</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-100">
            <div className="flex ml-10">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`!mr-10 text-gray-700 hover:text-primary transition-colors duration-200 font-medium focus:outline-none 
                     text-base md:text-sm lg:text-sm xl:text-base
                     whitespace-nowrap
                     ${activeSection === item.id ? 'text-primary font-bold underline underline-offset-8' : ''}`}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="hidden md:flex text-base md:text-sm lg:text-sm xl:text-base max-[1150px]:text-xs"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSignInModalOpen(true)}
                  className="hidden md:flex text-base md:text-sm lg:text-sm xl:text-base max-[1150px]:text-xs"
                >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
              )}
              
              <Button 
                size="sm" 
                className="gradient-primary text-white border-0 hover:opacity-90 text-base md:text-sm lg:text-sm xl:text-base max-[1150px]:text-xs"
                onClick={() => scrollToSection('smart-cart')}
              >
              <ShoppingCart className="w-4 h-4 mr-2" />
                Cart ({getCartItemsCount()})
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4 overflow-y-auto max-h-[80vh]">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }}
                className={`block text-gray-700 hover:text-primary font-medium w-full text-left ${activeSection === item.id ? 'text-primary font-bold underline underline-offset-8' : ''}`}
                style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
                {isAuthenticated ? (
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { setIsSignInModalOpen(true); setIsMenuOpen(false); }}
                    className="mt-4 w-full text-left text-gray-700 hover:text-primary font-medium"
                  >
                    Sign In
                  </button>
                )}
            </div>
          </div>
        )}
      </div>
    </header>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </>
  );
};

export default Header;
