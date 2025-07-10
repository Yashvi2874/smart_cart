// This component is no longer used in the single-page layout
import { useCart } from "../context/CartContext"
import "./Home.css"

const Home = () => {
  const { addToCart } = useCart()

  const smartCartOptions = [
    {
      id: 1,
      title: "Weekly Groceries",
      subtitle: "AI-curated essentials",
      price: 89.99,
      color: "green",
    },
    {
      id: 2,
      title: "Party Essentials",
      subtitle: "For 12 guests",
      price: 156.5,
      color: "blue",
    },
    {
      id: 3,
      title: "Healthy Meals",
      subtitle: "5-day meal prep",
      price: 67.25,
      color: "purple",
    },
  ]

  const categories = [
    {
      id: 1,
      name: "Fresh Groceries",
      description: "Fresh fruits, vegetables & dairy",
      items: "2,500+ items",
      icon: "🥬",
      color: "green",
    },
    {
      id: 2,
      name: "Ready to Cook",
      description: "Meal kits & cooking essentials",
      items: "1,200+ recipes",
      icon: "🍳",
      color: "orange",
    },
    {
      id: 3,
      name: "Fashion",
      description: "Clothing & accessories",
      items: "5,000+ styles",
      icon: "👕",
      color: "purple",
    },
    {
      id: 4,
      name: "Home & Living",
      description: "Furniture & home decor",
      items: "3,200+ products",
      icon: "🏠",
      color: "blue",
    },
    {
      id: 5,
      name: "Electronics",
      description: "Gadgets & tech accessories",
      items: "1,800+ devices",
      icon: "📱",
      color: "indigo",
    },
    {
      id: 6,
      name: "Health & Beauty",
      description: "Personal care & wellness",
      items: "900+ products",
      icon: "💄",
      color: "pink",
    },
  ]

  const features = [
    {
      title: "Party & Event Planning",
      description:
        "Planning a party? Tell us the occasion and guest count, and we'll create the perfect shopping list.",
      icon: "🎉",
      color: "purple",
      features: ["Complete party packages", "Guest count optimization", "Theme-based suggestions"],
    },
    {
      title: "Smart Budget Optimization",
      description:
        "Get the best value for your money with our intelligent price comparison and budget management tools.",
      icon: "📈",
      color: "orange",
      features: ["Price comparison", "Budget tracking", "Deal notifications"],
    },
  ]

  const stats = [
    { value: "75%", label: "Time Saved", icon: "⏰", color: "blue" },
    { value: "30%", label: "Money Saved", icon: "💰", color: "green" },
    { value: "95%", label: "User Satisfaction", icon: "✅", color: "purple" },
    { value: "2x", label: "Shopping Efficiency", icon: "📈", color: "orange" },
  ]

  const smartFeatures = [
    {
      title: "AI-Powered Recommendations",
      description:
        "Our advanced AI analyzes your preferences, dietary needs, and shopping history to suggest the perfect products.",
      icon: "🤖",
      color: "blue",
      features: ["Personalized suggestions", "Learn from your habits", "Smart alternatives"],
    },
    {
      title: "Weekly Grocery Planning",
      description:
        "Generate complete weekly grocery lists based on your meal preferences, family size, and dietary requirements.",
      icon: "📅",
      color: "green",
      features: ["Meal planning made easy", "Nutritionally balanced", "Reduce food waste"],
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              {/* AI-Powered Badge */}
              <div className="ai-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
                <span>AI-Powered Shopping Experience</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title">
                Smart Cart for <span className="text-blue">Intelligent</span>{" "}
                <span className="text-blue">Shopping</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                Experience the future of shopping with our AI-powered smart cart. Get personalized recommendations,
                automated grocery lists, and party planning assistance - all in one intelligent platform.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <Link to="/smart-cart" className="btn-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
                  </svg>
                  <span>Start Smart Shopping</span>
                </Link>
                <Link to="/how-it-works" className="btn-secondary">
                  Learn How It Works
                </Link>
              </div>

              {/* Features */}
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon blue">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3>AI Recommendations</h3>
                    <p>Personalized product suggestions</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon orange">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3>Quick Planning</h3>
                    <p>Instant meal & party planning</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-value">10K+</div>
                  <div className="stat-label">Products</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Accuracy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Available</div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Smart Cart Widget */}
            <div className="hero-right">
              <div className="smart-cart-widget">
                <div className="widget-header">
                  <h2>Your Smart Cart</h2>
                  <div className="cart-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
                    </svg>
                  </div>
                </div>

                <div className="cart-options">
                  {smartCartOptions.map((option) => (
                    <div key={option.id} className="cart-option">
                      <div className="option-content">
                        <div className={`option-indicator ${option.color}`}></div>
                        <div className="option-details">
                          <h3>{option.title}</h3>
                          <p>{option.subtitle}</p>
                        </div>
                      </div>
                      <span className="option-price">${option.price}</span>
                    </div>
                  ))}
                </div>

                <Link to="/smart-cart" className="generate-btn">
                  Generate My Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
              <span>Shop by Category</span>
            </div>
            <h2 className="section-title">
              Everything You Need in <span className="text-blue">One Smart Platform</span>
            </h2>
            <p className="section-description">
              From daily essentials to special occasions, our AI-powered platform helps you find exactly what you need
              across all categories.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className={`category-icon ${category.color}`}>
                  <span>{category.icon}</span>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-items">{category.items}</span>
                  <Link to="/categories" className="category-link">
                    Explore Category →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className={`feature-icon-large ${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="feature-list">
                    {feature.features.map((item, idx) => (
                      <li key={idx}>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Proven Results</h2>
            <p className="section-description">See the impact our smart cart has on users' shopping experience</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className={`stat-icon ${stat.color}`}>
                  <span>{stat.icon}</span>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="cta-button-container">
            <Link to="/smart-cart" className="cta-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Experience Smart Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section className="smart-features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
              <span>Smart Cart Features</span>
            </div>
            <h2 className="section-title">
              Intelligence That <span className="text-blue">Transforms Shopping</span>
            </h2>
            <p className="section-description">
              Experience the power of AI-driven shopping that adapts to your lifestyle, saves time, and optimizes your
              budget.
            </p>
          </div>

          <div className="smart-features-grid">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="smart-feature-card">
                <div className={`smart-feature-icon ${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <div className="smart-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="smart-feature-list">
                    {feature.features.map((item, idx) => (
                      <li key={idx}>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
