import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import "./App.css"
import HowItWorks from "./pages/HowItWorks";
import Hero from "./pages/Hero";
import Categories from "./pages/Categories";
import SmartFeatures from "./pages/SmartCart";
import Products from "./pages/Products";

function App() {
  const [activeSection, setActiveSection] = useState("home")

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "smart-cart", "how-it-works", "products", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header activeSection={activeSection} scrollToSection={scrollToSection} />
          
          <main className="main-content">
            {/* Hero Section */}
            <div id="home">
              <Hero scrollToSection={scrollToSection} />
            </div>

            {/* Features Section */}
            <section id="features" className="features-section">
              <div className="container">
                <div className="section-header">
                  <div className="section-badge">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Why Choose SmartCart
                  </div>
                  <h2 className="section-title">Revolutionary Shopping Experience</h2>
                  <p className="section-description">
                    Discover how our AI-powered platform transforms your grocery shopping experience
                  </p>
                </div>
                
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon-large purple">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h3>AI-Powered Recommendations</h3>
                      <p>Our advanced AI analyzes your shopping patterns and preferences to suggest products you'll love.</p>
                      <ul className="feature-list">
                        <li>Personalized product suggestions</li>
                        <li>Dietary restriction awareness</li>
                        <li>Seasonal recommendations</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon-large orange">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h3>Lightning Fast Checkout</h3>
                      <p>Skip the long lines with our streamlined checkout process that takes just seconds.</p>
                      <ul className="feature-list">
                        <li>One-tap payment</li>
                        <li>Automatic receipt generation</li>
                        <li>Digital wallet integration</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon-large green">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div className="feature-content">
                      <h3>Smart Savings</h3>
                      <p>Automatically find the best deals, coupons, and discounts to save you money on every purchase.</p>
                      <ul className="feature-list">
                        <li>Automatic coupon application</li>
                        <li>Price comparison alerts</li>
                        <li>Loyalty program integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Categories Section */}
            <Categories />

            {/* Products Section */}
            <section id="products" className="products-section">
              <Products />
            </section>

            {/* Smart Cart Section */}
            <SmartFeatures />

            {/* How It Works Section */}
            <HowItWorks />

            {/* Contact Section */}
            {/* Removed: Contact section is now part of the footer */}
          </main>
        
          <Footer scrollToSection={scrollToSection} />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
